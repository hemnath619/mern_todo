import React from 'react';
import './home.css';
import Login from './Login';


const Home = () => {
  return (<>
    <div className='homebox'>
    <div className='item1'>
      {/* <img src={todo} alt="todo home"className='image'/> */}
      <section> 
    <div className="rt-container">
    	<div className="col-rt-12">
  {/* <!-- Slider --> */}
          <div id="slider">
            <div className="slides">
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <p>“Someday is not a day of the week.”</p>
                    <h2>- Janet Dailey</h2>
                  </div>
                </div>
                {/* <div className="image"> <img src={img1}/> </div> */}
              </div>
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <p>“Make each day your masterpiece.”</p>
                    <h2>- John Wooden</h2>
                  </div>
                </div>
                {/* <div className="image"> <img src={img2}/> </div> */}
              </div>
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <p>“We can do anything we want to if we stick to it long enough.”</p>
                    <h2>- Helen Keller</h2>
                  </div>
                </div>
                {/* <div className="image"> <img src={img3}/> </div> */}
              </div>
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <p>“A winner is a dreamer who never gives up.”</p>
                    <h2>- Nelson Mandela</h2>
                  </div>
                </div>
                {/* <div className="image"> <img src={img4}/> </div> */}
              </div>
            </div>
            <div className="switch">
              <ul>
                <li>
                  <div className="on"></div>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
         </div> 
	 </div>          
</section> 
    </div>
    <div className='item2'><Login/></div>
    </div>
    </> )  
}

export default Home;

