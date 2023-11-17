import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { SignUpPage } from "@pages";
import { ToastProvider } from "@providers";
import { store } from "@store";
import renderer from "react-test-renderer";

import "@testing-library/jest-dom";

describe("SelectMenu component", () => {
  it("Snap shot", () => {
    const tree = renderer
      .create(
        <ToastProvider>
          <Provider store={store}>
            <BrowserRouter>
              <SignUpPage />
            </BrowserRouter>
          </Provider>
        </ToastProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Form should be submitted", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
      </Provider>,
    );

    const handleOnSubmitMock = jest.fn();

    screen.getByRole("form").onsubmit = handleOnSubmitMock;

    fireEvent.change(screen.getByPlaceholderText("signUpPage.enterFullname"), {
      target: { value: "validUsername" },
    });
    fireEvent.change(screen.getByPlaceholderText("enterEmail"), {
      target: { value: "validemail@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("enterPassword"), {
      target: { value: "Hello@1" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("signUpPage.enterConfirmation"),
      {
        target: { value: "Hello@1" },
      },
    );

    fireEvent.click(screen.getByRole("button", { name: "signUp" }));

    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
});
