import { Component } from 'react'

import { Container } from 'react-bootstrap'
import { toast } from 'react-toastify';
import request from '../const';


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
            let { data } = await request(`products/${productId}`)
            this.setState({ product: data })
        } catch (err) {
            toast.error("Error !")
        } finally {

        }
    }
    render() {
        const { product } = this.state
        return (
            <Container>
                <h1 className='product__title mb-2'>{product?.title}</h1>
                <div className='product__box'>
                    <img className='product__img w-50 mb-2' src={product?.image} alt={product?.title} />
                    <div>
                        <p className='product__category text-capitalize h2'>Category: {product?.category}</p>
                        <p className='product__desc w-40'>Desc: {product?.description}</p>
                        <p className='product__price h1'>Price: {product?.price}$</p>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Product