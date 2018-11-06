import React from "react"
import StarRatings from "react-star-ratings"

class Rating extends React.Component {
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    })
  }

  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starRatedColor="#FFD907"
        starHoverColor="#FFD907"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="40px"
        starSpacing="15px" />
    )
  }
}

export default Rating
