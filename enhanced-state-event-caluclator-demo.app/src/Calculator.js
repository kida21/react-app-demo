function Calculator({onFirstNumberChanged,onSecondNumberChanged,onOperationChanged}){
    return(
        <div>
            <input type="number" onChange={onFirstNumberChanged}/>
            <select onChange={onOperationChanged}>
                <option value="add">+</option>
                <option value="sub">-</option>
                <option value="mul">*</option>
                <option value="div">/</option>
            </select>
            <input type="number" onChange={onSecondNumberChanged}/>
        </div>
    )
}

export default Calculator;