import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [search, setSearch] = useState("");

 const products = [
  { id: 1, name: "hot wheels 1985 Honda CR-X 1:64", price: 1999, image: "/images/gtr.jpg" },
  { id: 2, name: "Toyota Supra MK4 1:24", price: 3499, image: "/images/supra.jpg" },
  { id: 3, name: "Lamborghini Poster A3", price: 399, image: "/images/poster.jpg" },
  { id: 4, name: "Custom Car Poster", price: 699, image: "/images/custom.jpg" }
];
];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "30px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>PostersHub</h1>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "30px",
          borderRadius: "8px",
          border: "none"
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px" }}>
        {filtered.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "15px"
            }}
          >
           <img 
  src={product.image} 
  alt={product.name}
  style={{
    height: "150px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px"
  }}
/>
            <h2>{product.name}</h2>
            <p style={{ fontSize: "20px" }}>₹{product.price}</p>
            <button
              style={{
                padding: "10px",
                width: "100%",
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
