import React from 'react'
import { Link } from 'react-router-dom'
import PageNavBar from '../components/PageNavBar'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import CasesNotAccepted from './dashboardComponents/CasesNotAccepted'
import CasesNotFiled from './dashboardComponents/CasesNotFiled'
import WeeksDockets from './dashboardComponents/WeeksDockets'

const Desktop = () => {
    return (
        <>

            <PageNavBar />

            <Container>
                <Row className='my-4'>
                    <Col>
                        <CasesNotAccepted />
                    </Col>
                    <Col>
                        <CasesNotFiled />
                    </Col>
                </Row>
                <Row className='my-4'>
                    <Col>
                        <WeeksDockets />
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