import React from 'react';
import jobblejobble from '../images/jobblejobble.mp4'
import Jobblebubble from '../images/Jobblebubble.png'

function Home() {
  return (
    <>
      <div><img className="thoughtBubble" src={Jobblebubble} alt="Jobble thought bubble"/></div>
      <div className="animationContainer">
      <video className="animation" loop autoPlay>
        <source src={jobblejobble} type='video/mp4' />
    </video>
    </div>
    </>
  );
}
export default Home;
