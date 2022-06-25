import React from "react";
import './css/total.css';

function TotalCount(props){

    function getTransform(){
        if (props.now < -60) {
            return {transform:`rotate(-60deg)`}
        }else if(props.now > 60){
            return {transform:`rotate(60deg)`}
        }else{
            return {transform:`rotate(${props.now}deg)`}
        }
    }

    return (
        <div className={`total_wrapper`}>
            <div className="total_circle-wrapper">
                <div className={`total_circle`}>
                    <div className="total_incon total_icon-demon">😈</div>
                    <div className="total_incon total_icon-angel">😇</div>
                </div>
                <div style={getTransform()}  className="meter_wrapper">
                    <div className="meter_needle"></div>
                    <div className="meter_circle"></div>
                </div>
            </div>
        </div>
    )
}

export default TotalCount;