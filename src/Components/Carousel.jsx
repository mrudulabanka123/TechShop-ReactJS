const HeroCarousel = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex align-items-center justify-content-between p-5"
            style={{ backgroundColor: "#111", minHeight: "80vh" }}>

            {/* Left Text */}
            <div className="text-light" style={{ maxWidth: "450px" }}>
              <h6 className="text-secondary">boAt Airdopes 131</h6>
              <h1 className="fw-bold">Featherweight For<br />Comfort All-Day.</h1>

              <p className="text-secondary mt-2">
                ₹1,099 <del className="ms-2 text-muted">₹2,599</del>
              </p>

              <button className="btn btn-danger px-4 py-2 mt-3">Shop Now</button>
            </div>

            {/* Product Image */}
            <img
              src="/boat.png"
              className="d-block"
              alt="Product"
              style={{ width: "350px" }}
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex align-items-center justify-content-between p-5"
            style={{ backgroundColor: "#111", minHeight: "80vh" }}>

            <div className="text-light" style={{ maxWidth: "450px" }}>
              <h6 className="text-secondary">New Collection</h6>
              <h1 className="fw-bold">Top Quality Tech Accessories</h1>
              <button className="btn btn-danger px-4 py-2 mt-3">Explore</button>
            </div>

            <img
              src="/earbuds.png"
              className="d-block"
              alt="Product"
              style={{ width: "350px" }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
};

export default HeroCarousel;
