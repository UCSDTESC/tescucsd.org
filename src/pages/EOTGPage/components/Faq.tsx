import React from "react";
import studentFaq from "../data/EOTGFaq";
import FaqItem from "./FaqItem";
import WarrenMallMap from "/eotg-pictures/warren-mall-map.png";
import "./Faq.css";

class Faq extends React.Component {
  render() {
    const data = studentFaq;
    return (
      <div className="eotg-faq" id="faq">
        <div className="floating eotg-faq__head mb-5">
          Frequently Asked Questions
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-auto">
              <div className="content pb-4">
                {data.map((d, i) => (
                  <FaqItem {...d} key={i} idx={i} />
                ))}
                <img src={WarrenMallMap} alt="" className="center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
