import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.renderReviewStars = this.renderReviewStars.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    const formattedDate = new Date(date);

    return (
      <div className="reviews-formatted-date">
        {formattedDate.toDateString()}
      </div>
    )
  }

  renderReviewStars(stars) {
    const starIcons = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<i key={i} className="reviews-stars fa fa-star"></i>)
      } else {
        starIcons.push(<i key={i} className="reviews-stars empty-star fa fa-star" ></i>)
      }
    }

    return (
      <div className="reviews-stars-container">{starIcons}</div>
    )
  }

  render () {
    const { reviews } = this.props;

    return (
      <div className="reviews col-6">
        {reviews.map((review) => (
          <div key={review}>
            <div className="reviews-header">
              {this.renderReviewStars(review.consolidatedOverallRating)}
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
                <div key={review} className="reviews-review-container">
                  {this.renderReviewStars(review.overallRating)}
                  <div className="reviews-title">{review.title}</div>
                  <div className="reviews-description">{review.review}</div>
                  <div className="reviews-user-date">
                    <span className="reviews-username">{review.screenName}</span> {this.formatDate(review.datePosted)}
                  </div>
                </div>
              ))}

              {review.Con.map((review) => (
                <div key={review} className="reviews-review-container">
                  {this.renderReviewStars(review.overallRating)}
                  <div className="reviews-title">{review.title}</div>
                  <div className="reviews-description">{review.review}</div>
                  <div className="reviews-user-date">
                    <span className="reviews-username">{review.screenName}</span> {this.formatDate(review.datePosted)}
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
