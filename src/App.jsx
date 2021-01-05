import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    todos: [
      { id: 2019, name: 'Hello', done: false },
      { id: 2020, name: 'World', done: false },
      { id: 2021, name: 'React', done: true }
    ]
  }

  add = (todoObj) => {
    const { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  markAsDone = (id) => {
    const { todos } = this.state
    const newTodo = todos.map(current => {
      if (current.id === id) {
        current.done = !current.done
      }
      return current
    })
    this.setState({ todos: newTodo })
  }

  removeDone = () => {
    const { todos } = this.state
    const newTodo = todos.filter((current) => {
      return !current.done
    })
    this.setState({ todos: newTodo })
  }

  countDone = () => {
    const { todos } = this.state
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      count += todos[i].done
    }
    return count;
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <Container fluid className='p-3'>
          <Row>
            <Col><Header add={this.add} /></Col>
          </Row>
          <Row>
            <Col>
              <List todos={todos} markAsDone={this.markAsDone} />
            </Col>
          </Row>
          <Footer removeDone={this.removeDone} total={todos.length} countDone={this.countDone()} />
        </Container>
      </div>
    )
  }
}

export default App;
