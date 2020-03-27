import React, { Component } from 'react';

class OurStory extends Component {
  render() {

    if(this.props.data){
      var our_story = this.props.data.our_story.map(function(our_story){
				console.log('our_story: ', our_story)
        return  <li key={our_story.user}>
            <blockquote>
               <p>{our_story.text}</p>
               <cite>{our_story.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="our_story">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Our Story</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {our_story}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default OurStory;
