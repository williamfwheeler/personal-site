import './terminal.css'

function Terminal() {
    return (
      <div className="terminal">
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
              <div className='screen'></div>
            </div>
          </div>
          <div className='terminalHardware'>
            <div className='mug'></div>
            <div className='diskDrive'>
              <div className='driveInset'>
                <div></div>
                <div className="middleDrive">
                  <div className='floppyInsert'></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Terminal;