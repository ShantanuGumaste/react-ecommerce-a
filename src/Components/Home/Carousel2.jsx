import React from "react";

export default function Carousel2() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mt-4 mb-5"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://contents.mediadecathlon.com/s956642/k$0a880a809350fd21c9122358cb479db1/homepage%20banner%20%201.jpg?format=auto&quality=70&f=1480x0"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://contents.mediadecathlon.com/p2100280/k$c1cc5a0c7c9b67e428672cda17376d3f/1920x470/2000pt3111/4000xcr981/WEDZE%20BL%20SKI%20900%20LAINE%201%202%20ZIP%20HAUT%20F%20GRIS%20AH21.jpg?format=auto&quality=70&f=1480x0"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://contents.mediadecathlon.com/s961277/k$3d40e9757e23250280235739e980ddd5/abhishek%2001.jpg?format=auto&quality=70&f=1480x0"
              alt="Third slide"
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
