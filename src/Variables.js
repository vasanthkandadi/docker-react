import { useState } from "react";

function Variables({onSubmitNumber}){

    const [valueA,setValueA] = useState('');
    const [valueB,setValueB] = useState('');

    const handleChangeA = (event) =>{
        setValueA(parseInt(event.target.value));
    }

    const handleChangeB = (event) =>{
        setValueB(parseInt(event.target.value));
    }

    const onSubmitValues = (e) =>{
        e.preventDefault();
        console.log(valueA + ',' + valueB); 
        onSubmitNumber(valueA,valueB);
    }

    return(
        <div>
            
            <div>
                <label> a :</label>
                <input type="number" value={valueA} onChange={handleChangeA}></input>
            </div>
            <div>
                <label> b :</label>
                <input type="number" value={valueB} onChange={handleChangeB}></input>
            </div>
            <button onClick={onSubmitValues}>Send!</button>
            
        </div>

    );
}

export default Variables;