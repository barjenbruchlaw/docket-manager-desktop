import React from 'react'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'

const CasesNotFiled = () => {
  return (
    <>
                        <Card style={{ height: '32rem', boxShadow: '2px 2px 15px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Cases that need to be filed</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>Date accepted</th>
                                                <th>PM</th>
                                                <th>Address</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=' text-danger fw-bold'>
                                                <td>3/25/2022</td>
                                                <td>JKL Management</td>
                                                <td>4567 Main Street #202</td>
                                                <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                            </tr>
                                            <tr className='text-dark'>
                                                <td>3/30/2022</td>
                                                <td>JKL Management</td>
                                                <td>4567 Main Street #303</td>
                                                <td><Button size='sm' variant='dark' disabled>View/Edit</Button></td>
                                            </tr>
                                            <tr className='text-dark'>
                                                <td>3/31/2022</td>
                                                <td>JKL Management</td>
                                                <td>4567 Main Street #505</td>
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

export default CasesNotFiled