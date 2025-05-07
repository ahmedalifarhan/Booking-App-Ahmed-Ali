import { render, screen, fireEvent } from "@testing-library/react";
import { BookingProvider } from "../context/BookingContext";
import BookingPage from "../components/BookingPage";

test("booking summary displays correct initial and updated total price", () => {
  render(
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  );

  const nightsInput = screen.getByLabelText("Nights:") as HTMLInputElement;
  const guestsInput = screen.getByLabelText("Guests:") as HTMLInputElement;
  const totalElement = screen.getByText(/Total:/);

  // Check initial total (1 night, 1 guest)
  expect(totalElement).toHaveTextContent("$100");

  // Update nights to 2
  fireEvent.change(nightsInput, { target: { value: "2" } });
  expect(totalElement).toHaveTextContent("$200");

  // Update guests to 2 (should now be 2 nights, 2 guests)
  fireEvent.change(guestsInput, { target: { value: "2" } });
  expect(totalElement).toHaveTextContent("$360"); // FAILS: got $220 instead of $360
});
