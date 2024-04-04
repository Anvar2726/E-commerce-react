import { Component } from 'react'

import axios from 'axios';
import { Container } from 'react-bootstrap'
import { toast } from 'react-toastify';

import Loading from '../components/loading/Loading';
import ProductCard from '../components/product-card/ProductCard';

class Category extends Component {
    state = {
        products: [],
        loading: false,
    }
    async getProducts() {
        try {
            this.setState({loading: true,})
            let query = window.location.pathname.split('/')[1];
            let { data } = await axios(`https://fakestoreapi.com/products/category/${query}`)
            this.setState({ products: data });
        }catch(err){
            toast.error('Error!')
        }finally{
            this.setState({loading: false})
        }
    }
    componentDidMount() {
        this.getProducts();
    }

    render() {
        let query = window.location.pathname.split('%20');
        const { products, loading } = this.state;
        return (
            <Container>
                <h1 className='my-3'>Category: {query[0].split('/')} {query[1]}</h1>
                <div className="product__cards__row">
                    {loading ? <Loading/> : 
                    products.map(el => <ProductCard key={el.id} {...el} />)
                    }
                </div>
            </Container>
        )
    }
}

export default Category;