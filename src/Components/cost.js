import React from 'react';
import '../css/cost.css';

export default function Cost(props) {
    return (<div style={{margin: 'auto'}}>
        <div class="cost-container fun-bold">
                <span style={{ fontSize: '3rem', verticalAlign: 'middle' }}>$ </span>
                <span class="cost-value" style={{ verticalAlign: 'middle' }}>{ props.value }</span>
        </div>
    </div>)
}