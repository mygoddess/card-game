import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}
   
export default class WordCard extends Component {
    //activationHandler = c => { console.log(`${c} has been activated.`) }

    constructor(props){
        super(props)
        this.state = {
            attemp: 0,
        }
    }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
    }
       

    render () {
        return (
            <div>
                { 
                    Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} 
                        attempt={this.state.attempt} 
                        activationHandler={this.activationHandler}/>) 
                }
            </div>  
        )
    }
}