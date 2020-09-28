function partial(obj) {
  if (Array.isArray(obj)) {
    return expect.arrayContaining(obj.map((x) => partial(x)));
  }

  if (typeof obj === 'object') {
    for (let key of Object.keys(obj)) {
      obj[key] = partial(obj[key]);
    }

    return expect.objectContaining(obj);
  }

  return obj;
}

expect.extend({
  toMatchPartial(received, argument) {
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
