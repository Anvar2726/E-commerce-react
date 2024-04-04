import { Component } from 'react'

import { Container } from 'react-bootstrap';

import './loading.scss';

class Loading extends Component {
    render() {
        return (
            <Container>
                <div className='loading__box'>
                    <div className="loader">Loading...</div>
                </div>
            </Container>
        )
    }
}

export default Loading