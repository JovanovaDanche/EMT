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
    addAccommodation: (name, category, numRooms,hostId) => {
        return axios.post("/accommodations/add", {
            "name": name,
            "numRooms": numRooms,
            "hostId": hostId,
            "category": category
        });
    },



}
export default AccommodationService;