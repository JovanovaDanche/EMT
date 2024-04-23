import React from "react";
import { useNavigate } from 'react-router-dom';

const AccommodationEdit = (props) => {
    const navigate=useNavigate();
    const [formData, updateFormData]=React.useState({
        name: "",
        category: "MOTEL",
        numRooms: 0,
        hostId: -1
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.accommodation.name;
        const category = formData.category !== "MOTEL" ? formData.category : (props.accommodation ? props.accommodation.category : "");
        const numRooms = formData.numRooms !== 0 ? formData.numRooms : props.accommodation.numRooms;
        const hostId = formData.hostId !== -1 ? formData.hostId : (props.accommodation ? props.accommodation.host.id : 0);
        props.onEditAccommodation(props.accommodation.id,name,category,numRooms,hostId );
        navigate('/accommodations');
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accommodation name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.accommodation.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-select" onChange={handleChange} value={formData.category}>
                            {props.categories.map((term,index) =>
                                <option key={index} value={term} >{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRooms">Number of rooms</label>
                        <input type="number"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               placeholder={props.accommodation.numRooms}
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Host</label>
                        <select name="hostId" className="form-select" onChange={handleChange} >
                            {props.hosts.map((term) => {
                                if (props.accommodation.host!==undefined &&
                                    props.accommodation.host.id===term.id)
                                    return <option selected={props.accommodation.host.id} value={term.id}>{term.name}</option>
                                else return <option value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default AccommodationEdit;