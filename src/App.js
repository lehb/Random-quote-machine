import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import ReactFCCtest from 'react-fcctest';
import {FaQuoteLeft} from 'react-icons/fa'

import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            qoutes:[
            ['A rose by any other name would smell as sweet.','William Shakespeare','#508050'],
            [' To be or not to be, that is the question.','William Shakespeare','navy'],
            ['To err is human; to forgive, divine.'	,'Alexander Pope 3','dodjeblue'],
            ['To thine own self, be true.','William Shakespeare','orange'],
            ['Tis better to have loved and lost than never to have loved at all.','Alfred Lord Tennyson','#808000'],
            ['That’s one small step for a man, a giant leap for mankind.','Neil Armstrong','black'],
            ['Life is like riding a bicycle. To keep your balance, you must keep moving.','Albert Einstein','#483D8B'],
            ['You must be the change you wish to see in the world.','Mahatma Ghandi','#DA70D6'],
            ['Whatever you are, be a good one.','Abraham Lincoln','#FF1493'],
            ['The only thing we have to fear is fear itself.	','Franklin D. Roosevelt','#CD853F'],
        ],
        currentQuoteIndex:0
         }
         this.handleTweet=this.handleTweet.bind(this)
         this.handleNewQuote=this.handleNewQuote.bind(this)
         
    
        }

    handleNewQuote(){
      let index= (Math.ceil(Math.random()*9))  
      this.setState(() => {
        return {currentQuoteIndex:index};
      });

  
    }
    handleTweet(){
       
    }
  
    render() { 
        let color=this.state.qoutes[this.state.currentQuoteIndex][2];
        let text=this.state.qoutes[this.state.currentQuoteIndex][0];
        let author=this.state.qoutes[this.state.currentQuoteIndex][1];
         const style={
             'backgroundColor':color,
             'color':color
         }

        return ( 
<div id="container" style={style}>
<ReactFCCtest/>
    <div id='quote-box' >
        <p id="text" style={{'color':style.color}}><FaQuoteLeft/> { text}</p>
        <p id="author">- {author}</p>
        <div className='btn'>
        <button id="new-quote" onClick={this.handleNewQuote} style={{'backgroundColor':style.backgroundColor}}>New quote</button>
        <a  id="tweet-quote" target={'_blank'} href={`https://twitter.com/intent/tweet?text="${text}" — ${author}`} onClick={this.handleTweet} style={{'backgroundColor':style.backgroundColor}}><FontAwesomeIcon icon={faTwitter} size={'2x'} /></a>
    
        </div>
    </div>

</div>

         );
    }
}
 
export default App;