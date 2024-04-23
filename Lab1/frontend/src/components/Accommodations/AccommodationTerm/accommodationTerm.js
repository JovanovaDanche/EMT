import React from "react";
import {Link} from 'react-router-dom';

const accommodationTerm= (props) => {
    return(
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.numRooms}</td>
            <td scope={"col"}>{props.term.host.name}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/accommodations/edit/${props.term.id}`}>
                    Edit
                </Link>
                {props.term.numRooms>0 && (
                <a  className={"btn btn-success ml-2"}
                    onClick={() => props.onMark(props.term.id)}>
                    Rent
                </a>
                )}
            </td>
        </tr>
    )

}
export default accommodationTerm;