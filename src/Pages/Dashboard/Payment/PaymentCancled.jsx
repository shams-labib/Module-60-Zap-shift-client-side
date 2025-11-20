import React from "react";
import { Link } from "react-router";

const PaymentCancled = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl">Payment Cancelled ! Please try again bro</h2>
        <Link to={"/dashboard/my_parcel"}>
          <button className="btn btn-primary text-black">Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancled;
