import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import axios from "axios";

const API_END_POINT = "https://api.themoviedb.org/3/"

const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=dda66685a044dbf05e7b34672c0b3e11"


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieList:{},
            currentMovie:{}
        }
    }

    componentDidMount() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){

            this.setState({movieList:response.data.results.slice(1,6)});
            this.setState({currentMovie:response.data.results[0]})
            console.log('--------')
            console.log('',this.state.movieList);
            console.log('---------');
        }.bind(this));
    }
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList />
			</div>
		);
	}
}

export default App;
