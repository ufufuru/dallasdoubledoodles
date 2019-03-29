import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './Contracts.css' 

function Contracts(props) {
    return (
        <div className="Contracts" id="application">
            <h2>Application</h2>
            <Container>
                <Row>
                    <Col className="Application">
                        <Form action="https://formspree.io/dallasdoubledoodles@gmail.com" method="POST">
                            <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                    <Label for="firstName">First Name *</Label>
                                    <Input isRequired type="text" name="firstname" id="firstName"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Label for="lastName">Last Name *</Label>
                                    <Input isRequired type="text" name="lastname" id="lastName"/>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input isRequired type="email" name="email" id="email"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup>
                                    <Label for="phone">Phone Number</Label>
                                <Input isRequired type="text" name="phone" id="phone" placeholder="(###) ###-###"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input isRequired type="text" name="city" id="city"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="state">State</Label>
                                        <Input type="select" name="state" id="state">
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District Of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="gender" check>What gender do you prefer?</Label>
                                        <Input type="select" name="gender" id="gender" placeholder="Select your preference">
                                            <option>Either gender</option>
                                            <option>Male only</option>
                                            <option>Male preferred (may consider female)</option>
                                            <option>Female only</option>
                                            <option>Female preferred (may consider male)</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="allergic">Are any family members allergic to dogs?</Label>
                                        <Input type="select" name="allergic" id="allergic">
                                            <option value="no">No</option>
                                            <option value="yes">Yes</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="kids">How many children are in the household?</Label>
                                        <Input type="select" name="kids" id="kids">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5+</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label for="kidsage">What are the ages of any children in the household?</Label>
                                        <Input type="text" name="kidsage" id="kidsage"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="date">What is the earliest date you are able to bring a puppy home?</Label>
                                        <Input type="date" name="date" id="date" placeholder="date placeholder"/>
                                    </FormGroup>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label for="wait">How long are you willing to wait for a puppy?</Label>
                                        <Input type="text" name="wait" id="wait"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="traits">What traits are you looking for in a puppy?</Label>
                                <Input type="textarea" name="traits" id="traits" placeholder="Please describe any traits or personality type you desire in your future puppy, such as: coat type, color, temperament, etc."/>
                            </FormGroup>
                            <Button type="submit">Submit <span role="img" aria-label="paw_prints">🐾</span></Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container className="Agreements">
            <Row>
                <Col sm="12" md="6">
                    <h5>General Puppy Health</h5>
                    <p>
                                Dallas Double Doodles guarantees that the puppy is in good health as far as appears to the eye, has
                                received appropriate medical inoculations, worming and care. We also guarantee for a period of 72
                                hours that the puppy is free of disease and is in good health. In order for guarantee/warranty to be
                                valid, all puppies must be examined by a licensed veterinarian of buyers choice within 72 hours of
                                receipt of dog. In the event that a pre-existing disease is determined within the first 72 hours of receipt
                                of the dog, Seller will reimburse veterinary bills not to exceed original purchase price of the puppy. For
                                reimbursement of veterinary bills, the care plan must be pre-approved by our veterinarian, Dr. Troy
                                Cobb of VCA- Central Expressway, Dallas, Texas
                    </p>
                </Col>
                <Col sm="12" md="6">
                    <h5>Spay/Neuter Agreement</h5>
                    <p>
                                Buyer understands and agrees that Puppy is sold as a companion pet only, not for breeding purposes to
                                help reduce amount of inbreeding. Buyer agrees the puppy/dog will be spayed or neutered before the age
                                of 13 months. Buyer agrees to provide proof of spay/neuter to Dallas Double Doodles within 30 days of
                                the surgery. If buyer fails to spay/neuter puppy by the 13 months of age, buyer shall pay seller the
                                difference in the price between pet and breeding stock. Breeders are sold for $5,000 which is $3000
                                more than our pet price. In the event the buyer intentionally or negligently breeds puppy/dog, the buyer
                                shall be in breach of contract and liable to seller for costs to enforce the terms herein.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="6">
                    <h5>DNA/Genetics</h5>
                    <p>DNA testing for Anabelle and Tucker are pending. Once available, we will provide the details.</p>
                </Col>
                <Col sm="12" md="6">
                    <h5>Right of First Refusal</h5>
                    <p>
                                Buyer understands that seller has the right of first refusal if buyer decides the puppy/dog is not a good
                                fit for their family and will return the puppy/dog without a refund so buyer can find a suitable home.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="email">
                        If you would like to contact us without filling out an application, you can reach us at <a href="mailto:dallasdoubledoodles@gmail.com">dallasdoubledoodles@gmail.com</a>
                    </p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Contracts