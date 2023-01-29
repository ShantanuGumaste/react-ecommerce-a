import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://thumbs.dreamstime.com/b/soccer-football-wide-banner-d-ball-russian-flag-background-russia-game-match-goal-moment-realistic-net-place-119721603.jpg"
              className="d-block w-100"
              alt="carousel_img1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-vector/sport-equipment-banner_1284-32611.jpg?w=2000"
              className="d-block w-100"
              style={{ height: "520px" }}
              alt="carousel_img2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://c8.alamy.com/comp/PR0M4R/black-friday-promotional-sale-shopping-banner-with-products-and-discount-sports-and-workout-equipment-PR0M4R.jpg"
              className="d-block w-100"
              style={{ height: "520px" }}
              alt="carousel_img3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
