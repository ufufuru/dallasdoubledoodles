import React from 'react'
import { Container } from 'reactstrap'
import './PuppyOwning.css'

function PuppyOwning(props) {
    return (
        <div id="philosophy">
            <Container className="PuppyOwning">
                <h2>We Believe Dogs are an Important Part of the Family</h2>
                <p>
                    Applicants (click here for application) for
                    puppies will be reviewed in detail to assure puppies are matched with the right family. Puppies do grow
                    up and require a great deal of time, attention, love and training right from the start which are all
                    required throughout your dog’s life. My husband will tell you we feed our dogs one cup of TLC each day
                    along with Fromm dog food. We have included a range for costs of owning a dog, which you can review <span className="DogCosts" onClick={props.openCosts}>here</span> so you know your financial commitment when
                    you add a dog to your family.<br/><br/>

                    Our goal is produce happy, healthy, easy going temperaments that help with the transition of our
                    puppies from our family to your family. All of our puppies are raised in our home where they receive
                    countless hours of attention as well as a big yard to learn and explore within. They will be trained to use
                    a doggie door as that is optimal especially if you will be gone for more than 6-8 hours at a time. You
                    would not like to wait for 6-8 hours to relieve yourself and dogs are just the same. Our dogs, love the
                    freedom the doggie door allows. Our yard is .75 acres. If a doggie door is not on your list, then we
                    recommend a pet sitter to let your dog out and take for a walk if you will be away from them for
                    extended periods on a regular basis. We recommend the Pet Divas. We recommend you love them up
                    and exercise them when you are home. Early socialization is important and is recommended around
                    other dogs you know have been properly cared for and vaccinated. We recommend avoiding dog parks
                    until your puppy has received at least their second round of vaccines.
                </p>
            </Container>
        </div>
    )
}

export default PuppyOwning