import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const CaseModalTab9 = () => {
    return (
        <>

            <Container className='py-5 mx-5'>

                <Row className='py-4'>
                    <Col xs={2} />
                    <Col xs={3}>
                        <Button>Request updated ledger</Button>
                    </Col>
                    <Col xs={2} />
                    <Col xs={3}>
                        Last request: N/A
                    </Col>
                    <Col xs={2} />
                </Row>
                <Row className='py-4'>
                    <Col xs={2} />
                    <Col xs={3}>
                        <Button>Request dismissal</Button>
                    </Col>
                    <Col xs={2} />
                    <Col xs={3}>
                        Last request: N/A
                    </Col>
                    <Col xs={2} />
                </Row>
                <Row className='py-4'>
                    <Col xs={2} />
                    <Col xs={3}>
                        <Button>Request writ</Button>
                    </Col>
                    <Col xs={2} />
                    <Col xs={3}>
                        Last request: N/A
                    </Col>
                    <Col xs={2} />
                </Row>

            </Container>

        </>
    )
}

export default CaseModalTab9