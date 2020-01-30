import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      item1: [],
      item2: [],
      item3: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data1 = await axios.get("https://api.github.com/users/rhfauzi")
    const data2 = await  axios.get("https://api.github.com/users/hesamuhammad")


    this.setState({item1: data1.data})
    this.setState({item2: data2.data})
  };

  render() {
    const { data,item1,item2,item3 } = this.state;console.log(item1, item2, item3)    

    return (
      <div style={{marginTop: "135px"}}>
        {/* <h1 style={{ textAlign: "center", margin: "10px" }}>
          GET PROFILE FROM GITHUB
        </h1> */}
        <Container
          fluid={true}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center", marginTop: "50px"
          }}
        >
          <Card style={{width: "250px", alignItems: "center", borderStyle: "none", marginRight: "60px"}}>
              <h2 style={{fontWeight: "bold"}}>CEO</h2>
            <CardImg
              top
              width="100%"
              src={item1.avatar_url}
              alt="Card image cap"
              style ={{borderRadius: "50%"}}
            />
            <CardBody>
              <h4 style={{ textAlign: "center" , fontWeight: "bold"}}>{item1.name}</h4>
              <CardTitle style={{ textAlign: "center" }}>
                github.com/{item2.login}
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                never stop believin'
                <br/>
                {item1.id}
                <br/>
                {item1.url}
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card style={{width: "250px", alignItems: "center", borderStyle: "none", marginLeft: "60px"}}>
          <h2 style={{fontWeight: "bold"}}>CO-Founder</h2>
            <CardImg
              top
              width="100%"
              src={item2.avatar_url}
              alt="Card image cap"
              style ={{borderRadius: "50%"}}
            />
            <CardBody>
              <h4 style={{ textAlign: "center" }}>{item2.name} Muhammad</h4>
              <CardTitle style={{ textAlign: "center", fontWeight: "bold" }}>
                github.com/{item2.login}
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item2.bio}
                <br/>
                {item2.id}
                <br/>
                {item2.url}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}