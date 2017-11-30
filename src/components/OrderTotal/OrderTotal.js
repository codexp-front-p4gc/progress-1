import { React } from 'react';
import './order-total.css';

export default (props) => (
    <div className="order-total"> 
        <div className="order-total__name">
            <ul>
                <li>{props.subtotal}</li>
                <li>{props.tax}</li>
                <li>{props.total}</li>
            </ul>
        </div>
        <div className="order-total__valor">
            <ul>
                <li>{props.subtotalValor}</li>
                <li>{props.taxValor}</li>
                <li>{props.totalValor}</li>
            </ul>
        </div>
    </div>
);