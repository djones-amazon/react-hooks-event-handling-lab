// Code Keypad Component Here

function Keypad (){
  /*  const buttonValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '#'];
    const keyPadButtons = buttonValues.map((keyValue) => {
        const idSetter = 'btn' + keyValue;
        //debugger; 
        return(
            <button key={idSetter} id={idSetter}>{keyValue}</button>
        )
    });

    //debugger;
    return (
        <div id='keyPad'>
            {keyPadButtons}
        </div>
    )
} */
    const handleInputChange = (() => {
        console.log('Entering password...');
    });

    return(
        <input type="password" onChange={handleInputChange} />
    );


}

export default Keypad