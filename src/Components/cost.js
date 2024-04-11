import React from 'react';
import '../css/cost.css';

export default function Cost(props) {
    return (<div className="cost-super-container" style={{marginLeft: 'auto', maxWidth: '50%'}}>
        <div className="cost-container fun-bold">
                <span className="cost-symbol" style={{ fontSize: '3rem', verticalAlign: 'middle' }}>$ </span>
                <span className="cost-value" style={{ verticalAlign: 'middle' }}>{ props.value }</span>
        </div>
    </div>)
}