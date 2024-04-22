import React from "react";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'
const accommodations = (props) => {
return(
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>NumRooms</th>
                            <th scope={"col"}>Host</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.accommodations.map((term) => {
                            return (
                                <AccommodationTerm term={term} onDelete={props.onDelete}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/accommodations/add"}>Add new accommodation</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default accommodations;