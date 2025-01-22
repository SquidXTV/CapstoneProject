import "./Homepage.css"
import HeroSection from "./hero/Hero";
import Highlights from "./highlights/Highlights";
import Reviews from "./reviews/Reviews";
import About from "./about/About";

import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

function Homepage() {
    const specials = [
        {
            id: 1,
            name: 'Greek salad',
            price: 12.99,
            description: `The famous Greek salad is a vibrant mix of fresh cucumbers, juicy tomatoes, red onions,
             Kalamata olives, and creamy feta cheese. Dressed with olive oil and oregano, it's a classic taste of the Mediterranean.`,
            image: greekSalad
        },
        {
            id: 2,
            name: 'Bruschetta',
            price: 5.99,
            description: `The classic bruschetta is a delicious Italian appetizer featuring toasted bread topped 
            with a fresh blend of diced tomatoes, garlic, basil, and olive oil. Simple yet flavorful, it’s a perfect start to any meal.`,
            image: bruschetta
        },
        {
            id: 3,
            name: 'Lemon Dessert',
            price: 5.99,
            description: `The zesty lemon dessert is a refreshing treat, combining tangy lemon flavor with a sweet,
             creamy texture. Light and indulgent, it’s the perfect way to brighten up any occasion.`,
            image: lemonDessert
        }
    ];

    const reviews = [
        {
            id: 1,
            name: "Emily T.",
            rating: 5,
            description: `I visited Little Lemon last weekend with my family, and it was a fantastic experience! 
            The ambiance was cozy and inviting, and the staff were incredibly friendly. We tried the chef’s special pasta,
             and it was simply divine. The desserts were a highlight, especially the chocolate lava cake. Highly 
             recommend this place for a memorable dining experience!`
        },
        {
            id: 2,
            name: "Michael L.",
            rating: 4,
            description: `The food at Little Lemon was absolutely delicious, especially the grilled salmon and the 
            fresh garden salad. However, the service was slower than expected, and we had to wait a bit longer than 
            usual for our main course. The staff apologized and offered complimentary drinks, which was appreciated.
            Would definitely return for the food!`
        },
        {
            id: 3,
            name: "Sarah K.",
            rating: 2,
            description: `I had high hopes for Little Lemon, but unfortunately, it didn’t live up to the hype. 
            The decor was beautiful, but the food was underwhelming and overpriced. The steak I ordered was overcooked 
            despite asking for medium-rare. The staff seemed overwhelmed, and it was hard to get their attention. 
            Hopefully, it was just an off night.`
        },
        {
            id: 4,
            name: "Daniel R.",
            rating: 5,
            description: `My partner and I had an amazing dinner at [Restaurant Name]. The candlelit tables and soft music 
            created the perfect romantic setting. The wine selection was excellent, and the seafood platter was fresh and 
            flavorful. Our server was attentive and made great recommendations. We’ll definitely be back for another special evening!`
        }
    ]

    return (
        <div className="homepage">
            <HeroSection/>
            <Highlights specials={specials}/>
            <Reviews reviews={reviews}/>
            <About />
        </div>
    );
}

export default Homepage;