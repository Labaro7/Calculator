import Display from './Display'

export default function Button(props) {
    function handleClick(){
        if(props.value !== "x"){
            props.callBack(props.value);
        }
        else{
            props.callBack("*");
        }    
    }

    return(
        <div className="item" onClick={handleClick}>{props.value}</div>
    )
}