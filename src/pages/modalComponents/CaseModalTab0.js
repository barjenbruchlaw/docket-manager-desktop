import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const CaseModalTab0 = () => {

  const [residentNames, setResidentNames] = useState([{ id: uuidv4(), firstName: '', middleInitial: '', lastName: '', suffix: '', },])
  const handleAddFields = () => { setResidentNames([...residentNames, { id: uuidv4(), firstName: '', lastName: '' }]) }
  const handleRemoveFields = id => { const values = [...residentNames]; values.splice(values.findIndex(value => value.id === id), 1); setResidentNames(values); }
  const userPopoverJJonas = (

    <Popover id="user-information">
      <Popover.Header as="h4">James J. Jonas</Popover.Header>
      <Popover.Body>
        Email: <a href='mailto: jjonas@abccompany.com'>jjonas@abccompany.com</a> <br />
        Phone: (816) 555-1234
      </Popover.Body>
    </Popover>

  )

  return (

    <>

      <Form>
        <Container>
          <NewCaseButtons />
          <Row className='pt-3'>
            <Col>
              <Form.Label>Property Manager:</Form.Label>
              <Form.Select><option>ABC Company</option></Form.Select>
            </Col>
            <Col>
              <Form.Label>Property Owner:</Form.Label>
              <Form.Select>
                <option>123 Main, LLC</option>
                <option>456 Main, LLC</option>
                <option>789 Main, LLC</option>
              </Form.Select>
            </Col>
            <Col className='text-end'><br />Case created by: <OverlayTrigger trigger='click' rootClose placement='left' overlay={userPopoverJJonas}><a href='#userInfo'>James J. Jonas</a></OverlayTrigger></Col>
          </Row>
          <Row className='pt-3'>
            <Col>
              <Form.Label>Street Address:</Form.Label>
              <Form.Control value='1234 Main Street' />
            </Col>
            <Col>
              <Form.Label>Unit:</Form.Label>
              <Form.Control value='202' />
            </Col>
          </Row>
          <Row className='pt-3'>
            <Col xs={5}>
              <Form.Label>City:</Form.Label>
              <Form.Control value='Kansas City' />
            </Col>
            <Col xs={2}>
              <Form.Label>State:</Form.Label>
              <Form.Select>
                <option>Missouri</option>
                <option>Kansas</option>
              </Form.Select>
            </Col>
            <Col xs={2}>
              <Form.Label>ZIP:</Form.Label>
              <Form.Control value='64106' />
            </Col>
            <Col>
              <Form.Label>Client internal file number:</Form.Label>
              <Form.Control />
            </Col>
          </Row>
          <Row className='pt-3'>
            <Col>
              <Form.Label>Resident 1:</Form.Label>
              <Form.Control value='Frank R. Smith' />
            </Col>
          </Row>
          {residentNames.map(inputField => (
            <div key={residentNames.id}>

              <Row className='pt-3 ms-1'>Resident:</Row>

              <Row className='mt-3'><Col>
                <Form.Control
                  name="firstName"
                  placeholder="First Name"
                  value={inputField.firstName}
                /></Col>
                <Col xs={1}>
                  <Form.Control
                    name="middleInitial"
                    placeholder="MI"
                    value={inputField.middleInitial}
                  /></Col>
                <Col>
                  <Form.Control
                    name="lastName"
                    placeholder="Last Name"
                    value={inputField.lastName}
                  /></Col>
                <Col xs={1}>
                  <Form.Control
                    name="suffix"
                    placeholder="Suffix"
                    value={inputField.suffix}
                  /></Col>
                <Col className='text-end'><Button disabled={residentNames.length === 1} onClick={() => handleRemoveFields(inputField.id)}>Remove</Button>
                  <Button className='ms-2' onClick={handleAddFields}>Add</Button></Col></Row>
            </div>))}

        </Container>
      </Form>

    </>
  )
}


const NewCaseButtons = () => {

  const [caseAccepted, setCaseAccepted] = useState(false)
  const [showHoldDialog, setShowHoldDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const acceptButtonClick = () => { setCaseAccepted(true) }
  const holdButtonClick = () => setShowHoldDialog(!showHoldDialog)
  const rejectButtonClick = () => setShowRejectDialog(!showRejectDialog)

  return (
    <>
      <Row className='pt-3'>
        <Col />
        <Col>{caseAccepted ? <Button variant='success' className='fw-bold'>Case Accepted</Button> : <Button variant='info' className='fw-bold' onClick={acceptButtonClick}>Accept Case</Button>}</Col>
        <Col><Button variant='warning' className='fw-bold' disabled={caseAccepted} onClick={holdButtonClick}>Hold Case</Button></Col>
        <Col><Button variant='danger' className='fw-bold' disabled={caseAccepted} onClick={rejectButtonClick}>Reject Case</Button></Col>
        <Col />
      </Row>
      {showHoldDialog ? <HoldDialog /> : null}
      {showRejectDialog ? <RejectDialog /> : null}
    </>
  )
}

const HoldDialog = () => {
  return (
    <>
      <Row className='pt-3'>
        <Form.Label>Why is this case on hold?</Form.Label>
        <Col xs={8}><Form.Control /></Col><Col><Button href='/search'>Submit</Button></Col>
      </Row>
    </>
  )
}

const RejectDialog = () => {
  return (
    <>
      <Row className='pt-3'>
        <Form.Label>Why is this case being rejected?</Form.Label>
        <Col xs={8}><Form.Control /></Col><Col><Button href='/search'>Submit</Button></Col>
      </Row>
    </>
  )
}

export default CaseModalTab0
