import React, { Component } from 'react'

export default class Copyright extends Component {
    render() {
        return (
            <div style={{
                display: "block",
                position: "absolute",
                width: "100%",
                height: "28px",
                backgroundColor: "black",
                alignItems: "center",
            }}>
                <h5
                style={{
                    display: "block",
                    color: "white",
                    position: "relative",
                    textAlign: "center",
                    margin: "auto",
                    paddingTop: "2px"
                }}
                >Copyright &copy; 2020 Database Inc.</h5>
            </div>
        )
    }
}
