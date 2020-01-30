import React, { useState, useEffect, Fragment } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardImg
} from "reactstrap";
import axios from "axios";

export default function Bebas() {
  const [allData, setAllData] = useState([]);
  const [name, setName] = useState("");
  const urlAll = "https://api.unsplash.com/photos/?client_id=ad95db50f014a2929e44bbc127634c9f56f31e3ee7c81f1bc7dc2096370d6d09";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(urlAll)
      .then(response => {
        if (response.status === 200) {
          const newData = response.data;
          setAllData(newData);
          // console.log(data);
        } else {
          console.log("Something is wrong with that status data");
        }
        console.log(response.data);
      });
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Col md="12" xs="12">
        <Row>
          {allData.map((item, index) => {
            return (
              <Col key={index} md="3" sm="6" xs="12" className="cardz">
                <Card>
                  <CardImg top width="100%" src={item.urls.small} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.description}</CardTitle>
                    <CardSubtitle>{item.alt_description}</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  </CardBody>
                </Card>

              </Col>
            );
          })}
        </Row>
      </Col>
    </Container>
  );
}
