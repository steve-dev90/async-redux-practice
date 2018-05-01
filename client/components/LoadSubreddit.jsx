import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {

  constructor(props) {
    super(props),
    this.state = {
      subReddit: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
   console.log(e.target.value)
   this.setState({
     [e.target.name] : e.target.value
   })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(fetchPosts(this.state.subReddit))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} name='subReddit' placeholder="Redit post"></input>  
        <button >
          Fetch Posts
        </button>
      </form>
  )
  }
}

export default connect()(LoadSubreddit)
