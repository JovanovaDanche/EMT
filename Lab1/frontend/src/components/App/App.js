//import logo from './logo.svg';
import './App.css';
import Countries from '../Countries/countries';
import React, {Component} from "react";
import {BrowserRouter as Router, RedirectFunction, Route, Routes} from 'react-router-dom'
import Header from '../Header/header';
import AccommodationService from "../../repository/accommodationRepository";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            //hosts: [],
            //accommodations: [],
            //selectedAccommodation: {}
        }
    }
    render() {
        return (
            //<Router>
                //<Header/>
                //<main>
                    <div className="container">
                        {/*<Routes>
                        <Route path={"/countries"} exact render={() =>
                            <Countries countries={this.state.countries}/>}/>

                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>
                        <Route path={"/products/add"} exact render={() =>
                            <ProductAdd categories={this.state.categories}
                                        manufacturers={this.state.manufacturers}
                                        onAddProduct={this.addProduct}/>}/>
                        <Route path={"/products/edit/:id"} exact render={() =>
                            <ProductEdit categories={this.state.categories}
                                         manufacturers={this.state.manufacturers}
                                         onEditProduct={this.editProduct}
                                         product={this.state.selectedProduct}/>}/>
                        <Route path={"/products"} exact render={() =>
                            <Products products={this.state.products}
                                      onDelete={this.deleteProduct}
                                      onEdit={this.getProduct}/>}/>
                        {/*<Route path={"/login"} exact render={() => <Login onLogin={this.fetchData}/>}/>
                        <Redirect to={"/products"}/>
                        </Routes>
                    </div>
                </main>
            </Router> */}
                        <Countries countries={this.state.countries}/>
                    </div>
        );
    }

    fetchData = () => {
        this.loadCountries();
        //this.loadHosts();
        //this.loadAccommodations();
    }
    loadCountries = () => {
        AccommodationService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }
    componentDidMount() {
        //this.fetchData()
        this.loadCountries();
    }
}

export default App;
