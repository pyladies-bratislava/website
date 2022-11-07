import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { SocialMediaItem } from "../components/social-media-item";
import { SOCIAL_MEDIA_CONFIG } from "../constants/index";

export const Contact = () => {
  return (
    <>
      <Container>
        <Image
          src="/assets/jumbotron.jpeg"
          fluid
          alt="Responsive"
          width="1150"
          height="350"
        />
      </Container>
      <Container>
        <h2 className="text-center">
          We&apos;d <i className="far fa-heart text-danger" /> to help.
        </h2>
        <h5 className="text-center">
          We like to create things with fun, open minded people. <br /> Feel
          free to say hello.
        </h5>
        <Row>
          {SOCIAL_MEDIA_CONFIG.map((item) => (
            <SocialMediaItem key={item.name} item={item} />
          ))}
        </Row>
      </Container>
      <Container className="container text-center pt-5 pb-5">
        <h4 className="text-decorated">
          We are here to help you start learnig coding. Send us an email at
        </h4>
        <h3 className="text-decorated font-weight-bold">
          bratislava@pyladies.com
        </h3>
      </Container>
    </>
  );
};

export default Contact;
