import './floppy.css';

function Floppy({floppyName,labelInfo,xPercent,optionClick}) {

    

    const handleClick = (e) => {

        optionClick(labelInfo);

        const terminalRef = document.getElementById('floppyClick');
        
        
        terminalRef.scrollIntoView({behavior: "smooth"});;
    }

    return (

        <button className={`floppy ${floppyName}`} onClick={handleClick}>
            <svg className={`floppy ${floppyName}`} viewBox="0 0 508 508">
                <path className="mainFill" fill="#2884A9" d="M425.6,6H390v192c0,9.6-5.6,20-15.6,20H70c-10,0-20-10-20-20V6H22.4C14.4,6,6,10.4,6,18v467.6
                    c0,7.6,8.8,16.4,16.4,16.4H50V270v-2c0-1.2,0.8-2,2-2h404c1.2,0,2,0.8,2,2v234h32c7.6,0,12-8.4,12-16.4V82.8L425.6,6z"/>
                <rect className="bottomFill" x="54" y="266" fill="#73BADD" width="400" height="236"/>
                <path className="topFill" fill="#E8E3E3" d="M54,6v192c0,7.6,8.4,16,16,16h304.4c7.6,0,11.6-8.4,11.6-16V6H54z"/>
                <rect className="mainFill" x="282" y="38" fill="#2884A9" width="72" height="144"/>
                <path fill="#CC9999" d="M278,184v2h2C278.8,186,278,185.2,278,184z"/>
                <path className="mainOutline" d="M490,508H22.4C11.2,508,0,496.8,0,485.6V18C0,6.8,11.6,0,22.4,0h404c1.2,0,2,0.4,2.8,1.2l77.6,78c0.8,0.8,1.2,1.6,1.2,2.8
                    v404C508,496.8,501.2,508,490,508z M22.4,8C15.6,8,8,12,8,18v467.6C8,492,16,500,22.4,500H490c6,0,10-7.6,10-14.4v-402L424.8,8H22.4
                    z"/>
                <path className="bottomOutline" d="M456,506c-2.4,0-4-1.6-4-4V268h-18c-2.4,0-4-1.6-4-4s1.6-4,4-4h22c2.4,0,4,1.6,4,4v238C460,504.4,458.4,506,456,506z"/>
                <path className="bottomOutline" d="M52,506c-2.4,0-4-1.6-4-4V264c0-2.4,1.6-4,4-4h350c2.4,0,4,1.6,4,4s-1.6,4-4,4H56v234C56,504.4,54.4,506,52,506z"/>
                <path className="topOutline" d="M374.4,220H70c-10.8,0-22-11.2-22-22V6c0-2.4,1.6-4,4-4s4,1.6,4,4v192c0,6.8,7.6,14,14,14h304.4c6,0,9.6-7.2,9.6-14V6
                    c0-2.4,1.6-4,4-4s4,1.6,4,4v192C392,208.4,386,220,374.4,220z"/>
                <path className="topOutline" d="M158.4,220c-11.2,0-22.4-11.2-22.4-22V6c0-2.4,1.6-4,4-4s4,1.6,4,4v192c0,6.4,8,14,14.4,14c2.4,0,4,1.6,4,4
                    S160.8,220,158.4,220z"/>
                <path className="topOutline" d="M356,188h-76c-2.4,0-4-1.6-4-4V36c0-2.4,1.6-4,4-4h38c2.4,0,4,1.6,4,4s-1.6,4-4,4h-34v140h68V40h-2c-2.4,0-4-1.6-4-4
                    s1.6-4,4-4h6c2.4,0,4,1.6,4,4v148C360,186.4,358.4,188,356,188z"/>
                <text className='label' x={xPercent} y="78%">{labelInfo}</text>
            </svg>
        </button>

    );
}

export default Floppy;