import React from "react";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'
class Accommodations extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.accommodations.length / this.state.size);
        const accommodations=this.getAccommodationsPage(offset, nextPageOffset);
        console.log(accommodations, pageCount)
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
                            {accommodations}
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
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}
                               pageLinkClassName={"page-link"}
                               previousLinkClassName={"page-link"}
                               nextLinkClassName={"page-link"}
                               disabledClassName={"disabled"}
                />
            </div>
        );
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getAccommodationsPage= (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.accommodations.map((term) => {
            return (
                <AccommodationTerm term={term} onDelete={this.props.onDelete}
                                   onEdit={this.props.onEdit}
                                   onMark={this.props.onMark}/>
            );
        }).filter((accommodation, index)=> {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default Accommodations;









