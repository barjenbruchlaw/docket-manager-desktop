import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'




const ThisYearLastYearChart = () => {
  return (
    <>
        <Card style={{ height: '32rem', boxShadow: '5px 5px 20px' }}>
            <Card.Header className='fs-3 bg-primary text-dark'>Placements - this year vs. last year</Card.Header>
            <Card.Body>
                <Card.Text className='fs-4 text-center'>
                    <Row className='mt-5 bg-black text-light'><Col>February</Col></Row>
                    <Row>
                        <Col>2021: 15</Col>
                        <Col>2022: 20</Col>
                    </Row>
                    <Row className='mt-5 bg-black text-light'><Col>March</Col></Row>
                    <Row>
                    <Col>2021: 10</Col>
                    <Col>2022: 30</Col>
                    </Row>
                    <Row className='mt-5 bg-black text-light'><Col>April</Col></Row>
                    <Row>
                    <Col>2021: 12</Col>
                    <Col>2022: 0</Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>

    </>
  )
}



export default ThisYearLastYearChart