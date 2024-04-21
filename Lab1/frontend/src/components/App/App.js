//import logo from './logo.svg';
import './App.css';
import Countries from '../Countries/countries';
import Hosts from "../Hosts/hosts";
import Accommodations from "../Accommodations/AccommodationList/accommodations";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../Header/header';
import AccommodationService from "../../repository/accommodationRepository";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            hosts: [],
            accommodations: []
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
                                <Route path="/countries" element={<Countries countries={this.state.countries}/>}/>
                                <Route path={"/hosts"} element={<Hosts hosts={this.state.hosts}/>}/>
                                <Route path={"/accommodations"} element={<Accommodations accommodations={this.state.accommodations}/>}/>
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
    componentDidMount() {
        this.fetchData()
        //this.loadCountries();
    }
}

export default App;
