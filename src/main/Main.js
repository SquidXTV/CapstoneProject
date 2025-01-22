import "./Main.css"
import Homepage from "./homepage/Homepage";
import {Route, Routes} from "react-router";
import Reservation from "./reservation/Reservation";

function Main() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/home" element={<Homepage/>}/>
                <Route path="/reservations" element={<Reservation/>}/>
            </Routes>
        </main>
    )
}

export default Main;