import React, { Component } from 'react'
import { Button } from "react-bootstrap";

export default class Footer extends Component {

    handleRemoveDone = () => {
        this.props.removeDone();
    }

    render() {
        const { total } = this.props;
        return (
            <div>
                <div style={{ display: total === 0 ? 'none' : 'block' }}>
                    Prograss: {this.props.countDone} / {this.props.total}
                </div>
                <div style={{ display: total === 0 ? 'block' : 'none' }}>
                    Congratulations! 🎉
                </div>
                <br />
                <Button variant="outline-dark" onClick={this.handleRemoveDone}> Delete Things Done </Button>
            </div>
        )
    }
}
