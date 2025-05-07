import { render, screen, fireEvent } from "@testing-library/react";
import { BookingProvider } from "../context/BookingContext";
import BookingPage from "../components/BookingPage";

test("booking summary calculates total price correctly through interactions", () => {
  render(
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  );

  const nightsInput = screen.getByLabelText("Nights:") as HTMLInputElement;
  const guestsInput = screen.getByLabelText("Guests:") as HTMLInputElement;
  const totalElement = screen.getByText(/Total:/);

  // Starting with 1 night and 1 guest — this should be the base price: $100
  expect(totalElement).toHaveTextContent("$100");

  // Now updating nights to 2 — no extra guests yet, so 2 x $100 = $200
  fireEvent.change(nightsInput, { target: { value: "2" } });
  expect(totalElement).toHaveTextContent("$200");

  // Adding 1 extra guest (so 2 guests total) — extra fee per guest per night = $80
  // So now: 2 nights × ($100 base + $80 extra) = $360
  fireEvent.change(guestsInput, { target: { value: "2" } });
  expect(totalElement).toHaveTextContent("$360");
});
