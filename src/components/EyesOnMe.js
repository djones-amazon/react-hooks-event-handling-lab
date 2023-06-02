import react from "react";

function EyesOnMe() {
    
    function handleBtnFocus() {
        console.log('Good!');
    }

    function handleBtnBlur() {
        console.log('Hey! Eyes on me!');
    }
    
    
    return(
        <div>
            <button onFocus={handleBtnFocus} onBlur={handleBtnBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe