import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardDeck,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default function Mock() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [inputModal, setInputModal] = useState("");
  const [modal, setModal] = useState(false);
  const [idUser, setIdUser] = useState();

  const toggle = id => {
    setModal(!modal);
    setIdUser(id);
  };

  useEffect(() => {
    ambilData();
  }, []);

  const ambilData = async () => {
    const response = await axios.get(
      "http://5e3134bf576f9d0014d644c4.mockapi.io/user"
    );
    const data = await response.data;
    setData(data);
    console.log("async", data);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post("http://5e3134bf576f9d0014d644c4.mockapi.io/user", {
      name: input
    });
    await setInput("");
    await ambilData();
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleChangeModal = e => {
    setInputModal(e.target.value);
  };

  const handleEdit = async () => {
    console.log("id", idUser);
    console.log("input modal", inputModal);
    const id = idUser;
    await axios.put(
      `http://5e3134bf576f9d0014d644c4.mockapi.io/user/${id}`,
      {
        job: inputModal
      }
    );
    // console.log("put", put);
    toggle();
    await ambilData();
  };

  const handleDelete = async id => {
    console.log("id", id);
    await axios.delete(
      `http://5e3134bf576f9d0014d644c4.mockapi.io/user/${id}`
    );
    await ambilData();
  };
  console.log(data);

  return (
    <div>
      <h1 style={{paddingTop: "25px", textAlign: "center"}}>You're new ?</h1>
      <div style={{display: "flex", justifyContent: "center", fontSize: "20px", paddingTop: "15px"}}>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Put your name here"
            onChange={handleChange}
            value={input}
            name="todo"
            style={{paddingLeft: "10px"}}
          />
          {" "}
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1 style={{paddingTop: "45px", textAlign: "center"}}>Our Existing Officer</h1>
      <h5 style={{fontSize: "12px", fontStyle: "italic", textAlign: "center"}}>If you already changed your jobdesk, just press edit button to change your previous to the newest jobdesk</h5>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingBottom: "25px"
        }}
      >
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
            <CardDeck>
              <Card key={index}
                style={{width: "340", alignItems: "center", marginTop: "25px", paddingTop: "25px", marginLeft: "10px"}}
              >
                <CardImg
                  top
                  style={{ width: "200px" }}
                  src={item.avatar}
                  alt="Card image cap"

                />
                <CardBody style={{width: "250px", textAlign: "center"}}>
                  <CardTitle
                  style={{fontSize: "20px", fontWeight: "bold"}}>{item.id}. {item.name}</CardTitle>
                  <CardSubtitle><br/>{item.country}<br/>
                  {item.job}<br/><br/>{item.phone}<br/>{item.mail}</CardSubtitle>
                  <Button onClick={() => toggle(item.id)}
                  style={{marginTop: "15px", marginRight: "2px"}}>Edit</Button>
                  {" "}
                  <Button
                    onClick={() => handleDelete(item.id)}
                    style={{ background: "red", marginTop: "15px", marginLeft: "2px" }}
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </CardDeck>
          </React.Fragment>
          );
        })}
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Want to edit name ?</ModalHeader>
        <ModalBody>
          <input
            placeholder="edit disini"
            onChange={handleChangeModal}
            value={inputModal}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleEdit()}>
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}