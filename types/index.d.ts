/// <reference types="jest" />

declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R> {
    /**
     * Use .`toMatchPartial` when checking of the `expected` object contains given structure
     * @param {String} message
     */
    toMatchPartial(partial: any): R;
  }
}
