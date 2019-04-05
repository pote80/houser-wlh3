import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../App.css'

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            property_name: '',
            property_address: '',
            property_city: '',
            property_state: '',
            property_zip: 0,
            property_url: '',
            property_mortgage: 0,
            property_rent: 0,
            stepOne: true,
            stepTwo: false,
            stepThree: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewHouse = this.addNewHouse.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    addNewHouse = () => {
        //this.props.history.push
        const { property_name, property_address, property_city, property_state, property_zip, property_url, property_mortgage, property_rent } = this.state
        axios.post('/api/houses', { property_name, property_address, property_city, property_state, property_zip, property_url, property_mortgage, property_rent })
            .then(() => (this.props.history.push('/')))
    }

    render() {
        const { stepOne, stepTwo, stepThree } = this.state
        return (
            <div className='wizard'>
                <div className='properties_header'>Wizard</div>
                {stepOne &&
                    <div>
                        <div>
                            <label> Property Name: <input name='property_name' value={this.state.property_name} onChange={this.handleChange} /></label>
                        </div>
                        <div>
                            <label> Address: <input name='property_address' value={this.state.property_address} onChange={this.handleChange} /></label>
                        </div>
                        <div>
                            <label> City: <input name='property_city' value={this.state.property_city} onChange={this.handleChange} /></label>
                        </div>
                        <div>
                            <label> State: <input name='property_state' value={this.state.property_state} onChange={this.handleChange} /></label>
                        </div>
                        <div>
                            <label> Zip: <input name='property_zip' type="number" value={this.state.property_zip} onChange={this.handleChange} /></label>
                        </div>
                        <button onClick={() => { this.setState({stepOne: false, stepTwo: true}) }} >Next</button>
                    </div>
                }
                {stepTwo &&
                    <div>
                        <div>
                            <label> Image Url: <input name='property_url' value={this.state.property_url} onChange={this.handleChange} /></label>
                        </div>
                        <button onClick={() => { this.setState({stepOne: true, stepTwo: false}) }} >Back</button>
                        <button onClick={() => { this.setState({stepTwo: false, stepThree: true}) }} >Next</button>
                    </div>
                }
                {stepThree &&
                    <div>
                        <div>
                            Recommended Rent: ${Math.round(this.state.property_mortgage * 1.25)}
                        </div>
                        <div>
                            <label> Monthly Mortgage: <input name='property_mortgage' type="number" value={this.state.property_mortgage} onChange={this.handleChange} /></label>
                        </div>
                        <div>
                            <label> Desired Rent: <input name='property_rent' type="number" value={this.state.property_rent} onChange={this.handleChange} /></label>
                        </div>
                        <button onClick={() => { this.setState({stepTwo: true, stepThree: false}) }} >Back</button>
                        <button onClick={this.addNewHouse} >Submit</button>
                    </div>
                }
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}