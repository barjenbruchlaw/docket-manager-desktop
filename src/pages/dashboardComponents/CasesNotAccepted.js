import React, { useState } from 'react'
import { Container, Row, Col, Card, Table, Button, Modal } from 'react-bootstrap'
import CaseModal from '../modalComponents/CaseModal'

const CasesNotAccepted = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
    <>
                        <Card style={{ height: '32rem', boxShadow: '2px 2px 15px' }}>
                            <Card.Header className='fs-3 bg-primary text-dark'>Cases that need to be accepted or rejected</Card.Header>
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
                                                <td><Button size='sm' variant='dark' onClick={handleShow}>View/Edit</Button></td>
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

        <Modal show={show} onHide={handleClose} size='xl'>
            <Modal.Header className='bg-light' closeButton>
            <Modal.Title>View or Edit Case</Modal.Title>
            </Modal.Header>

            <CaseModal />

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default CasesNotAccepted