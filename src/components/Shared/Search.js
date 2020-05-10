import React from "react";

const Search = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="input-group search--input" >
                            <input
                                className="form-control py-2 border-right-0 border"
                                type="search"
                                placeholder="Search for an artist…" >
                            </input>
                            <span className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary border-left-0 border"
                                    type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;