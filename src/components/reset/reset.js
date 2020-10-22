import React from 'react';

const Reset = () =>{
    const resetMemory =() =>{
        localStorage.clear();
        window.location.reload();
    }

    return(
        <><button onClick={resetMemory} className="reset"><img src="https://flortaboada.com/wp-content/uploads/2000px-View-refresh_Gion_simple.svg_-1200x1171.png"></img></button>
        <span className="reset-name">Reset</span>
        </>
    )
}
export default Reset;