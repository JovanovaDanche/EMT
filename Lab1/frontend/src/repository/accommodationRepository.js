import axios from '../custom-axios/axios';
const AccommodationService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchHosts: () => {
        return axios.get("/hosts");
    },
    fetchAccommodations: () => {
        return axios.get("/accommodations");
    },
    deleteAccommodation: (id) => {
        return axios.delete(`/accommodations/delete/${id}`);
    },
    fetchCategories: () => {
        return axios.get("/accommodations/categories");
    },
    addAccommodation: (name, category, numRooms,hostId) => {
        return axios.post("/accommodations/add", {
            "name": name,
            "category": category,
            "numRooms": numRooms,
            "hostId": hostId
        });
    },


}
export default AccommodationService;