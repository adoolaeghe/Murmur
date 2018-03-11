import React from "react";

export default class Article3 extends React.Component {
  render() {
    return (
      <section
        className="article3 row"
        style={{
          background:
            "url(./public/content/images/articles/article3-background.svg) no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          className="article3-hash col s5"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)",
          }}
        >

          <img
            className=""
            style={{ width: "300px" }}
            src={"./public/content/images/articles/article3-icon.svg"}
            alt="Kiwi standing on oval"
          />
          <img
            className="redirect"
            src={"./public/content/images/articles/article3-button.svg"}
            alt="Kiwi standing on oval"
          />
        </div>
        <div className="acticle3-text-content col s7">
          <div className="article3-header">
            <h2>Become a music</h2>
            <h1>Publisher</h1>
            <p>
              Eco is a global currency not controlled by any single individual,
              organization, or nation. Our mission is to distribute the majority
              of the economic value generated by the Eco platform to our
              community to create a more equitable distribution of resources.
            </p>
            <a>Read this link</a>
          </div>
        </div>
        <div className="dot-left" id="19" />
        <div className="dot-right" id="20" />
      </section>
    );
  }
}
