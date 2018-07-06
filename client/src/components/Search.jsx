import React from "react"

class Search extends React.Component {
    render() {
        return (
            <div className="col s12">
                <div className="row">
                    <div className="col s12">
                        <h3 className="center">Search New York Times Database</h3>
                        <div className="input-field col s6 offset-s3">
                            <input placeholder="Search Term" id="serch_term" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6 offset-s3">
                            <input placeholder="Start Date (Format: 01/01/2018)" id="serch_term" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6 offset-s3">
                            <input placeholder="End Date (Format: 01/01/2018)" id="serch_term" type="text" className="validate" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <a className="waves-effect waves-light btn center">Search</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search