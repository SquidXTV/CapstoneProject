import "./Main.css"
import Homepage from "./homepage/Homepage";
import {Route, Routes} from "react-router";
import Reservation from "./reservation/Reservation";
import {useState} from "react";
import ConfirmedReservation from "./reservation/ConfirmedReservation";

function Main() {
    const [availableTimes, setAvailableTimes] = useState([]);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/home" element={<Homepage/>}/>
                <Route path="/reservations" element={<Reservation availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}/>
                <Route path="/reservations/success" element={<ConfirmedReservation/>} />
            </Routes>
        </main>
    )
}

export default Main;