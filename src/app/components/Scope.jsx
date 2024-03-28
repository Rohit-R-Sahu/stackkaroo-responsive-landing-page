import Image from "next/image";
import React from "react";
import agile from "../assets/images/svgs/agile__2_-removebg-preview 1.svg";
import devops from "../assets/images/svgs/devops__3_-removebg-preview (1) 1.svg";
import iterative from "../assets/images/svgs/iteration-removebg-preview 1.svg";
import waterfall from "../assets/images/svgs/waterfall-chart-removebg-preview 1.svg";
import nodejs from '../assets/images/svgs/mdi_nodejs.svg'
import code from '../assets/images/svgs/ph_code.svg'
import docker from '../assets/images/svgs/mdi_docker.svg'
import arrow1 from '../assets/images/svgs/mynaui_arrow-up.svg'
import arrow2 from '../assets/images/svgs/mynaui_arrow-up (1).svg'
import arrow3 from '../assets/images/svgs/mynaui_arrow-up (2).svg'
import blocks from '../assets/images/svgs/clarity_blocks-group-line.svg'

const Scope = () => {
  return (
    <section>
      <div className="scope-wrapper">
        <div className="first-grid ">
          <div className="item item-1"></div>
          <div className="item item-2">
            <div className="item-2-content">
              <div className="item-2-context">
                <h1 className="scope-h1">TYPES</h1>
                <h2>
                  Requirements, Scope,
                  <br /> Functionalities and Utilization
                </h2>
              </div>
              <ul className="scope-list">
                <li>
                  <Image src={agile} alt="" className="li-img" />
                  <h2>Agile Model</h2>
                </li>

                <li>
                  <Image src={devops} alt="" className="li-img" />
                  <h2>DevOps Model</h2>
                </li>

                <li>
                  <Image src={iterative} alt="" className="li-img" />
                  <h2>Iterative Model</h2>
                </li>

                <li>
                  <Image src={waterfall} alt="" className="li-img" />
                  <h2>Waterfall Model</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="item item-3">
            <div className="scope-item3">
              <h1 className="scope-h1">50+</h1>
              <p>Businesses were introduced last year on Digital Platform</p>
            </div>
            <div className="scope-item3">
              <h1 className="scope-h1">4.6*</h1>
              <p>Rating on Google by our Trusted Clients</p>
            </div>
            <div className="scope-item3">
              <h1 className="scope-h1">20+</h1>
              <p>Positive Reviews on Glassdoor</p>
            </div>
          </div>
          <div className="item item-4 scope-icons">
            <Image src={nodejs} className="scope-icon-image" />
          </div>
          <div className="item item-5"></div>
          <div className="item item-6"></div>
          <div className="item item-7 scope-icons">
            <Image src={code} className="scope-icon-image" />
          </div>
          <div className="item item-8"></div>
          <div className="item item-9 scope-icons">
            <Image src={docker} className="scope-icon-image" />
          </div>
          <div className="item item-10"></div>
          <div className="item item-11"></div>
          <div className="item item-12 scope-icons">
            <Image src={arrow1} className="scope-icon-image" />
          </div>
          <div className="item item-13 scope-icons">
            <Image src={arrow2} className="scope-icon-image" />
          </div>
          <div className="item item-14 scope-icons">
            <Image src={arrow3} className="scope-icon-image" />
          </div>
          <div className="item item-15"></div>
          <div className="item item-16 scope-icons">
            <Image src={blocks} className="scope-icon-image" />
          </div>
          <div className="item item-17"></div>
          <div className="item item-18"></div>
          <div className="item item-19"></div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
{
  /*<div className="first-container">
          <div className="one">aside</div>
          <div className="two">
            <h1 className="two-heading">TYPES</h1>
            <h2 className="two-subheading">
              Requirements, Scope, Functionalities and Utilization
            </h2>
            <div className="two-list">
              <ul>
                <li>
                  <Image src={svg1} alt="" />
                  <h3>Agile Model</h3>
                </li>
                <li>
                  <Image src={svg1} alt="" />
                  <h3>Devops Model</h3>
                </li>
                <li>
                  <Image src={svg1} alt="" />
                  <h3>Iterative Model</h3>
                </li>
                <li>
                  <Image src={svg1} alt="" />
                  <h3>Waterfall Model</h3>
                </li>
              </ul>
            </div>
          </div>

          <div className="three">
            <div>
              <h1>50+</h1>
              <p>Businesses were introduced last year on Digital Platform</p>
            </div>
            <div>
              <h1>4.6*</h1>
              <p>Rating on Google by our Trusted Clients</p>
            </div>
            <div>
              <h1>20+</h1>
              <p>Positive Reviews on Glassdoor</p>
            </div>
            <div className="three-inner">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
          <div className="four">aside</div>
        </div>
        <div className="second-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
        </div> */
}
