import React from 'react'
import { Link } from 'react-router-dom'
import PageNavBar from '../components/PageNavBar'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'

const Desktop = () => {
    return (
        <>

            <PageNavBar />

            <Container>
                <Row className='my-4'>
                    <Col>
                        <Card style={{ height: '32rem', boxShadow: '5px 5px 20px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Cases not accepted</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Table bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>PM</th>
                                                <th>Address</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ color: '#E74C3C' }} className='fw-bold'>
                                                <td>3/28/2022</td>
                                                <td>ABC Company</td>
                                                <td>1234 Main Street #202</td>
                                                <td><Button size='sm' variant='dark'>View/Edit</Button></td>
                                            </tr>
                                            <tr className='text-danger'>
                                                <td>3/30/2022</td>
                                                <td>ABC Company</td>
                                                <td>1234 Main Street #303</td>
                                                <td><Button size='sm' variant='dark'>View/Edit</Button></td>
                                            </tr>
                                            <tr className='text-dark'>
                                                <td>3/31/2022</td>
                                                <td>ABC Company</td>
                                                <td>1234 Main Street #404</td>
                                                <td><Button size='sm' variant='dark'>View/Edit</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '32rem', boxShadow: '5px 5px 20px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Featured</Card.Header>
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
                        <Card style={{ height: '32rem', boxShadow: '5px 5px 20px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '32rem', boxShadow: '5px 5px 20px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Featured</Card.Header>
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