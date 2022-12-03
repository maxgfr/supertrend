import { sayHello } from "../hello";

describe("Hello", () => {
  it("should say hello", () => {
    expect(sayHello()).toBe("H_E_L_L_O");
  });
})