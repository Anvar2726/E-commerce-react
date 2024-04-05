import { Component } from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import request from '../const';

import Loading from '../components/loading/Loading';

import img1 from '../assets/images/circuit.png';
import img2 from '../assets/images/jewellery.png';
import img3 from '../assets/images/dress.png';
import img4 from '../assets/images/clothes-hanger.png';
import ProductCard from '../components/product-card/ProductCard';


class HomePage extends Component {
    state = {
        product: [],
        loading: false,
        limit: 4
    }
    componentDidMount() {
        this.getProducts();
    }

    async getProducts(limit = 4) {
        try {
            this.setState({ loading: true })
            // let {data} = await axios('https://fakestoreapi.com/products');
            let { data: limitData } = await request(`products`, { params: { limit: limit } })
            console.log(limitData);
            console.log(this.state.limit);
            this.setState({ product: limitData })
        } catch (err) {
            toast.error('Error!');
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { product, loading, limit } = this.state;
        const showProducts = () => {
            let limitPr = limit + 4
            this.getProducts(limitPr)
            this.setState({ limit: limitPr })
        }
        return (
            <Container>
                <div className='category__card__rows'>
                    <Card className='my-3 me-3 p-2' >
                        <Card.Img className='p-4' src={img1} />
                        <Card.Body>
                            <Card.Title>Electronics</Card.Title>
                            <Button variant="success">
                                <Link to='/electronics' className='text-decoration-none text-light'>
                                    View Category
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className='my-3 me-3 p-2' >
                        <Card.Img className='p-4' src={img2} />
                        <Card.Body>
                            <Card.Title>Jewelery</Card.Title>
                            <Button variant="success">
                                <Link to='/jewelery' className='text-decoration-none text-light'>
                                    View Category
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className='my-3 me-3 p-2' >
                        <Card.Img className='p-4' src={img4} />
                        <Card.Body>
                            <Card.Title>Men's clothing</Card.Title>
                            <Button variant="success">
                                <Link to="/men's clothing" className='text-decoration-none text-light'>
                                    View Category
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className='my-3 me-3 p-2' >
                        <Card.Img className='p-4' src={img3} />
                        <Card.Body>
                            <Card.Title>Women's clothing</Card.Title>
                            <Button variant="success">
                                <Link to="/women's clothing" className='text-decoration-none text-light'>
                                    View Category
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <h1>All Products {product.length}</h1>
                <div className='product__cards__row'>
                    {loading ? <Loading /> :
                        product.map(el => <ProductCard key={el.id} {...el} />)
                    }
                    <button className='btn btn-info mb-3' onClick={showProducts}>Show More</button>
                </div>
            </Container>
        )
    }
}

export default HomePage