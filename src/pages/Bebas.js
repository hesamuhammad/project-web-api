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

  const handleRemove = index => {
    const newId = index;
    const url = `${urlAll}/`;
    axios
      .delete(url + newId)
      .then(res => {
        getData();
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(newId);
  };

  const handleUpdate = index => {
    const newName = prompt("New Name : ");
    if (newName === null) {
      return
    }
    const url = `${urlAll}/${index}`;
    const user = {
      id: index,
      name: newName
    };

    axios
      .put(url, user)
      .then(res => {
        getData();
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(allData);
  };

  const handleUpdateImages = index => {
    const newAvatar = prompt("URL Images : ");
    // alert(index);
    const url = `${urlAll}/${index}`;
    const user = {
      avatar: newAvatar
    };

    axios.put(url, user)
      .then(res => {
        getData();
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(allData);
  };

  const handleChange = e => {
    setName(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${urlAll}`, {
        name: name
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
      <Fragment>
        <Col md="12" xs="12">
          <form onSubmit={handleSubmit} className='mt-4'>
            <Row>
              <Col md={12}>
                <input className='form-control' type='text' name='name' value={name} onChange={handleChange} placeholder='Your Name' />
              </Col>
            </Row>
            <button className='btn btn-success btn-block mt-2' type="submit">POST</button>
          </form>

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

                      {/* <Button color="success" onClick={() => handleUpdate(item.id)} > Edit </Button>
                      <Button color="primary" onClick={() => handleUpdateImages(item.id)} >Edit Img</Button>
                      <Button
                        color="danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                        </Button> */}
                    </CardBody>
                  </Card>

                </Col>
              );
            })}
          </Row>
        </Col>
      </Fragment>
    </Container>
  );
}
