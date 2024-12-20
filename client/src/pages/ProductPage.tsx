import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductPage.module.css";

// Array of product data
const cardsData = [
  {
    title: "Food",
    image:
      "https://ted-ielts.com/wp-content/uploads/2020/09/foreign-food-ielts-1024x577.png",
    description:
      "Savor imported and exported delicacies from around the world.",
    tagline: "Taste the freshness.",
    path: "/products/food",
  },
  {
    title: "Marvel",
    image:
      "https://www.stonehubindia.com/public/uploads/product/363030226_14_12_2023_06_01_10.webp",
    description: "Premium Marvel stones and surfaces for luxury interiors.",
    tagline: "Unmatched elegance.",
    path: "/products/marvel",
  },
  {
    title: "Metal",
    image: "https://imports.gov.in/MIMSA/img/Aluminimum-1.png",
    description: "High-grade metals for industrial and personal projects.",
    tagline: "Built to last.",
    path: "/products/metal",
  },
  {
    title: "Toys",
    image:
      "https://www.toyartsy.in/storage/media/XRLMZMsQcD0af8FYCCqu8VpEBZZ8kCDL3X7l7En5.png",
    description: "Explore a wide variety of toys for learning and fun.",
    tagline: "Play, learn, grow.",
    path: "/products/toys",
  },
  {
    title: "Ornaments",
    image:
      "https://houseofekam.com/cdn/shop/files/Gold-Metal-Round-Chakra-Christmas-Ornament-Set-Of-2-Ornaments-House-of-Ekam_500x.jpg?v=1718004957",
    description: "Handcrafted ornaments to add sparkle to your celebrations.",
    tagline: "Crafted with care.",
    path: "/products/ornaments",
  },
  {
    title: "Dresses",
    image:
      "https://i.pinimg.com/originals/9a/51/b0/9a51b0841863aebf4b72caca7082419b.jpg",
    description: "Elegant dresses for formal and casual occasions.",
    tagline: "Style that inspires.",
    path: "/products/dresses",
  },
  {
    title: "Artifacts",
    image:
      "https://img.freepik.com/premium-photo/discover-mesmerizing-world-golden-artifacts-with-intricate-designs-reflecting-history-showcasing-unmatched-craftsmanship-cultural-heritage_908344-29138.jpg",
    description: "Timeless artifacts for art lovers and collectors.",
    tagline: "Preserve history.",
    path: "/products/artifacts",
  },
];

const ProductPage: React.FC = () => {
  const { product } = useParams(); // Extract the dynamic 'product' from the URL
  const navigate = useNavigate();

  // Find the corresponding product based on the route
  const selectedProduct = cardsData.find(
    (item) => item.title.toLowerCase() === product
  );

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{selectedProduct.title}</h2>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.title}
        className={styles.image}
      />
      <p className={styles.description}>{selectedProduct.description}</p>
      <p className={styles.tagline}>{selectedProduct.tagline}</p>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ProductPage;
