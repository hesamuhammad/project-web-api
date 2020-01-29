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
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [total]);

  const getData = () => {
    axios
      .get("https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost")
      .then(response => {
        if (response.status === 200) {
          const newData = response.data;
          setAllData(newData);
          setLoading(false);
          setTotal(newData.length);
          // console.log(data);
        } else {
          console.log("Something is wrong with that status data");
        }
        console.log(response.data);
      });
  };

  const handleRemove = index => {
    const newId = index;
    const url = `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/`;
    axios
      .delete(url + newId)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(newId);
  };

  const handleUpdate = index => {
    const newName = prompt("New Name : ");
    // alert(index);
    const url = `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${index}`;
    const user = {
      id: index,
      name: newName
    };

    axios
      .put(url, user)
      .then(res => console.log(res.data))
      .then(error => {
        console.log(error);
      });

    console.log(allData);
  };

  const handleUpdateImages = index => {
    const newAvatar = prompt("URL Images : ");
    // alert(index);
    const url = `https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost/${index}`;
    const user = {
      avatar: newAvatar
    };

    axios.put(url, user).then(res => console.log(res.data));

    console.log(allData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newNama = prompt("Nama Anda");

    axios
      .post(`https://5e2fe92f9c29c900145db5c1.mockapi.io/testpost`, {
        name: newNama
      })
      .then(res => {
        getData();
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      {!loading ? (
        <Fragment>
          <Col md="12" xs="12">

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={this.handleChange}
                placeholder="Put your name here"
                style={{}} />
              <button
                type="submit"
              >
                input
                        </button>
            </form>
            <Button color="success" onClick={handleSubmit}>
              Add
            </Button>

            <Row>
              {allData.map((item, index) => {
                return (
                  <Col key={index} md="3" sm="6" xs="12" className="cardz">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src={item.avatar}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>{item.id}</CardSubtitle>
                        <CardText>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CardText>
                        <Button
                          color="success"
                          onClick={() => handleUpdate(item.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="primary"
                          onClick={() => handleUpdateImages(item.id)}
                        >
                          Edit Img
                        </Button>
                        <Button
                          color="danger"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Fragment>
      ) : (
          <p className="text-center">Loading</p>
        )}
    </Container>
  );
}
