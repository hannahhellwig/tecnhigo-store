import React from "react"
import StarRatings from "react-star-ratings"
import './product-list.scss'

class Rating extends React.Component {
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    })
  }

  render() {
    return (
      <div className="rating-container">
        <StarRatings
          rating={this.props.rating}
          starRatedColor="#FFD907"
          starHoverColor="#FFD907"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="5px" />
      </div>
    )
  }
}

export default Rating
