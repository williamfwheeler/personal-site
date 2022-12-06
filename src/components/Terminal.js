import './terminal.css'
import Screen from './Screen';
import React,{useState} from 'react';
import Floppy from "./Floppy";
import eject from '../assets/eject.svg'

function Terminal({screenClick,ejectClick,floppyClick}) {

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
              <div className='topDrive'>
                <button className='ejectButton top' onClick={ejectClick}>
                  <img src={eject} alt="eject button" />
                </button>
              </div>
              <div className="middleDrive">
                <div className={`floppyInsert ${screenClick}`}></div>
                <button className='ejectButton middle' onClick={ejectClick}>
                  <img src={eject} alt="eject button" />
                </button>
              </div>
              <div>
              </div>
            </div>
          </div>
          {/* <div className='diskArray'>
            <Floppy floppyName={"floppy1a noHover"} labelInfo={"ABOUT"} xPercent={"24%"} optionClick={floppyClick}/>
            <Floppy floppyName={"floppy2a noHover"} labelInfo={"SKILLS"} xPercent={"24%"} optionClick={floppyClick}/>
            <Floppy floppyName={"floppy3a noHover"} labelInfo={"PROJECTS"} xPercent={"14%"} optionClick={floppyClick}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
  
  export default Terminal;