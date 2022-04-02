import React from 'react'
import { Form, Table } from 'react-bootstrap'

const CaseModalTab3 = () => {
    return (
        <>

            <Table striped bordered className='m-2'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>User</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>3/28/2022</td>
                        <td>James J. Jonas</td>
                        <td>Case submitted by client</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Form.Control placeholder='Add new case status here' /></td>
                    </tr>
                </tfoot>
            </Table>

        </>
    )
}

export default CaseModalTab3