const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5">

      <div className="container">

        <div className="row">

          <div className="col-md-4">
            <h5>Tech-Shop</h5>
            <p>Subscribe to our email alerts to receive early discount offers.</p>
            <input className="form-control mb-2" placeholder="Email Address" />
            <button className="btn btn-danger">Subscribe</button>
          </div>

          <div className="col-md-2">
            <h6>Help</h6>
            <p>FAQs</p>
            <p>Track Order</p>
            <p>Warranty Info</p>
          </div>

          <div className="col-md-2">
            <h6>Policies</h6>
            <p>Return Policy</p>
            <p>Security</p>
            <p>Privacy</p>
          </div>

          <div className="col-md-2">
            <h6>Company</h6>
            <p>About Us</p>
            <p>Contact</p>
            <p>Careers</p>
          </div>

        </div>

        <p className="text-center mt-4">© 2024 | Tech-Shop</p>

      </div>
    </footer>
  );
};

export default Footer;