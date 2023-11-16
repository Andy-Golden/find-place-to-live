import { SignUpPage } from "@pages";
import renderer from "react-test-renderer";

describe("Sign up", () => {
  it("Render correctly", () => {
    const tree = renderer.create(<SignUpPage />).toJSON();
    expect(tree).toMatchInlineSnapshot();
    // expect(true).toBe(true);
  });
});
