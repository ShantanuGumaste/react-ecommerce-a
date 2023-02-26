import React from 'react'

export default function CartItem(props) {
    let image = props.image
    let name = props.name
    let desc = props.desc
    let price = props.price
    let qty = props.qty

  return (
    <>
      <h1 style={{marginLeft:"100px", marginBottom:"50px"}}>SHOPPING CART</h1>
      <div
        className="container shadow"
        style={{
        //   border: "5px solid grey",
        //   backgroundColor: "aliceblue",
          borderRadius: "15px",
        }}
      >
        <div className="row">
          <div className="col-lg-2">
            <img src={image} alt="img" />
          </div>
          <div style={{paddingRight:"50px"}} className="col-lg-4 my-auto">
            <h1>{name}</h1>
            {/* <h4 className="mt-3">{desc}</h4> */}
          </div>
          <div className="col-lg-2 my-5">
            <h3 className="">
              <strong>$</strong>
              {price}
            </h3>
          </div>
          <div className="col-lg-2 my-auto">
            <h3 className="">
              <strong>Qty: </strong>
              {qty}
            </h3>
          </div>
          <div className="col-lg-2 my-auto">
            <button className="btn btn-lg btn-danger">
              <strong>Delete</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
