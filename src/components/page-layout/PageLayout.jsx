import React from "react";
import Container from "react-bootstrap/Container";
import { Header } from "../header";
import { Footer } from "../footer";

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="container mt-5 min-vh-100">{children}</Container>
      <Footer />
    </>
  );
};
