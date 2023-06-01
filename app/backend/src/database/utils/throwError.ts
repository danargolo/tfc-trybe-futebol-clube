const throwError = (message: string, status: number) => {
  throw Object.assign(
    new Error(message),
    { status },
  );
};

export default throwError;
