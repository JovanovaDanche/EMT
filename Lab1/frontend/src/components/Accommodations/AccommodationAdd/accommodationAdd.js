import React from "react";
import { useNavigate } from 'react-router-dom';
const AccommodationAdd =(props) => {
    const navigate=useNavigate();
    const [formData, updateFormData]=React.useState({
        name: "",
        category: "HOTEL",
        numRooms: 0,
        hostId: 1
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const numRooms = formData.numRooms;
        const hostId = formData.hostId;
        props.onAddAccommodation(name,category,numRooms,hostId );
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
                               placeholder="Enter accommodation name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term,index) =>
                                <option key={index} value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numRooms">Number of rooms</label>
                        <input type="number"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               placeholder="Enter number of rooms"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Host</label>
                        <select name="hostId" className="form-control" onChange={handleChange}>
                            {props.hosts.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default AccommodationAdd;