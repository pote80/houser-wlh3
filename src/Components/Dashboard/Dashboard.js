import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this)
        this.handleHouseDelete = this.handleHouseDelete.bind(this)
    }

    componentDidMount()  {
        this.getAllHouses()
    }

    getAllHouses() {
        axios.get('/api/houses')
            .then(res => this.setState({ houses: res.data }))
    }

    handleHouseDelete(id) {
        axios.delete(`/api/houses/${id}`)
            .then(this.getAllHouses())
    }

    render() {
        const house = this.state.houses
        return (
            <div className='properties'>
                <div className='properties_header'>Properties</div>
                <div>
                    <ul>
                        {house.map(house => {
                            return <House house={house} delete={this.handleHouseDelete} />
                        })}
                    </ul>
                </div>

                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}