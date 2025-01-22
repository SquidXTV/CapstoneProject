import owners from "../../../assets/restaurant owner.jpg";
import "./About.css"

function About() {
    return (
        <section className="about">
            <div>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Welcome to Little Lemon, where tradition meets innovation. We are a family-owned Mediterranean restaurant
                        dedicated to bringing the flavors of the Mediterranean to your table with a modern twist.
                    </p>
                    <p>
                        Our journey began with a love for sharing authentic recipes passed down through generations.
                        From vibrant mezze platters to perfectly seasoned grilled dishes, every plate is crafted with fresh,
                        locally sourced ingredients and a dash of creativity.
                    </p>
                    <p>
                        At Little Lemon, we strive to create a warm, inviting atmosphere where everyone feels like part of the family.
                        Whether you're here for a cozy dinner, a celebration, or a quick lunch, we aim to make every visit memorable with our
                        passion for great food and heartfelt hospitality.
                    </p>
                    <p>
                        Come savor the taste of tradition reimagined at Little Lemon – where every bite is a story.
                    </p>
                </article>
                <img src={owners} alt="Restaurant Owners"/>
            </div>
        </section>
    )
}

export default About;