import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './PuppyContainer.css'

function PuppyContainer(props) {
    const annabelle = {
        name: 'Annabelle',
        info: `Miss Anabelle, our Mother, is a two year old second generation labradoodle we bought as a puppy.
        Anabelle’s mother and father are both labradoodles and both cream/apricot in color. Anabelle is the
        reason we decided to breed. We had so many people ask us if we were going to breed her because as a
        puppy she was very docile and sweet tempered as well as easy to train. She loves to please and loves to
        play and be with our family but is also independent. She gets along great with other dogs well. She has
        never chewed a shoe or been destructive which is due to temperament and also having plenty of play
        time and attention. As my husband says “A tired puppy is a happy puppy is a happy owner” Puppies and
        dogs in general will be mischievous if they are bored.`,
        image: 'img/annabelleInfo.png'
    }

    const tucker = {
        name: 'Tucker',
        info: `Mr. Tucker, our stud, is a 1 year old second generation golden-doodle. Tucker’s parents are both second
        generation golden-doodles. His father is cream colored and his mother is solid black. We made Tucker
        part of our family when he was a year old and has been a lovable addition to our family. He is also very
        docile and sweet natured. Most people can’t believe he is a puppy. He loves to sit in your lap (all 57lbs)
        and he loves meal time. He learned sit, down and stay within the first day we had him with positive
        reinforcement- the way to his head/heart is through his belly. He also loves belly rubs/tummy tickle
        time. He too has never chewed a sock or shoe. He loves to chew on bones and antlers.`,
        image: 'img/tuckerInfo.png'
    }
    
    
    return (
        <div className="PuppyContainer" id="doodles">
            <Container>
                <Row>
                    <Col>
                        <h1>Click on Annabelle or Tucker to learn more about our doodles!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="img/annabelle_thumb.png" alt="Annabelle" onClick={props.openPuppy.bind(this, annabelle.name, annabelle.info, annabelle.image)}/>
                        <h2>Annabelle</h2>
                    </Col>
                    <Col>
                        <img src="img/tucker_thumb.png" alt="Tucker" onClick={props.openPuppy.bind(this, tucker.name, tucker.info, tucker.image)}/>
                        <h2>Tucker</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PuppyContainer