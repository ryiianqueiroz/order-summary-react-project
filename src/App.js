import './App.css';
import Illustration from './images/illustration-hero.svg'
import IconMusic from './images/icon-music.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={Illustration} alt="#" id="illustration"/>
        <div className="textContent"> 
          <h2>Order Summary</h2>
          <p id="textOrder">You can now listen to millions of songs, audiobooks, and podcasts on any 
          device anywhere you like!</p>
          <div className="plans">
            <img src={IconMusic} alt="#" id="iconMusic"/>
            <div className="plansText">
              <div className="annualPlan">
                <h4>Annual Plan</h4>
                <p>$59.99/year</p>
              </div>
              <a href="htpps">Change</a>
            </div>
          </div>
          <a href="https" id="proceed">Proceed to Payment</a>
          <a href="https" id="cancel">Cancel Order</a>
        </div>
      </div>
    </div>
  );
}

export default App;
