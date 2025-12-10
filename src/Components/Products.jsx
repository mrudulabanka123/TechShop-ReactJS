// TopProducts.jsx
import React, { useState } from "react";
import productsData from "../productsData"; // Update correct path

const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  const styles = {
    section: {
      backgroundColor: "#111217",
      color: "#ffffff",
      padding: "40px 60px 60px",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: 700,
      marginBottom: "24px",
    },
    tabsRow: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "32px",
      flexWrap: "wrap",
    },
    tab: {
      padding: "8px 20px",
      borderRadius: "999px",
      border: "1px solid transparent",
      fontSize: "0.9rem",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: "#b5b6c3",
      transition: "all 0.2s ease",
    },
    tabActive: {
      backgroundColor: "#ff1f3d",
      color: "#ffffff",
      borderColor: "#ff1f3d",
      boxShadow: "0 0 12px rgba(255, 31, 61, 0.6)",
    },

    // FIXED GRID (no empty space issue)
    productsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "24px",
    },

    card: {
      backgroundColor: "#181920",
      borderRadius: "10px",
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "1px solid #23252f",
    },
    imageWrapper: {
      width: "100%",
      aspectRatio: "4 / 3",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "#101118",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    cardTitle: {
      fontSize: "0.95rem",
      fontWeight: 600,
      color: "#f5f5f7",
      marginBottom: "4px",
    },
    cardBrand: {
      fontSize: "0.8rem",
      color: "#8b8d98",
      marginBottom: "10px",
    },
    priceRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.9rem",
    },
    finalPrice: {
      color: "#ffffff",
      fontWeight: 700,
    },
    originalPrice: {
      color: "#8b8d98",
      textDecoration: "line-through",
      fontSize: "0.8rem",
    },
    starsRow: {
      display: "flex",
      gap: "4px",
      color: "#ff1f3d",
      marginTop: "10px",
      fontSize: "0.7rem",
    },
    starDot: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: "#ff1f3d",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Top Products</h2>

      {/* Category Tabs */}
      <div style={styles.tabsRow}>
        {categories.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ ...styles.tab, ...(active ? styles.tabActive : {}) }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Product Cards */}
      <div style={styles.productsRow}>
        {filtered.map((product) => {
          const imgSrc = product.heroImage || product.images?.[0];

          return (
            <div
              key={product.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.6)";
                e.currentTarget.style.borderColor = "#ff1f3d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#23252f";
              }}
            >
              <div style={styles.imageWrapper}>
                <img src={imgSrc} alt={product.name} style={styles.img} />
              </div>

              <div>
                <h3 style={styles.cardTitle}>{product.name}</h3>
                <p style={styles.cardBrand}>{product.brand}</p>

                <div style={styles.priceRow}>
                  <span style={styles.finalPrice}>₹{product.finalPrice}</span>
                  <span style={styles.originalPrice}>
                    ₹{product.originalPrice}
                  </span>
                </div>

                <div style={styles.starsRow}>
                  {[...Array(product.rating || 4)].map((_, i) => (
                    <span key={i} style={styles.starDot}></span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
