import React from "react";

function RentalDonut() {
  //TASK how to colorize the slices
  // please add a class name like slice_red, slice_grey that can optionally be added.

  return (
    <div
      className="donut2"
      style={{
        "--first": "0.083",
        "--second": "0.083",
        "--third": "0.083",
        "--fourth": "0.083",
        "--fifth": "0.083",
        "--sixth": "0.083",
        "--seventh": "0.083",
        "--eighth": "0.083",
        "--nineth": "0.083",
        "--tenth": "0.083",
        "--eleventh": "0.083",
        "--twelfth": "0.083",
      }}
    >
      <div className="donut2__slice donut2__slice__first"></div>
      <div className="donut2__slice donut2__slice__second"></div>
      <div className="donut2__slice donut2__slice__third"></div>
      <div className="donut2__slice donut2__slice__fourth"></div>
      <div className="donut2__slice donut2__slice__fifth"></div>
      <div className="donut2__slice donut2__slice__sixth"></div>
      <div className="donut2__slice donut2__slice__seventh"></div>
      <div className="donut2__slice donut2__slice__eighth"></div>
      <div className="donut2__slice donut2__slice__nineth"></div>
      <div className="donut2__slice donut2__slice__tenth"></div>
      <div className="donut2__slice donut2__slice__eleventh"></div>
      <div className="donut2__slice donut2__slice__twelfth"></div>
      <div className="donut2__label">
        <div className="donut2__label__heading">
          <sup>9</sup> &frasl; <sub>12</sub>
        </div>
      </div>
    </div>
  );
}

export default RentalDonut;
