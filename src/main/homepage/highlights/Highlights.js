import "./Highlights.css"

function Highlights({specials}) {
    return (
        <section className="highlights">
            <div className="highlight-header">
                <h2>This weeks specials!</h2>
                <button>
                    Online Menu
                </button>
            </div>
            <section className="highlight-offers">
                {specials.map((special) =>
                    <article className="highlight" key={special.id}>
                        <img className="highlight-image" src={special.image} alt={special.name} />
                        <section className="highlight-text">
                            <div>
                                <h3>{special.name}</h3>
                                <h3 className="highlight-price">${special.price}</h3>
                            </div>
                            <p>{special.description}</p>
                            <button>
                                Order a delivery
                            </button>
                        </section>
                    </article>
                )}
            </section>
        </section>
    )
}

export default Highlights;