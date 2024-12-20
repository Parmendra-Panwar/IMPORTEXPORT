import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Cards from "./components/products/Cards";
import Servicces from "./components/Servicces/Servicces";
import JustSpace from "./components/JustSpace";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WhatClientSays from "./components/whatClientSays/WhatClientSays";
import GetInTouch from "./components/getInTouch/GetInTouch";
import AboutSection from "./pages/About";
import OrderPage from "./pages/TrackOrder";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Cards />
            <Servicces />
            <WhatClientSays />
            <GetInTouch />
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <JustSpace /> <AboutSection />
          </>
        ),
      },
      {
        path: "services",
        element: (
          <>
            <JustSpace /> <Services />
          </>
        ),
      },
      {
        path: "services/:service",
        element: (
          <>
            <JustSpace />
            <ServicePage />
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <JustSpace /> <Contact />
          </>
        ),
      },
      {
        path: "track-order",
        element: (
          <>
            <JustSpace /> <OrderPage />
          </>
        ),
      },
      {
        path: "/products/:product",
        element: (
          <>
            <JustSpace />
            <ProductPage />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <JustSpace />
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Page You Are Looking for Not Found</h1>

          <p>
            _____________________________________________________________________________
          </p>
        </div>
        <Footer />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
