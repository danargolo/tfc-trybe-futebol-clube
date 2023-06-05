import { AttributesInterface } from '../models/TeamModel';
import { matchesInterface } from '../models/MatchesModel';

interface leaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

class Leaderboard {
  private name: string;
  private declare totalPoints: number;
  private declare totalGames: number;
  private declare totalVictories: number;
  private declare totalDraws: number;
  private declare totalLosses: number;
  private declare goalsFavor: number;
  private declare goalsOwn: number;
  private declare goalsBalance: number;
  private declare efficiency: number;

  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  private points(home: number, away: number) {
    if (home > away) {
      this.totalPoints += 3;
      this.totalVictories += 1;
    } else if (home === away) {
      this.totalPoints += 1;
      this.totalDraws += 1;
    } else {
      this.totalLosses += 1;
    }

    this.goalsFavor += home;
    this.goalsOwn += away;
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  private calcEfficiency(): void {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private table(): any {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: +this.efficiency.toFixed(2),
    };
  }

  public filteredMatches(match:matchesInterface[], id:number) {
    this.totalGames = match.length;
    match.forEach((m:matchesInterface) => {
      if (id === m.homeTeamId) {
        this.points(m.homeTeamGoals, m.awayTeamGoals);
      } else {
        this.points(m.awayTeamGoals, m.homeTeamGoals);
      }
    });
    this.calcEfficiency();

    return this.table();
  }
}

export default function board(
  teams:AttributesInterface[],
  matches: any,
  str: string,
): leaderboard[] {
  const data = teams.map((t) => {
    const result = new Leaderboard(t.teamName);
    if (str === 'home') {
      return result
        .filteredMatches(matches.filter((match:any) => match.homeTeamId === t.id), t.id);
    }
    if (str === 'away') {
      return result
        .filteredMatches(matches.filter((match:any) => match.awayTeamId === t.id), t.id);
    }
    return result.filteredMatches(matches
      .filter((match:any) => match.homeTeamId === t.id || match.awayTeamId === t.id), t.id);
  });
  return data;
}
