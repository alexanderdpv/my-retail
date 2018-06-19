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
                <div className="reviews-title-container">
                  <div className="reviews-headline">PRO</div>
                  <div className="reviews-subheadline">most helpful 4-5 star review</div>
                </div>

                <div className="reviews-title-container">
                  <div className="reviews-headline">CON</div>
                  <div className="reviews-subheadline">most helpful 1-2 star review</div>
                </div>
              </div>

              {review.Pro.map((review) => (
                <div className="reviews-review-container">
                  {Array.apply(null, Array(5)).map((i) => (
                    <i className="reviews-stars fa fa-star"></i>
                  ))}
                  <div className="reviews-title">{review.title}</div>
                  <div className="reviews-description">{review.review}</div>
                  <div className="reviews-user-date">
                    <span className="reviews-username">{review.screenName}</span> {(review.datePosted)}
                  </div>
                </div>
              ))}

              {review.Con.map((review) => (
                <div className="reviews-review-container">
                  {Array.apply(null, Array(5)).map((i) => (
                    <i className="reviews-stars fa fa-star"></i>
                  ))}
                  <div className="reviews-title">{review.title}</div>
                  <div className="reviews-description">{review.review}</div>
                  <div className="reviews-user-date">
                    <span className="reviews-username">{review.screenName}</span> {(review.datePosted)}
                  </div>
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
