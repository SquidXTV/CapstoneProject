import "./Reservation.css"
import {useEffect, useState} from "react";
import {fetchAPI} from "../../util/api";

function currentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
}

function Reservation({availableTimes, setAvailableTimes, submitForm}) {
    const [date, setDate] = useState(currentDate());
    const [time, setTime] = useState(null);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    useEffect(() => {
        setAvailableTimes([...fetchAPI(new Date(date))]);
    }, [date, setAvailableTimes])

    return (
        <form onSubmit={() => submitForm([date, time, guests, occasion])}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default Reservation;