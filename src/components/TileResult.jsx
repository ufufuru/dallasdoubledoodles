import React from 'react'
import { Container } from 'reactstrap'
import './TileResult.css'

function TileResult(props) {
   if (props.openedTile === "money") return (
        <div className="TileResult Money">
            <Container fluid>
                <p>There is a 300.00 non-refundable deposit that can be mailed in with application or sent via <a href="https://venmo.com/">Venmo</a> to
                    Christiane-jamieson. The final payment of 1700.00 is due at time of pick up with cash or Venmo. If you
                    choose to right a personal check, it must clear the bank before you pick up your puppy.
                </p>
            </Container>
        </div>
    )
    if (props.openedTile === "medicine") return (
        <div className="TileResult Medicine">
            <Container fluid>
                <p>Puppies will be given first set up vaccines and dewormed. It is important you keep up with vaccines. We
                    recommend you schedule to see your vet when your puppy is 10-12 weeks old. We use VCA location on
                    Central Expressway in Dallas, Dr. Troy Cobb. They have puppy and adult well care plans that help you
                    budget for routine veterinary costs. They can also place a chip in case your puppy/dog wonders off.
                </p>
            </Container>
        </div>
    )
    if (props.openedTile === "food") return (
        <div className="TileResult Food">
            <Container fluid>
                <p>We will also provide small bag of the puppy food they have been given which is Fromm gold puppy. You
                    can find this at Hollywood feed and chewy.com. Good nutrition is important in all stages of a dog’s life.
                    Foods without fillers are ideal. Food does not need to be wheat free unless your dog has an allergy to
                    wheat. Less than one percent of all dogs are allergic to wheat and actually need it for cardiovascular
                    health. Just because gluten is bad for adults does not mean it is bad for dogs just as we can eat grapes
                    without issue but if your dog gets into grapes, it can be lethal due to causing kidneys to shut down. You
                    can click <span onClick={props.openFood} className="DogFood">here</span> for a list of human foods that dogs can and can’t eat. It is best
                    to feed your dog two times daily with a set time to eat and not allow grazing all day long.
                </p>
            </Container>
        </div>
    )
    if (props.openedTile === "training") return (
        <div className="TileResult Training">
            <Container fluid>
                <p>If you are first time puppy/dog owner, training is highly recommended. We recommend you have
                    someone lined up before you pick your puppy up. They are many trainers who will come to your home
                    for one on one training as well as classes at PetSmart. Starting off on the right paw is integral to a well
                    behaved puppy and dog. Positive reinforcement and rewards work best. Negative reinforcement only
                    works if you reprimand while your puppy is exhibiting the undesired behavior. For example, they do not
                    understand why you are reprimanding them for jumping up unless you address at the time of jumping.
                    You can say no and turn your back and ignore the jumping to make the association. Just like kids, they
                    want attention and will seek it however you will give it. I walk around with a treat bag on my hip and
                    constantly reward good behavior which has worked quite well.
                </p>
            </Container>
        </div>
    )
}

export default TileResult