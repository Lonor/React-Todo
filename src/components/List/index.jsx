import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import Item from '../Item'

export default class List extends Component {
    render() {
        return (
            <ListGroup variant="flush" className='p-2'>
                {
                    this.props.todos.map((todo) => {
                        return <Item key={todo.id} {...todo} markAsDone={this.props.markAsDone} />
                    })
                }
            </ListGroup>
        )
    }
}
