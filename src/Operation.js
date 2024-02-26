function Operation({onSubmit}){

    const onSubmitOp = (value)=>{
        console.log(value);
        onSubmit(value);
    }
    return(
        <div>
            <h2>Select your operation</h2>
            <span>
                <button value='add'onClick={()=>onSubmitOp('add')}>Add!</button>
                <button value='minus' onClick={()=>onSubmitOp('minus')}>Subtract!</button>
                <button value='into' onClick={()=>onSubmitOp('into')}>Multiply!</button>
                <button value='by' onClick={()=>onSubmitOp('by')}>Divide!</button>
            </span>
        </div>

    );
}

export default Operation;