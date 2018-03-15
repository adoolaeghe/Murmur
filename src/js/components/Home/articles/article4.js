import React from "react";
import Popover from "material-ui/Popover/Popover";
import { Modal, Button } from "react-materialize";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/data1.json";

export default class Article4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false
    };
  }

  returnAnimation(a, b) {
    if(this.props.article4Anim) {
      return <ReactBodymovin key={1} options={b} />
    } else {
      return <ReactBodymovin key={2} options={a} />
    }
  }

  render() {
    const bodymovinOptions = {
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: animation
    };
    const bodymovinOptions1 = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: animation
    };
    return (
      <section
        className="article4 row"
        style={{
          background:
            "url(./public/content/images/articles/article4-background.svg) no-repeat",
          backgroundSize: "cover"
        }}
      >
      {this.props.article4Text &&
        <div className="article4-text-content row col s5">
          <div className="" style={{marginLeft: "20px",marginTop: "120px", textAlign: "left", height: "10px", width: "70px", backgroundColor: "#8188E7", marginBottom: "20px" }}>
          </div>
          <h1 className="article4-header">Reveal</h1>
          <h2 className="article4-sub-header">New songs</h2>
          <p className="article4-content">
            Eco is a global currency not controlled by any single individual,
            organization, or nation. Our mission is to distribute the majority
            of the economic value generated by the Eco platform to our community
            to create a more equitable distribution of resources.
          </p>
          <a className="article4-link">Read this link</a>
          <img
            className="slider-button"
            src={"./public/content/images/articles/article4-button.svg"}
            alt="Kiwi standing on oval"
          />
        </div>
      }
        <div
          className="article4-slider"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)",
            display: "flex",
            justifyContent: "center",
            alignItem: "center"
          }}
        >
        <div className="" style={{ width: "300px" }} id="bm" />
          {this.returnAnimation(bodymovinOptions, bodymovinOptions1)}
        </div>
        <div className="dot-left" id="21" />
        <div className="dot-right" id="22" />
        <div
          className="bottom-info col s12"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"
          }}
        >
          <div className="bottom-info-content" />
        </div>
      </section>
    );
  }
}
