import { render, screen } from "@testing-library/react";
import Reservation from "./Reservation";


test('Renders the BookingForm heading', () => {
    render(<Reservation availableTimes={[]} />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})