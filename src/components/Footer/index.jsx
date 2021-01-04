import React, { Component } from 'react'
import { Button } from "react-bootstrap";

export default class Footer extends Component {

    handleRemoveDone = () => {
        this.props.removeDone();
    }

    render() {
        return (
            <div>
                <hr />
                <Button variant="outline-dark" onClick={this.handleRemoveDone}> Delete Things Done </Button>
            </div>
        )
    }
}
