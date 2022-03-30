import React from 'react'
import { Link } from 'react-router-dom'
import PageNavBar from '../components/PageNavBar'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Desktop = () => {
  return (
    <>
    
    <PageNavBar />

    <Container>
        <Row className='my-4'>
            <Col>
            <Card>
            <Card.Header className='fs-3'><Link to='/' style={{ textDecoration: 'none' }}>Featured</Link></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Header className='fs-3'><Link to='/' style={{ textDecoration: 'none' }}>Featured</Link></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>
        </Row>
        <Row className='my-4'>
            <Col>
            <Card>
            <Card.Header className='fs-3'><Link to='/' style={{ textDecoration: 'none' }}>Featured</Link></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Header className='fs-3'><Link to='/' style={{ textDecoration: 'none' }}>Featured</Link></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Desktop