
import dft from '../assets/dft-1.png';
import donors from '../assets/donors.png';
import funding from '../assets/funding.png';
import gross from '../assets/gross.png';
import hourglass from '../assets/hourglass.png';
import profit from '../assets/profit.png';
import totalamount from '../assets/total-amount.png';


function Speciality() {
  return (
    <div className="App">
  
      <div className="spec-container">
        
        <div className="spec-data-container">
          <div className="spec-card">
            <img src={donors} alt="" width={60}/>
            <div className="data-container">
              Donors can raise fund before a calamity
            </div>
          </div>
          <div className="spec-card">
            <img src={funding} alt="" width={60}/>
            <div className="data-container">
              Funds cannot be stolen
            </div>
          </div>
          <div className="spec-card">
            <img src={gross} alt="" width={60}/>
            <div className="data-container">
              Cannot be withdrawn without any need
            </div>
          </div>
          <div className="spec-card">
            <img src={hourglass} alt="" width={60}/>
            <div className="data-container">
              Total amount collected is always transparent
            </div>
          </div>
          <div className="spec-card">
            <img src={profit} alt="" width={60}/>
            <div className="data-container">
              Amount withdrawn is fully transparent
            </div>
          </div>
          <div className="spec-card">
            <img src={hourglass} alt="" width={60}/>
            <div className="data-container">
              Total time can be just a couple of minutes
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Speciality;
