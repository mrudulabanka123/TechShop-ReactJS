import { useState } from "react";
import { Header } from "../Components/Header";
import productsData from "../productsData";

function Cart() {
  const [showProducts, setShowProducts] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [...new Set(productsData.map((p) => p.category))];

  // Filter + Sort Logic
  let filteredProducts = [...productsData];

  if (priceFilter === "below1k")
    filteredProducts = filteredProducts.filter((p) => p.finalPrice < 1000);

  if (priceFilter === "1to5k")
    filteredProducts = filteredProducts.filter(
      (p) => p.finalPrice >= 1000 && p.finalPrice <= 5000
    );

  if (priceFilter === "above5k")
    filteredProducts = filteredProducts.filter((p) => p.finalPrice > 5000);

  if (categoryFilter)
    filteredProducts = filteredProducts.filter((p) => p.category === categoryFilter);

  if (sortBy === "low-high")
    filteredProducts.sort((a, b) => a.finalPrice - b.finalPrice);

  if (sortBy === "high-low")
    filteredProducts.sort((a, b) => b.finalPrice - a.finalPrice);

  if (sortBy === "name") filteredProducts.sort((a, b) => a.title.localeCompare(b.title));

  // Inline box styles
  const box = {
    backgroundColor: "#1a1a1a",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #333",
  };

  const item = (active) => ({
    backgroundColor: active ? "#e70404" : "#222",
    color: active ? "white" : "white",
    padding: "10px 12px",
    marginBottom: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    border: active ? "1px solid #e70404" : "1px solid #333",
    transition: "0.2s",
  });

  return (
    <>
      <Header />

      <div
        className="container-fluid"
        style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh", padding: "20px" }}
      >
        {!showProducts && (
          <center>
            <img
              src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
              style={{
                filter:
                  "invert(17%) sepia(96%) saturate(7484%) hue-rotate(0deg) brightness(95%) contrast(126%)",
                width: "128px",
                height: "128px",
              }}
            />

            <h4 className="mt-3">Your Cart is Empty</h4>

            <button
              onClick={() => setShowProducts(true)}
              style={{
                backgroundColor: "#e70404",
                color: "white",
                padding: "10px 20px",
                fontSize: "18px",
                borderRadius: "5px",
                border: "none",
                marginTop: "20px",
              }}
            >
              Show All Products
            </button>
          </center>
        )}

        {showProducts && (
          <div className="row mt-3">
            {/* LEFT SIDEBAR */}
            <div className="col-md-3">
              <div style={{ marginBottom: "20px" }}>
                <h5>Sort By</h5>
                <div style={box}>
                  <div style={item(sortBy === "low-high")} onClick={() => setSortBy("low-high")}>
                    Price: Low → High
                  </div>
                  <div style={item(sortBy === "high-low")} onClick={() => setSortBy("high-low")}>
                    Price: High → Low
                  </div>
                  <div style={item(sortBy === "name")} onClick={() => setSortBy("name")}>
                    Name
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h5>Price Filter</h5>
                <div style={box}>
                  <div
                    style={item(priceFilter === "below1k")}
                    onClick={() => setPriceFilter("below1k")}
                  >
                    Below ₹1,000
                  </div>
                  <div
                    style={item(priceFilter === "1to5k")}
                    onClick={() => setPriceFilter("1to5k")}
                  >
                    ₹1,000 – ₹5,000
                  </div>
                  <div
                    style={item(priceFilter === "above5k")}
                    onClick={() => setPriceFilter("above5k")}
                  >
                    Above ₹5,000
                  </div>
                </div>
              </div>

              <div>
                <h5>Category</h5>
                <div style={box}>
                  {categories.map((c) => (
                    <div
                      key={c}
                      style={item(categoryFilter === c)}
                      onClick={() => setCategoryFilter(c)}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PRODUCT LIST */}
            <div className="col-md-9">
              <div className="row">
                {filteredProducts.map((item) => (
                  <div className="col-md-4 mb-4" key={item.id}>
                    <div
                      style={{
                        backgroundColor: "#1b1b1b",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "10px",
                        height: "390px",
                      }}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "contain",
                          padding: "10px",
                        }}
                      />

                      <p style={{ color: "red", margin: "5px 0" }}>★★★★☆</p>

                      <h6>{item.title}</h6>
                      <p style={{ fontSize: "12px", color: "#ccc" }}>{item.info}</p>

                      <h6>
                        ₹{item.finalPrice}{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#777",
                            marginLeft: "5px",
                          }}
                        >
                          ₹{item.originalPrice}
                        </span>
                      </h6>

                      <button
                        style={{
                          backgroundColor: "#e70404",
                          color: "white",
                          width: "100%",
                          marginTop: "10px",
                          padding: "8px",
                          borderRadius: "5px",
                          border: "none",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
