//         {/* Controls */}

// export const Carousel = () => {
//   return (
//     <>
//       <div id="heroCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">

//         {/* Indicators */}
//         <div className="carousel-indicators ">
//           <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
//           <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
//           <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
//         </div>

//         {/* Slides */}
//         <div className="carousel-inner">

//           {/* Slide 1 */}
//           <div className="carousel-item active">
//             <div className="container py-5">
//               <div className="row align-items-center">

//                 {/* LEFT SIDE DETAILS */}
//                 <div className="col-md-6 text-white">
//                   <h2>Sony CH710N Headphones</h2>
//                   <p>Wireless Noise Cancelling | 35 Hours Battery Life</p>
//                   <h4>₹7,999</h4>
//                   <button className="btn btn-danger mt-2">Add to Cart</button>
//                 </div>

//                 {/* RIGHT SIDE IMAGE */}
//                 <div className="col-md-6 text-center">
//                   <img
//                     src={img1}
//                     className="img-fluid"
//                     style={{ height: "350px", objectFit: "contain" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className="carousel-item">
//             <div className="container py-5">
//               <div className="row align-items-center">

//                 <div className="col-md-6 text-white">
//                   <h2>Boat Airdopes 131</h2>
//                   <p>Bluetooth Earbuds | 60 Hours Playback | Fast Charging</p>
//                   <h4>₹1,099</h4>
//                   <button className="btn btn-danger mt-2">Add to Cart</button>
//                 </div>

//                 <div className="col-md-6 text-center">
//                   <img
//                     src={img2}
//                     className="img-fluid"
//                     style={{ height: "350px", objectFit: "contain" }}
//                   />
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Slide 3 */}
//           <div className="carousel-item">
//             <div className="container py-5">
//               <div className="row align-items-center">

//                 <div className="col-md-6 text-white">
//                   <h2>JBL 100 Headphones</h2>
//                   <p>Powerful Bass | Foldable Design | Comfortable Fit</p>
//                   <h4>₹2,499</h4>
//                   <button className="btn btn-danger mt-2">Add to Cart</button>
//                 </div>

//                 <div className="col-md-6 text-center">
//                   <img
//                     src={img3}
//                     className="img-fluid"
//                     style={{ height: "350px", objectFit: "contain" }}
//                   />
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Controls */}
//         <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon"></span>
//         </button>

//         <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
//           <span className="carousel-control-next-icon"></span>
//         </button>
//       </div>
//     </>
//   );
// };



export const Carousel = () => {
  // Array of slides
  const slides = [
    {
      title: "Sony CH710N Headphones",
      desc: "Wireless Noise Cancelling | 35 Hours Battery Life",
      price: "₹7,999",
      img: "/assets/images/sonyCh710n-1.png",
    },
    {
      title: "Boat Airdopes 131",
      desc: "Bluetooth Earbuds | 60 Hours Playback | Fast Charging",
      price: "₹1,099",
      img: "/assets/images/boat131-1.png",
    },
    {
      title: "JBL 100 Headphones",
      desc: "Powerful Bass | Foldable Design | Comfortable Fit",
      price: "₹2,499",
      img: "/assets/images/jbl100-1.png",
    },
  ];

  return (
    <div id="heroCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators bg-dark">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="container py-5">
              <div className="row align-items-center">
                {/* Left Side Details */}
                <div className="col-md-6 text-white">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <h4>{slide.price}</h4>
                  <button className="btn btn-danger mt-2">Add to Cart</button>
                </div>

                {/* Right Side Image */}
                <div className="col-md-6 text-center">
                  <img
                    src={slide.img}
                    className="img-fluid"
                    style={{ height: "350px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

