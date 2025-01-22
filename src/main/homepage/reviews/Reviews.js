import "./Reviews.css"

function Reviews({ reviews }) {
    return (
        <section className="review-section">
            <h1 className="reviews-title" >Testimonials</h1>
            <div className="reviews">
                {reviews.map((review) => (
                    <article className="review" key={review.id}>
                        <div className="review-header">
                            <h3>{review.name}</h3>
                            <h3 className="rating">{review.rating}/5</h3>
                        </div>
                        <p>
                            {review.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Reviews;