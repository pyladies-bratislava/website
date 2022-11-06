import ShowMoreText from "react-show-more-text";
import Card from "react-bootstrap/Card";

import logo from "../../assets/pyladies-fb.jpeg";
import { formatDate } from "../../utils";

export const EventCard = ({ title, startDate, description }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 mt-2 text-muted">
          {formatDate(startDate)}
        </Card.Subtitle>
        <Card.Text>
          <ShowMoreText> {description}</ShowMoreText>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
