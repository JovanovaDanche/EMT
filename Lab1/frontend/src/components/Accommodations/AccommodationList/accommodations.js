import React from "react";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
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
                                <AccommodationTerm term={term}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default accommodations;