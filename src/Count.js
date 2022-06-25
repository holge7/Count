import React, {useState, useEffect} from "react";
import './css/count.css';
import modes from './modes';
import TotalCount from './TotalCount';


function Count(props){
    const [count, setCount] = useState(0);
    const [countTotal, setCountTotal] = useState(0)
    const [mode, setMode] = useState('light');

    useEffect(()=>{
        if (count >= 0){
            setMode('dark');
            props.changeAppMode(modes.light);
        } 
        else {
            setMode('light');
            props.changeAppMode(modes.dark);
        }
        if (countTotal==0) {
            document.title=`Count App`
        }else{
            document.title=`Total clicks ${countTotal}`
        }
        
    })

    function minus(){
        setCount(count - 1);
        setCountTotal(countTotal + 1);
    }

    function plus(){
        setCount(count + 1);
        setCountTotal(countTotal + 1);
    }

    function restart(){
        setCount(0);
        setCountTotal(0);
    }


    return(
        <div className="wrapper">
            <TotalCount now={count} />

            <div className="count-wrapper">
                <div className={`count_number-wrap ${'count-number-wrap-'+mode}`}>
                    <h1 className={`coutn_number ${'count_number-'+mode}`}>{count}</h1>
                </div>
                <div className="count_btn-wrap">
                    <button className={`btn ${'btn-'+mode}`} onClick={()=>minus()}>-</button>
                    <button className={`btn ${'btn-'+mode}`} onClick={()=>plus()}>+</button>
                </div>
                <div className={`count_text-click ${'count_text-'+mode}`}>
                    <h2>Click!!</h2>
                </div>
            </div>
            <button className={`count_restart ${'count_restart-'+mode}`} onClick={()=>restart()}>Restart</button>
        </div>
    )
}

export default Count;