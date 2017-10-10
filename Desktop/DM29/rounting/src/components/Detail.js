import React, {Component} from 'react';
import {getItem} from '../data.js'

export default class Detail extends Component {
    constructor() {
        super()

        this.state={
            product:{}
        }
    }

    componentDidMount(){
        this.setState({
            product: getItem(this.props.match.params.id)
        })
    }

    render(){
        return(
            <div>
                <h1> Product Details</h1>
                <h2>{this.state.product.name}</h2>
                <h2>{this.state.product.price}</h2>
            </div>
        )
    }
}