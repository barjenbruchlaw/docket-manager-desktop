import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const CaseModalTab5 = () => {
    return (
        <>

            <Container>
                <Row className='fw-bold py-2'>
                    <Col xs={1}>#</Col>
                    <Col xs={2}>Date</Col>
                    <Col>Name</Col>
                    <Col>Link</Col>
                </Row>
                <Row className='py-2'>
                    <Col xs={1}>1</Col>
                    <Col xs={2}>2022-03-28</Col>
                    <Col>Lease</Col>
                    <Col><a href='#'>Lease_1234_202</a></Col>
                </Row>
                <Row className='py-2'>
                    <Col xs={1}>2</Col>
                    <Col xs={2}>2022-03-28</Col>
                    <Col>Notice to vacate</Col>
                    <Col><a href='#'>Notice_1234_202</a></Col>
                </Row>
                <Row  className='pt-5'>
                    <div className='fw-bold'>Upload new document here:</div>
                </Row>
                <Row className='pt-1'>
                    <Col xs={7}><Form.Control type='file' /></Col><Col><Form.Control placeholder='Name of document' /></Col>
                </Row>
            </Container>

        </>
    )
}

export default CaseModalTab5