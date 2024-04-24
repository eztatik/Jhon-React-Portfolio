import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Menu() {
  return (
    <div className="Menu">
      <section>
        <>
          {/* <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <p>Find me on social media</p>
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-facebook-square"
                    aria-hidden="true"
                    style={{ color: "white !important" }}
                  >
                    {" "}
                    Facebook
                  </i>
                </a>
                <br />
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-instagram"
                    aria-hidden="true"
                    style={{ color: "white !important" }}
                  >
                    {" "}
                    Instagram
                  </i>
                </a>
              </div>
            </div>
            <nav className="navbar navbar-light navbar-fixed-top bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <img
                src="/images/footer-logo.png"
                width={200}
                height={50}
                alt=""
              />
            </nav>
          </div> */}
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
          {/*Mobile Menu End*/}
        </>
      </section>
    </div>
  );
}

export default Menu;
