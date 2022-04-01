import React from 'react'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'

const CasesNotAccepted = () => {
  return (
    <>
                        <Card style={{ height: '32rem', boxShadow: '5px 5px 20px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Cases not accepted</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>Date submitted</th>
                                                <th>PM</th>
                                                <th>Address</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=' text-danger fw-bold'>
                                                <td>3/28/2022</td>
                                                <td>ABC Company</td>
                                                <td>1234 Main Street #202</td>
                                                <td><Button size='sm' variant='dark'>View/Edit</Button></td>
                                            </tr>
                                            <tr className='text-danger'>
                                                <td>3/30/2022</td>
                                                <td>ABC Company</td>
                                                <td>1234 Main Street #303</td>
                                                <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                            </tr>
                                            <tr className='text-dark'>
                                                <td>3/31/2022</td>
                                                <td>ABC Company</td>
                                                <td>1234 Main Street #404</td>
                                                <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>    
    </>
  )
}

export default CasesNotAccepted