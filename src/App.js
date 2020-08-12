import React from 'react'
import './styles.css'
import Form from './components/form'
import Schedule from './components/schedule'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      exercise: ''
    }
  }
  handleAddToList = payload => {
    //console.log(payload)
    this.setState(state => ({
      items: [...state.items, payload]
    }))
  }

  handleToggleCompleted = id => {
    const newState = state => ({
      items: state.items.map(item => ({
        ...item,
        completed: item.id === id ? !item.completed : item.completed
      }))
    })
    this.setState(newState)
  }

  handleDeleteItem = index => {
    this.setState(state => {
      const items = [...state.items]
      items.splice(index, 1)
      return {
        items: items
      }
    })
  }
  // handleDeleteItem = index => {
  //   const { items } = this.state
  //   items.splice(index, 1)
  //   this.setState({
  //     items
  //   })
  // }

  render() {
    const { items } = this.state
    return (
      <div className="App">
        <h1>Let's exercise!</h1>
        {items.map(item => {
          return (
            <Schedule
              key={item.id}
              id={item.id}
              exercise={item.exercise}
              completed={item.completed}
              day={item.day}
              toggleCompleted={this.handleToggleCompleted}
              deleteItem={this.handleDeleteItem}
              required
            />
          )
        })}
        <Form onAddToList={this.handleAddToList} />
      </div>
    )
  }
}

export default App
