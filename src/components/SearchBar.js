import React, { Component, Fragment } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:'',
            placeholder:'Tapez votre film...'
        }
    }

    handleChange = event => {
        console.log("j'ai changé")
        console.log(event.target.value)
        this.setState({searchText: event.target.value})
    }

	render() {
		return ( 
        <Fragment>
            <input onChange={this.handleChange} placeholder={this.state.placeholder} />
        </Fragment>
        )
	}
}

export default SearchBar;
