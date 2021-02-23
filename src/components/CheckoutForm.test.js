import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  userEvent.type(firstNameInput, "Xavier");
  userEvent.type(lastNameInput, "Twitty");
  userEvent.type(addressInput, "304 follow rd");
  userEvent.type(cityInput, "shelby");
  userEvent.type(stateInput, "NC");
  userEvent.type(zipInput, "32333");
});
