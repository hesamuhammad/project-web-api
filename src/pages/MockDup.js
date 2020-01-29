import React, { Component } from 'react'
import axios from 'axios'
import {
    Card, Button, CardImg, CardTitle, Container,
    CardSubtitle, CardBody
  } from 'reactstrap';

export default class Mock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             name: ""
        }
    }
    
    getData(){
        axios.get("http://5e3134bf576f9d0014d644c4.mockapi.io/user").then(response => {
            console.log("response", response);
            const data = response.data;
            this.setState({data});
        })
    }

    componentDidMount() {
        this.getData();
    }
    
    handleChange = event => {
        this.setState({name: event.target.value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        await axios.post("http://5e3134bf576f9d0014d644c4.mockapi.io/user", {
            name: this.state.name,
          })
          await this.getData();
          this.setState({input:""});
          
    }

    handleDelete = async id => {
        await axios.delete(`http://5e3134bf576f9d0014d644c4.mockapi.io/user/${id}`
        )
        await this.getData();
    }
    
    handleEdit = async (id, name) => {
        const newName = prompt(`Edit name ${name}`);
        await axios.put(`http://5e3134bf576f9d0014d644c4.mockapi.io/user/${id}` , {
            name: newName
        }
        )
        await this.getData();
    }


    render() {
        const { name, data } = this.state;
        return (
            <div>
                <h1 style={{paddingTop: "25px", textAlign: "center"}}>API Card</h1>
                <div style={{display: "flex", justifyContent: "center", fontSize: "25px", paddingTop: "25px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="Put your name here"
                            style={{}}/>
                        <button 
                            type="submit"
                            >
                            input
                        </button>
                    </form>
                </div>

                <div>
                <h1 style={{paddingTop: "25px", textAlign: "center"}}>Our List</h1>
                <Container
                style={{display:"flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: "skyblue", paddingBottom: "25px"}}
                >
                {data.map ((item, index) => (
                <Card key={index} style={{width: "200px", alignItems: "center", marginTop: "25px"}}>
                    <CardImg top width="100px" src={item.avatar} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>{item.id}</CardSubtitle>
                        <Button onClick = {() => this.handleEdit(item.id, item.name)}>Edit</Button>{" "}
                        <Button onClick = {() => this.handleDelete(item.id)} style ={{backgroundColor: "red"}}>Remove</Button>
                    </CardBody>
                </Card>
                ))}
                </Container>
            </div>
            </div>
        )
    }
}
