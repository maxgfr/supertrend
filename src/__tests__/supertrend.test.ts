import { supertrend } from "../supertrend";
import data from './mocks/data.json';

describe("supertrend", () => {

  it("should render good value", () => {
    expect(supertrend({
      initialArray: data,
      multiplier: 3,
      period: 10,
    })).toMatchSnapshot()
  });
})