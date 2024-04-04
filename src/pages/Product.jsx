import { Component } from 'react'

import axios from 'axios';
import { Container } from 'react-bootstrap'


class Product extends Component {
    state = {
        product: null,
    }
    componentDidMount() {
        this.getProduct();
    }
    async getProduct() {
        try {
            let productId = window.location.pathname.split('/')[2];
            let { data } = await axios(`https://fakestoreapi.com/products/${productId}`)
            this.setState({ product: data })
        }catch(err){
            console.log(err);
        }finally{

        }
    }
    render() {
        const {product} = this.state
        return (
            <Container>
                <h1>{product?.title}</h1>
                <img src={product?.image} alt="" />
                <p>Category: {product?.category}</p>
                <p>Desc: {product?.description}</p>
                <p>Price: {product?.price}$</p>
            </Container>
        )
    }
}

export default Product