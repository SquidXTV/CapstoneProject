import "./Reservation.css"
import {fetchAPI, submitAPI} from "../../util/api";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as Yup from 'yup';

function currentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
}

function Reservation({availableTimes, setAvailableTimes}) {
    const navigate = useNavigate();

    const occasions = ["Birthday", "Anniversary", "Engagement"]
    const initialValues = {
        date: currentDate(),
        time: "",
        guests: 1,
        occasion: occasions[0]
    }

    const onSubmit = (values) => {
        if (submitAPI(values)) {
            console.log("Success")
            navigate("/reservations/success");
        }
    }

    const validationSchema = Yup.object({
        date: Yup.date().min(new Date(), "The reservation date must be in the future.").required("The reservation date is required."),
        time: Yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in the format HH:MM.").required("The reservation time is required."),
        guests: Yup.number().min(1, "At least one guest is required.").max(10, "At most ten guests possible.").required("The number of guests is required."),
        occasion: Yup.string().oneOf(occasions, `Occasion must be one of the following: ${occasions}`).required("The occasion is required."),
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({handleChange}) => (
                <Form>
                    <label htmlFor="date">Reservation Date:</label>
                    <Field id="date" name="date" type="date" onChange={(e) => {
                        handleChange(e);
                        setAvailableTimes([...fetchAPI(new Date(e.target.value))]);
                    }}/>
                    <ErrorMessage name="date" component="div" style={{color: 'red'}}/>

                    <label htmlFor="time">Reservation Time:</label>
                    <Field id="time" name="time" as="select">
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="time" component="div" style={{color: 'red'}}/>

                    <label htmlFor="guests">Number of Guests:</label>
                    <Field id="guests" name="guests" min="1" max="10" type="number"/>
                    <ErrorMessage name="guests" component="div" style={{color: 'red'}}/>

                    <label htmlFor="occasion">Occasion:</label>
                    <Field id="occasion" name="occasion" as="select">
                        {occasions.map((occasion) => (
                            <option key={occasion} value={occasion}>
                                {occasion}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="occasion" component="div" style={{color: 'red'}}/>

                    <button type="submit">Make your reservation</button>
                </Form>
            )}
        </Formik>
    )
}

export default Reservation;