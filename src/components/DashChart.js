import React from "react";
import { Link } from "react-router-dom";

export default function DashChart({ title, data,sliceColor="" }) {
  const total = data[0].value + data[1].value + data[2].value;
 //TASK Slices colors need to follow Dots colors 
 //TASK Find another chart which is more controllable
  return (
    <React.Fragment>
      <div className="ibox">
        <div className="ibox-title">
          <h5>
            <Link to="/">{title}</Link>
          </h5>
          <div className="ibox-tools">
            <Link to="/">
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="ibox-content">
          <div className="statistic-box mt-0">
            <div className="row text-center justify-content-center">
              <div className="col-lg-12 p-2">
                <div className="donut3" style={{ "--first": data[0].value / total, "--second": data[1].value / total, "--third": data[2].value / total }}>
                  <div className="donut3__slice donut3__slice__first"></div>
                  <div className="donut3__slice donut3__slice__second"></div>
                  <div className={"donut3__slice donut3__slice__third " + sliceColor}></div>
                  <div className="donut3__label">
                    <div className="donut3__label__heading">{data[0].value + data[1].value + data[2].value}</div>
                    <div className="donut3__label__sub">Total</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row text-center mt-3">
                {data.map((item, index) => {
                  return (
                    <div className="col-4 px-2">
                      <ul className="dashlist">
                        <li className="text-truncate">
                          <i className={item.className}></i>
                          &nbsp;<b>{item.value}</b> {item.text}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
