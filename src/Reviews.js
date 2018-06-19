import React, { Component } from 'react';

class Reviews extends Component {
  render () {
    const { reviews } = this.props;

    return (
      <div className="reviews">
        {reviews.map((review) => (
          <div>
            <div className="reviews-header">
              {Array.apply(null, Array(5)).map((i) => (
                <i className="reviews-overall-stars fa fa-star"></i>
              ))}
              <div className="reviews-overall-label">overall</div>
              <div className="reviews-view-all">view all {review.totalReviews} reviews</div>
            </div>

            <div className="reviews-pro-con-container">
              <div className="reviews-headline-container">
                <div className="reviews-headline">PRO</div>
                <div className="reviews-subheadline">most helpful 4-5 star review</div>

                <div className="reviews-headline">CON</div>
                <div className="reviews-subheadline">most helpful 1-2 star review</div>
              </div>

              {review.Pro.map((review) => (
                <div className="reviews-review-container">
                  {Array.apply(null, Array(5)).map((i) => (
                    <i className="reviews-pro-overall-stars fa fa-star"></i>
                  ))}
                  <span className="reviews-title">{review.title}</span>
                  <span className="reviews-description">{review.review}</span>
                  <span className="reviews-screenname">{review.screenName}</span>
                  <span className="reviews-date-posted">{review.datePosted}</span>
                </div>
              ))}

              {review.Con.map((review) => (
                <div className="reviews-review-container">
                  {Array.apply(null, Array(5)).map((i) => (
                    <i className="reviews-con-overall-stars fa fa-star"></i>
                  ))}
                  <span className="reviews-title">{review.title}</span>
                  <span className="reviews-description">{review.review}</span>
                  <span className="reviews-screenname">{review.screenName}</span>
                  <span className="reviews-date-posted">{review.datePosted}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Reviews
