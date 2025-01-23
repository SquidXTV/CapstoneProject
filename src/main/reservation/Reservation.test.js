import {act, fireEvent, render, screen, waitFor} from "@testing-library/react";
import Reservation from "./Reservation";
import {MemoryRouter, Route, Routes} from "react-router";
import ConfirmedReservation from "./ConfirmedReservation";

function dateWithOffset(offset) {
    const date = new Date();
    const day = date.getDate() - 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
}

test('Contains submit button', () => {
    render(
        <MemoryRouter>
            <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
        </MemoryRouter>
    );
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
});

describe('Date Validation', () => {

    test('Required date validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );
        const dateInput = screen.getByLabelText("Reservation Date:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {
            fireEvent.change(dateInput,{target: {value: ""}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("The reservation date is required.")).toBeDefined();
        })
    });

    test('Future date validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );
        const dateInput = screen.getByLabelText("Reservation Date:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {
            fireEvent.change(dateInput,{target: {value: dateWithOffset(-1)}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("The reservation date must be in the future.")).toBeDefined();
        })
    })

});

describe('Time Validation', () => {

    test('Required time validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={["17:00"]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );

        const timeInput = screen.getByLabelText("Reservation Time:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {
            fireEvent.change(timeInput,{target: {value: ""}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("The reservation time is required.")).toBeDefined();
        })
    })

})

describe('Number of Guests Validation', () => {

    test('Required number of guests validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );
        const guestsInput = screen.getByLabelText("Number of Guests:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {
            fireEvent.change(guestsInput,{target: {value: ""}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("The number of guests is required.")).toBeDefined();
        })
    })

    test('Number of guests less than min validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );
        const guestsInput = screen.getByLabelText("Number of Guests:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {
            fireEvent.change(guestsInput,{target: {value: -1}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("At least one guest is required.")).toBeDefined();
        })
    })

    test('Number of guests greater than max validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );
        const guestsInput = screen.getByLabelText("Number of Guests:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {

            fireEvent.change(guestsInput,{target: {value: 11}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("At most ten guests possible.")).toBeDefined();
        })
    })

});

describe('Occasion Validation', () => {

    test('Required occasion validation', async () => {
        render(
            <MemoryRouter>
                <Reservation availableTimes={[]} setAvailableTimes={() => {}}/>
            </MemoryRouter>
        );
        const occasionInput = screen.getByLabelText("Occasion:");
        const submitButton = screen.getByText("Make your reservation");

        act(() => {
            fireEvent.change(occasionInput,{target: {value: ""}});
            fireEvent.click(submitButton);
        })

        await waitFor(() => {
            expect(screen.getByText("The occasion is required.")).toBeDefined();
        })
    })

});