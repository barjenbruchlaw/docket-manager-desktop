import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'




const ThisYearLastYearChart = () => {
  return (
    <>
        <Card style={{ height: '32rem', boxShadow: '2px 2px 15px' }}>
            <Card.Header className='fs-3 bg-primary text-dark'>Placements - this year vs. last year</Card.Header>
            <Card.Body>
                <Card.Text className='fs-4 text-center'>
                    <Row className='mt-5 bg-primary text-light fw-bold'><Col>February</Col></Row>
                    <Row>
                        <Col>2021: 15 cases</Col>
                        <Col>2022: 20 cases</Col>
                    </Row>
                    <Row className='mt-5 bg-primary text-light fw-bold'><Col>March</Col></Row>
                    <Row>
                    <Col>2021: 10 cases</Col>
                    <Col>2022: 30 cases</Col>
                    </Row>
                    <Row className='mt-5 bg-primary text-light fw-bold'><Col>April</Col></Row>
                    <Row>
                    <Col>2021: 12 cases</Col>
                    <Col>2022: 0 cases</Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>

    </>
  )
}



export default ThisYearLastYearChart