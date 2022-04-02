import React from 'react'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'

const WeeksDockets = () => {
  return (
    <>
                        <Card style={{ height: '32rem', boxShadow: '2px 2px 15px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Dockets in the next 10 days</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row className='bg-primary text-light mt-3 fw-bold'>Monday, March 28, 2022</Row>
                                    <Row className='mt-2'>
                                        <Col xs={2}>1:30 PM</Col>
                                        <Col>Division 9 - Clay County, MO</Col>
                                        <Col xs={2}>3 cases</Col>
                                    </Row>
                                    <Row className='bg-primary text-light mt-3 fw-bold'>Tuesday, March 29, 2022</Row>
                                    <Row className='mt-2'>
                                        <Col xs={2}>9:00 AM</Col>
                                        <Col>Division 32 - Jackson County (Independence), MO</Col>
                                        <Col xs={2}>1 case</Col>
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col xs={2}>1:30 PM</Col>
                                        <Col>Division 32 - Jackson County (Independence), MO</Col>
                                        <Col xs={2}>3 cases</Col>
                                    </Row>
                                    <Row className='bg-primary text-light mt-3 fw-bold'>Thursday, March 31, 2022</Row>
                                    <Row className='mt-2'>
                                        <Col xs={2}>9:30 AM</Col>
                                        <Col>Division 31 - Jackson County (Kansas City), MO</Col>
                                        <Col xs={2}>11 cases</Col>
                                    </Row>
                                    <Row className='bg-primary text-light mt-3 fw-bold'>Monday, April 4, 2022</Row>
                                    <Row className='mt-2'>
                                        <Col xs={2}>1:30 PM</Col>
                                        <Col>Division 9 - Clay County, MO</Col>
                                        <Col xs={2}>1 case</Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
    </>
  )
}

export default WeeksDockets