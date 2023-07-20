import React from "react";

function FooterBar() {
  return (
    <footer
      className=" text-center text-white"
      style={{ backgroundColor: "#000020" }}
    >
      <div className="container p-2">
        <section className="mb-1">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/mohamed.mokhtar.27/"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/mohamed-mokhtar-57557522a/"
            role="button"
          >
            <i className="fab fa-linkedin-in" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/MohamedMokhtar6"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        // style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Mohamed Mokhtar
        </a>
      </div>
    </footer>
  );
}

export default FooterBar;
