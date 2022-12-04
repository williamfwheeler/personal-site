import './terminal.css'
import Screen from './Screen';
import React,{useState} from 'react';

function Terminal({screenClick,ejectClick}) {

  const [scrollClass,setScrollClass] = useState('beforeScroll');

  const listenScrollEvent = (e) => {
    if (window.scrollY > 800) {
      setScrollClass('afterScroll');
    } else {
        setScrollClass('beforeScroll');
    }
  }

  window.addEventListener('scroll',listenScrollEvent)


  return (
    <div className={`terminal ${scrollClass}`}>
      <div className="terminalHeader">
        <h1>Terminal</h1>
        <hr></hr>
        {/* <div className="stripeContainer line">
        <div className="stripe darkBlue"></div>
            <div className="stripe orange"></div>
            <div className="stripe redOrange"></div>
            <div className="stripe navy"></div>
        </div>     */}
      </div>



      <div className='terminalContainer'>
        <div className='terminalScreen'>
          <div className='screenShell'>
            <div className='screen'>
              <Screen screenInput={screenClick}/>
            </div>
          </div>
        </div>
        <div className='terminalHardware'>
          <div className='mug'></div>
          <div className='diskDrive'>
            <div className='driveInset'>
              <div></div>
              <div className="middleDrive">
                <div className={`floppyInsert ${screenClick}`}></div>
              </div>
              <div>
                <button className='ejectButton' onClick={ejectClick}>Eject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  export default Terminal;