import { foo } from "../src";
import * as chai from "chai";

const expect = chai.expect;

describe("Main Library", () => {
  it("should be able to add things correctly", () => {
    expect(foo()).to.equal("bar");
  });
});
