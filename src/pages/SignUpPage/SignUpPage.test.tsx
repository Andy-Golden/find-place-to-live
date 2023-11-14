import React from "react";
import { render, screen } from "@testing-library/react";
import SignUpPage from "./SignUpPage";
import { useTranslation } from "react-i18next";

describe("SignUpPage", () => {
  test("Render correctly", () => {
    render(<SignUpPage />);

    const { t } = useTranslation();
    const formHeading = screen.getByRole("heading", {
      name: t("signUp"),
    });
    expect(formHeading).toBeInTheDocument();
  });
});
