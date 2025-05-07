// App.tsx
// import React from "react";
import { BookingProvider } from "./context/BookingContext";
import BookingPage from "./components/BookingPage";

const App = () => (
  <BookingProvider>
    <BookingPage />
  </BookingProvider>
);

export default App;
