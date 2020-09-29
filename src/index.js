const partial = (obj) => {
  if (Array.isArray(obj)) {
    return expect.arrayContaining(obj.map(partial));
  }

  if (typeof obj !== 'object') {
    return obj;
  }

  const objToCheck = Object.entries(obj).reduce(
    (fullObj, [key, value]) => ({
      ...fullObj,
      [key]: partial(value),
    }),
    {},
  );

  return expect.objectContaining(objToCheck);
};

expect.extend({
  toMatchPartial: (received, argument) => {
    const pass = this.equals(received, partial(argument));

    const receivedMsg = this.utils.printReceived(received);
    const expectedMsg = this.utils.printExpected(argument);

    const message = pass
      ? () => `expected ${receivedMsg} not to match object ${expectedMsg}`
      : () => `expected ${receivedMsg} to match object ${expectedMsg}`;

    return {
      message,
      pass,
    };
  },
});
