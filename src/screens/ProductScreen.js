import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen() {
  let params = useParams();
  const product = products.find((p) => p._id === params.id);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Pret: {product.price} lei</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Pret:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroupItem>
                <Row>
                  <Col>Stoc:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0
                        ? "existent"
                        : "epuizat pentru moment"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <div className="d-grid gap-2">
                  <Button
                    variant="dark"
                    size="lg"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Adauga in cos
                  </Button>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Row>
            <Col>
              In cazul stocului epuizat fa o comanda <strong>aici</strong>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
