import food from "../../../assets/restaurant food.jpg";
import "./Hero.css"

function HeroSection() {
    return (
        <div className="hero">
            <div>
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <button onClick={() => console.log("clicked")}>
                        Reserve a table
                    </button>
                </section>
                <img src={food} alt="food" />
            </div>
        </div>
    )
}

export default HeroSection;
