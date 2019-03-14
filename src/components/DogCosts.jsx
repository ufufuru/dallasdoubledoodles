import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import './DogCosts.css'

function DogCosts(props) {
    if (props.costsOpened == false) return null 
    return(
        <div className="DogCostsTable slider" id="philosophy" onClick={props.closeCosts}>
            <a className="close"></a>
            <Table>
                <thead>
                    <tr>
                        <th><b>Type of Expense</b></th>
                        <th><b>Yearly Estimate</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Food and Treats</td>
                        <td>$250 - 700</td>
                    </tr>
                    <tr>
                        <td>Toys</td>
                        <td>$25 - 150</td>
                    </tr>
                    <tr>
                        <td>Beds</td>
                        <td>$50 - 200</td>
                    </tr>
                    <tr>
                        <td>Leashes and Collars</td>
                        <td>$20 - 50</td>
                    </tr>
                    <tr>
                        <td>Grooming</td>
                        <td>$30 - 500</td>
                    </tr>
                    <tr>
                        <td>Routine Veterinary Care</td>
                        <td>$700 - 1500</td>
                    </tr>
                    <tr>
                        <td>Preventative Medication and Supplements</td>
                        <td>$200 - 600</td>
                    </tr>
                    <tr>
                        <td>Training Classes or Resources</td>
                        <td>$25 - 300</td>
                    </tr>
                    <tr>
                        <td>Petsitters or Boarding</td>
                        <td>$100 - 300</td>
                    </tr>
                    <tr>
                        <th>Yearly Total</th>
                        <th>$1400 - 4300</th>
                    </tr>
                    <tr>
                        <th>Average Monthly Cost of Owning a Dog</th>
                        <th>$115 - 350</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DogCosts