import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ServicePage.module.css";

// Array of services (air, road, train, ocean)
const services = [
  {
    type: "air",
    name: "Air Transport",
    description: "Air freight for international shipments.",
    price: "$500",
  },
  {
    type: "road",
    name: "Road Transport",
    description: "Road freight for local deliveries.",
    price: "$200",
  },
  {
    type: "train",
    name: "Train Transport",
    description: "Train freight for long-distance travel.",
    price: "$300",
  },
  {
    type: "ocean",
    name: "Ocean Transport",
    description: "Ocean freight for overseas shipping.",
    price: "$1000",
  },
];

const ServicePage: React.FC = () => {
  const { service } = useParams(); // Get the dynamic 'service' parameter from the URL
  const navigate = useNavigate();

  // Find the service object based on the route
  const selectedService = services.find((item) => item.type === service);

  if (!selectedService) {
    return <p>Service not found</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{selectedService.name}</h2>
      <p className={styles.description}>{selectedService.description}</p>
      <p className={styles.price}>Price: {selectedService.price}</p>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ServicePage;
