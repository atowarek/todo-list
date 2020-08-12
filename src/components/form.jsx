import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercise: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { onAddToList } = this.props
    const { exercise, day } = this.state
    onAddToList({
      id: Date.now(),
      completed: false,
      exercise,
      day
    })

    this.setState({
      exercise: '',
      day: ''
    })
    //event.target.reset()
  }
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            name="exercise"
            value={this.state.exercise}
            onChange={this.handleChange}
            required
            placeholder="type an exercise"
          />
          <br />
          <select name="day" value={this.state.day} onChange={this.handleChange} required>
            <option value="">Choose a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <br />
          <button className="button">Add to list</button>
        </form>
      </div>
    )
  }
}

export default Form
