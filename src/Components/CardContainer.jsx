import React from "react";
import Gadget from "../Card/Gadget";

const CardContainer = ({ gadgets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {gadgets.length > 0 ? (
        gadgets.map((gadget) => (
          <Gadget key={gadget._id} product={gadget}></Gadget>
        ))
      ) : (
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <h3 className="my-40 flex items-center justify-center text-center text-3xl font-semibold text-red-600">
            Nothing Found!
          </h3>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
