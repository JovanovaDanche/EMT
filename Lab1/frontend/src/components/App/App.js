//import logo from './logo.svg';
import './App.css';
import Countries from '../Countries/countries';
import Hosts from "../Hosts/hosts";
import Accommodations from "../Accommodations/AccommodationList/accommodations";
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Header from '../Header/header';
import AccommodationService from "../../repository/accommodationRepository";
import AccommodationAdd from "../Accommodations/AccommodationAdd/accommodationAdd";
import CategoryList from "../Categories/categories";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            hosts: [],
            accommodations: [],
            categories: []
            //selectedAccommodation: {}
        }
    }
    render() {
        return (
            <Router>
                <Header/>
                    <main>
                        <div className="container">
                            <Routes>
                                <Route path={"/accommodations/add"} element={<AccommodationAdd
                                    categories={this.state.categories}
                                    hosts={this.state.hosts}
                                    onAddAccommodation={this.addAccommodation}/>}
                                    />
                                <Route path="/countries" element={<Countries countries={this.state.countries}/>}/>
                                <Route path={"/hosts"} element={<Hosts hosts={this.state.hosts}/>}/>
                                <Route path={"/accommodations"} element={<Accommodations accommodations={this.state.accommodations}
                                                                                         onDelete={this.deleteAccommodation}/>}/>
                                <Route path={"/categories"} element={<CategoryList categories={this.state.categories}/>}/>
                                <Route path="*" element={<Navigate to="/accommodations" replace />} />
                            </Routes>
                        </div>
                    </main>

            </Router>
        );
    }

    fetchData = () => {
        this.loadCountries();
        this.loadHosts();
        this.loadAccommodations();
        this.loadCategories();
    }
    loadCountries = () => {
        AccommodationService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }
    loadHosts = () => {
        AccommodationService.fetchHosts()
            .then((data) => {
                this.setState({
                    hosts: data.data
                })
            });
    }
    loadAccommodations = () => {
        AccommodationService.fetchAccommodations()
            .then((data) => {
                this.setState({
                    accommodations: data.data
                })
            });
    }
    deleteAccommodation = (id) => {
        AccommodationService.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }
    addAccommodation = (name, category,numRooms, hostId) => {
        AccommodationService.addAccommodation(name, category,numRooms,hostId)
            .then(() => {
                this.loadAccommodations();
            });
    }
    loadCategories = () => {
        AccommodationService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    componentDidMount() {
        this.fetchData()
    }
}

export default App;
