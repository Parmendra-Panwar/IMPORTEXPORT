import React, { useState } from "react";
import styles from "./Services.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  terms: string;
  priceCalculator: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  terms,
  priceCalculator,
}) => {
  return (
    <div className={styles.serviceCard}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
      <p className={styles.terms}>{terms}</p>
      <p className={styles.priceCalculator}>{priceCalculator}</p>
      <button className={styles.contactButton}>Contact</button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Transport by Road",
      description:
        "We provide reliable and efficient road transport services to ensure the safe and timely delivery of your goods. Our fleet is equipped with advanced tracking systems for real-time updates. Whether you're transporting small packages or large freight, our services are designed to meet your specific needs. We focus on minimizing delays and ensuring a smooth transit experience. Our road transport services are available for local, regional, and national shipments.",
      image: "/path/to/image.jpg",
      terms:
        "Terms: Delivery times are dependent on road conditions, traffic, and weather. Additional charges may apply for long-distance shipments, special handling, or expedited delivery requests. Deliveries are subject to availability and scheduling.",
      priceCalculator:
        "Estimated Price: Based on the distance traveled, with a base charge of $50 for the first 100 km, and $1 per additional km. Special pricing may apply for expedited services or oversized freight.",
    },
    {
      title: "Transport by Ocean",
      description:
        "We offer global ocean transport solutions for large cargo. With our strategic shipping routes and partnerships, we can move your goods efficiently across seas and oceans. Our ocean transport service is ideal for bulk shipments that need to be moved at a more economical rate. We handle everything from port to port, ensuring the safety and timely arrival of your goods, even for international destinations.",
      image: "/path/to/image.jpg",
      terms:
        "Terms: Delivery times depend on ocean conditions and customs clearance. Delays can occur due to bad weather or port congestion. Price estimations are based on the route and cargo volume.",
      priceCalculator:
        "Estimated Price: Shipping costs start at $500 for up to 500 kg of cargo, with rates increasing based on volume and shipping distance. For every additional 500 kg, an extra charge of $300 is added.",
    },
    {
      title: "Transport by Air",
      description:
        "Our air transport service offers fast and reliable deliveries across domestic and international destinations. Whether you’re shipping urgent documents, perishable goods, or high-value items, we provide specialized air freight services tailored to your needs. We guarantee swift transit times and full security for all types of shipments, ensuring your goods reach their destination quickly and safely.",
      image: "/path/to/image.jpg",
      terms:
        "Terms: Air transport is subject to flight schedules, cargo weight, and destination airport availability. Delays can occur due to adverse weather conditions or security regulations. Prices vary based on cargo weight and distance.",
      priceCalculator:
        "Estimated Price: Air shipping costs are calculated per kilogram. Prices start at $5 per kg for domestic shipments, with international rates varying depending on the distance and the type of cargo.",
    },
    {
      title: "Transport by Train",
      description:
        "Train transport offers an affordable and reliable way to move goods across long distances. Ideal for larger shipments, it provides a balance between cost and transit time. With our train service, you can ship large quantities of goods securely and at competitive prices. Our trains are equipped with modern tracking systems to ensure the safety and timely arrival of your goods.",
      image: "/path/to/image.jpg",
      terms:
        "Terms: Delivery times may vary depending on the train schedule and the distance traveled. Additional charges may apply for freight handling or if specific delivery requirements are needed.",
      priceCalculator:
        "Estimated Price: Train transport costs start at $150 for up to 100 kg. Prices increase with weight and distance. An extra charge of $50 is applied for every additional 100 kg.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            terms={service.terms}
            priceCalculator={service.priceCalculator}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
