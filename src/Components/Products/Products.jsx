import React from 'react'
import Sidebar from './Sidebar'
import CardsCollection from "../Home/CardsCollection";


export default function Products() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col-lg-2" style={{ position: "fixed" }}>
          <Sidebar />
        </div>
        <div className="col-lg-9 offset-3 mt-4" >
          <CardsCollection />
          <CardsCollection />
          <CardsCollection />
          <CardsCollection />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
