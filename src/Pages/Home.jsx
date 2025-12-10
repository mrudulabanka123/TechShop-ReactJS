import React, { useRef, useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Carousel } from "../Components/Carousel";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

const headphones = [
  { id: 2, name: "boAt Rockerz 110", price: 1299, img: "/assets/images/boat110-1.png" },
  { id: 3, name: "boAt Rockerz 131", price: 1499, img: "/assets/images/boat131-1.png" },
  { id: 4, name: "JBL Endurance", price: 1999, img: "/assets/images/jbl-endu-1.png" },
  { id: 5, name: "JBL Tune 100", price: 1799, img: "/assets/images/jbl100-1.png" },
  { id: 6, name: "Sony XB400", price: 2999, img: "/assets/images/sonyXb400-1.png" },
  { id: 7, name: "Sony XB400 Extra", price: 3499, img: "/assets/images/sonyXb400-2.png" },
];

function ProductSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef();

  // Automatic movement - one product at a time
  useEffect(() => {
    const moveNext = () => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    autoPlayRef.current = setInterval(moveNext, 3000); // 3 seconds per product

    return () => clearInterval(autoPlayRef.current);
  }, [products.length]);

  // Pause on hover
  const handleMouseEnter = () => clearInterval(autoPlayRef.current);
  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
  };

  const goPrev = () => setCurrentIndex((prev) => prev === 0 ? products.length - 1 : prev - 1);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const goToSlide = (index) => setCurrentIndex(index);

  const styles = {
    section: {
      margin: "0",
      maxWidth: "1600px",
      padding: "60px 20px",
      background: "linear-gradient( #111217 100%)",
      borderRadius: "0",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      position: "relative",
      height: "250px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ff0000"  
    },
    productNameContainer: {
      position: "absolute",
      top: "-60px",
      left: "50%",
      transform: "translateX(-50%)",
      backdropFilter: "blur(15px)",
      padding: "15px 30px",
      zIndex: 4,
      textAlign: "center"
    },
    productName: {
      fontSize: "1.8rem",
      fontWeight: "800",
      color: "#ff0000",  
      margin: "0",
      textShadow: "0 2px 8px rgba(0,0,0,0.9)",
      letterSpacing: "1px"
    },
    mainProduct: {
      position: "absolute",
      width: "250px",
      height: "25m0px",
      borderRadius: "28px",
      overflow: "hidden",
      boxShadow: "0 35px 90px rgba(0,0,0,0.8)",
      transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      zIndex: 3,
      transform: "scale(1)"
    },
    productPriceContainer: {
      position: "absolute",
      bottom: "-50px",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "15px 30px",
      zIndex: 4,
      textAlign: "center"
    },
    productPrice: {
      fontSize: "2.2rem",
      fontWeight: "900",
      color: "#ff0000", 
      margin: "0",
      
    },
    sideProductLeft: {
      position: "absolute",
      left: "0",
      width: "300px",
      height: "300px",
      
      overflow: "hidden",
     
      opacity: 0.5,
      transform: "translateX(120px) scale(0.75) rotateY(20deg)",
      transition: "all 0.7s ease",
      zIndex: 2
    },
    sideProductRight: {
      position: "absolute",
      right: "0",
      width: "300px",
      height: "300px",
      borderRadius: "22px",
      overflow: "hidden",
      boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
      opacity: 0.5,
      transform: "translateX(-120px) scale(0.75) rotateY(-20deg)",
      transition: "all 0.7s ease",
      zIndex: 2
    },
    productImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
  };

  const prevIndex = (currentIndex - 1 + products.length) % products.length;
  const nextIndex = (currentIndex + 1) % products.length;
  const currentProduct = products[currentIndex];

  return (
    <div className="bg-dark">
    <center className="text-light bg-dark">
      <h2>Feature Products</h2>
    </center>
    
    <div 
      style={styles.section} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <div style={styles.container}>
        {/* Product Name ABOVE the card - RED TEXT */}
        <div style={styles.productNameContainer}>
          <h2 style={styles.productName}>{currentProduct.name}</h2>
        </div>

        {/* Main Highlighted Product */}
        <div style={styles.mainProduct}>
          <img 
            src={currentProduct.img} 
            style={styles.productImage}
            alt=""
          />
        </div>

        {/* Product Price BELOW the card - RED TEXT */}
        <div style={styles.productPriceContainer}>
          <h3 style={styles.productPrice}>₹{currentProduct.price}</h3>
        </div>

        {/* Previous Product (Left side) */}
        <div style={styles.sideProductLeft}>
          <img 
            src={products[prevIndex].img} 
            style={styles.productImage}
            alt=""
          />
        </div>

        {/* Next Product (Right side) */}
        <div style={styles.sideProductRight}>
          <img 
            src={products[nextIndex].img} 
            style={styles.productImage}
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Carousel/>
      <ProductSlider products={headphones} />
      <Products/>
      <Footer/>
    </>
  );
}

export default Home;
