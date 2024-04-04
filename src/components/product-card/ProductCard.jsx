import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'

class ProductCard extends Component {
  render() {
    const {id, title, price, category, description, image} = this.props;
    return (
        <Card className='mb-3 '>
        <Card.Img className='p-4' src={image} height={300}/>
        <Card.Body>
            <Card.Title className='product__card__title'>{title}</Card.Title>
            <Card.Text className='product__card__desc'>
                {description}
            </Card.Text>
            <p>Category: <Badge bg="primary">{category}</Badge></p>
            <p>Price: <Badge bg="info">{price} $</Badge></p>
            <Button variant="success">
                <Link to={`/${category}/${id}`} className='text-decoration-none text-light'>
                    View Product
                </Link>
            </Button>
        </Card.Body>
    </Card>
    )
  }
}

export default ProductCard