import "./Main.css"
import Homepage from "./homepage/Homepage";
import {Route, Routes, useNavigate} from "react-router";
import Reservation from "./reservation/Reservation";
import {useState} from "react";
import ConfirmedReservation from "./reservation/ConfirmedReservation";
import {submitAPI} from "../util/api";

function Main() {
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate();

    const submitForm = (data) => {
        if (submitAPI(data)) {
            navigate("/reservations/success")
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/home" element={<Homepage/>}/>
                <Route path="/reservations" element={<Reservation availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>}/>
                <Route path="/reservations/success" element={<ConfirmedReservation/>} />
            </Routes>
        </main>
    )
}

export default Main;