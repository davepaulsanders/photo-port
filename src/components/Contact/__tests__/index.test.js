import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders as expected", () => {
    render(<ContactForm />);
  });
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("has proper text inside elements", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("contact")).toHaveTextContent("Contact me");
    expect(getByTestId("contact-submit")).toHaveTextContent("Submit");
  });
});
