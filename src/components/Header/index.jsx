import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default class Header extends Component {
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value.trim() === '') {
                return
            }
            this.props.add({ id: (new Date()).getTime(), name: event.target.value, done: false })
            event.target.value = ''
        }
    }

    render() {
        return (
            <InputGroup className="mb-2" size='lg'>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Add</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onKeyUp={this.handleKeyUp}
                    placeholder='new things to be done...'
                />
            </InputGroup>
        )
    }
}
