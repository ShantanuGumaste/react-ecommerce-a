import React from 'react'
import "./Cards.css"

export default function Cards(props) {
  let cardTitle = props.cardTitle;
  let cardDescription = props.cardDescription;
  let price = props.price;
  let imageName = props.imageName;
  return (
    <div>
      {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mx-3"> */}
        <div className="col">
          <div className="card rounded shadow">
            <img
              src={imageName}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <p className="card-text">
                {cardDescription}
                
              </p>
              <button className="btn btn-warning btn-sm">
                Buy Now: ₹{price}
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="btn btn-primary btn-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    // </div>
  );
}
