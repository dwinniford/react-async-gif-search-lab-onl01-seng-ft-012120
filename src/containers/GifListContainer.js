import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const trialSearch = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=kp5WxLbhCnw7fFeHxNJBZsGWxNHZfNhz&rating=g"


export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        
        
    }

    handleSubmit = (searchText) => {
        console.log(searchText)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=kp5WxLbhCnw7fFeHxNJBZsGWxNHZfNhz&rating=g`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({gifs: json.data.slice(0, 3) })
                console.log(this.state.gifs)
            })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}