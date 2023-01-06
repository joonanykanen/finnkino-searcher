import React from "react";
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';

const SearchComponent = () => {

    const [searchText, setSearchText] = React.useState('')
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
	axios
	.get('https://www.finnkino.fi/xml/TheatreAreas/', {
		"Content-Type": "application/xml; charset=utf-8"
	 })
	.then(function(response) {
		posts.setState({ authors: response.data });
	})
	.catch(function(error) {
		console.log(error);
	});  
    },[])


    return (
        <div className="searchComponent">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <input
            placeholder="Live search from results"
            />
            <button>
                Switch ordering
            </button>

            <div>
                Parse XML using ReactJs
                {(posts && posts.length > 0) &&
                    posts.map((item) => {
                        return (
                            <span>{item.Name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchComponent;