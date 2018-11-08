import React from "react"
import StarRatings from "react-star-ratings"
import './product-list.scss'

class Rating extends React.Component {

  changeStarRating = newRating => {
    this.props.changeRating(newRating, this.props.id)
  }

  render() {
    return (
      <div className="rating-container">
        <StarRatings
          rating={this.props.rating}
          starRatedColor="#f7941f"
          starHoverColor="#f7941f"
          changeRating={this.changeStarRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="5px" />
      </div>
    )
  }
}

export default Rating
