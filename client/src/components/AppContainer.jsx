import React from "react"
import Search from "./Search"

class AppContainer extends React.Component {
    state = {
        savedArticles: []
    }

    render() {
        return (
            <Search />
        )
    }
}

export default AppContainer