import React from "react";
import { footMenu, footSocial } from "../footerData";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5">
      <div className="container">
        <div className="row">

          {/* Left Section */}
          <div className="col-md-4">
            <h5>Tech-Shop</h5>
            <p>Subscribe to our email alerts to receive early discount offers.</p>
            <input className="form-control mb-2" placeholder="Email Address" />
            <button className="btn btn-danger">Subscribe</button>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3 fs-4">
              {footSocial.map((item) => (
                <a href={item.path} key={item.id} className="text-white">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Menu Sections */}
          {footMenu.map((section) => (
            <div className="col-md-2" key={section.id}>
              <h6>{section.title}</h6>

              {section.menu.map((menuItem) => (
                <p key={menuItem.id}>
                  <a href={menuItem.path} className="text-white text-decoration-none">
                    {menuItem.link}
                  </a>
                </p>
              ))}
            </div>
          ))}

        </div>

        <p className="text-center mt-4">© 2024 | Tech-Shop</p>
      </div>
    </footer>
  );
};

export default Footer;
