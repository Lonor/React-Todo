import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap"

export default class Item extends Component {
    handleDone = (event) => {
        const { id } = event.target;
        this.props.markAsDone(Number(id));
    }

    render() {
        const { id, name, done } = this.props;
        return (
            <ListGroup.Item className='custom-control custom-checkbox'>
                <input type="checkbox" className="custom-control-input" id={id} defaultChecked={done} onChange={this.handleDone}></input>
                <label className="custom-control-label" htmlFor={id}>{name}</label>
            </ListGroup.Item>
        )
    }
}
