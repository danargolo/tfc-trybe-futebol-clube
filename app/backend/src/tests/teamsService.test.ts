import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import teamController from '../database/controllers/TeamController';
import { mockAllTeams, mockTeam, mockResponse } from './mocks/teamsMock';

import { Response } from 'superagent';
import teamService from '../database/services/TeamService';
const { expect } = chai;

chai.use(chaiHttp);


describe('Teste da rota Teams', () => {

  let chaiHttpResponse: Response;

  afterEach(() => {
    Sinon.restore();
  });
 
  it('Testa retorno da lista de Teams', async () => {
    Sinon.stub(teamService, 'getAll').resolves(mockAllTeams);
    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mockAllTeams);
  })
  it('Retorno de um time', async () => {
    Sinon.stub(teamService, 'getById').resolves(mockResponse);
    chaiHttpResponse = await chai.request(app).get('/teams/1');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mockResponse);
  })
})
