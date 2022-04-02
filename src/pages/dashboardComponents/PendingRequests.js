import React from 'react'
import { Card, Table, Container, Row, Col, Button } from 'react-bootstrap'

const PendingRequests = () => {
  return (
    <>
    
                        <Card style={{ height: '48rem', boxShadow: '2px 2px 15px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Pending requests</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Container>
                                        <Row className='mt-3 bg-primary fw-bold text-light'><div className='text-center'>Dismissals</div></Row>
                                        <Row>
                                            <Table hover>
                                                
                                                <thead>
                                                    <tr>
                                                        <th>Date requested</th>
                                                        <th>Case no.</th>
                                                        <th>PM</th>
                                                        <th>Defendant</th>
                                                        <th>Address</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>3/25/2022</td>
                                                        <td>2116-CV000000</td>
                                                        <td>XYZ Property Management</td>
                                                        <td>John L. Smith</td>
                                                        <td>7890 Main Street #202</td>
                                                        <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3/28/2022</td>
                                                        <td>2116-CV000000</td>
                                                        <td>XYZ Property Management</td>
                                                        <td>Jane L. Smith</td>
                                                        <td>7890 Main Street #303</td>
                                                        <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4/1/2022</td>
                                                        <td>2216-CV000000</td>
                                                        <td>XYZ Property Management</td>
                                                        <td>George L. Smith</td>
                                                        <td>7890 Main Street #404</td>
                                                        <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Row>
                                        <Row className='mt-3 bg-primary fw-bold text-light'><div className='text-center'>Writs</div></Row>
                                        <Row>
                                            <Table hover>
                                                
                                                <thead>
                                                    <tr>
                                                        <th>Date requested</th>
                                                        <th>Case no.</th>
                                                        <th>Judgment Date</th>
                                                        <th>PM</th>
                                                        <th>Defendant</th>
                                                        <th>Address</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>3/23/2022</td>
                                                        <td>2116-CV000000</td>
                                                        <td>3/16/2022</td>
                                                        <td>ABC Company</td>
                                                        <td>John L. Smith</td>
                                                        <td>1234 Main Street #707</td>
                                                        <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3/28/2022</td>
                                                        <td>2116-CV000000</td>
                                                        <td>3/16/2022</td>
                                                        <td>ABC Company</td>
                                                        <td>Jane L. Smith</td>
                                                        <td>1234 Main Street #808</td>
                                                        <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4/1/2022</td>
                                                        <td>2216-CV000000</td>
                                                        <td>3/23/2022</td>
                                                        <td>ABC Company</td>
                                                        <td>George L. Smith</td>
                                                        <td>1234 Main Street #909</td>
                                                        <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Row>
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card> 

    </>
  )
}

export default PendingRequests