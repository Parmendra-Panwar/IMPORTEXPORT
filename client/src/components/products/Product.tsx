import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams(); // Extract the dynamic ID from the URL

  const productsData = {
    food: {
      title: "Food",
      description: "Details about imported and exported food.",
    },
    marvel: {
      title: "Marvel",
      description: "Premium marvel stones and surfaces.",
    },
    metal: {
      title: "Metal",
      description: "High-grade metals for projects.",
    },
    // Add more product details here
  };

  const product = productsData[id as keyof typeof productsData];

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
