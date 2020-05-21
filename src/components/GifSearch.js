import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchText: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchText)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchText" value={this.state.searchText} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
