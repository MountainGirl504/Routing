import React,{Component} from 'react';
import { getProducts} from '../data.js';
import {Link} from 'react-router-dom';


export default class Products extends Component{
    constructor(){
        super()

        this.state = {
            products : []
        }
    }

    componentDidMount() {
            //this is where we would make HTTP request to get product data
        this.setState({
            products: getProducts()
            })
        }
    

    render() {
        const products = this.state.products.map((e,i) => (
            <Link to={`/products/${e.id}`} key={i}>
                <p>{e.name}</p>
            </Link>
        ))
        return(
            <div>
                <h1> This is the Products page!</h1>
                {products}
            </div>
        )
    }
}