import React from "react";
import "./search.css"

const SearchComponent = () => {

    // Utilize this in order to change the search results of the movies
    const [searchText, setSearchText] = React.useState('')
    
    return (
        <div className="searchBox">
            <input
            placeholder="Type a name of a movie"
            />
        </div>
    )
}

export default SearchComponent;