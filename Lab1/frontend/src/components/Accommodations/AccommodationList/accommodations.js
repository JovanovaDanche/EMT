/*import React from "react";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'
const accommodations = (props) => {
    const perPage = 5;
    const pageCount = Math.ceil(props.accommodations.length / perPage);

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
                                <AccommodationTerm term={term} onDelete={props.onDelete}
                                                   onEdit={props.onEdit}
                                                   onMark={props.onMark}/>
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

 */
import React from "react";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const Accommodations = (props) => {
    const perPage = 5;
    const pageCount = Math.ceil(props.accommodations.length / perPage);
    const [currentPage, setCurrentPage] = React.useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedAccommodations = props.accommodations.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
    );

    return (
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
                        {displayedAccommodations.map((term) => {
                            return (
                                <AccommodationTerm
                                    key={term.id}
                                    term={term}
                                    onDelete={props.onDelete}
                                    onEdit={props.onEdit}
                                    onMark={props.onMark}
                                />
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3 mt-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/accommodations/add"}>
                                Add new accommodation
                            </Link>
                        </div>
                    </div>
                </div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
}

export default Accommodations;







