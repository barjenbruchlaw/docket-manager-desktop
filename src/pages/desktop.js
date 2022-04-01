import React from 'react'
import { Link } from 'react-router-dom'
import PageNavBar from '../components/PageNavBar'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import CasesNotAccepted from './dashboardComponents/CasesNotAccepted'
import CasesNotFiled from './dashboardComponents/CasesNotFiled'
import WeeksDockets from './dashboardComponents/WeeksDockets'
import ThisYearLastYearChart from './dashboardComponents/ThisYearLastYearChart'

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
                        <ThisYearLastYearChart />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Desktop