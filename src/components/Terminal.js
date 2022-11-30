import './terminal.css'

function Terminal() {
    return (
      <div className="terminal">
        <div className="terminalHeader">
                <h1>Terminal</h1>
                {/* <hr></hr> */}
                <div className="stripeContainer line">
                    <div className="stripe orange"></div>
                    <div className="stripe redOrange"></div>
                    <div className="stripe navy"></div>
                    <div className="stripe darkBlue"></div>
                </div>    
            </div>
      </div>
    );
  }
  
  export default Terminal;