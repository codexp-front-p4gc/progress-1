import React from 'react';
import './OrderTotal.css';

export default (props) => (
    <table className="order-total">
    <tr className="order-total__row">
      <td className="order-total__row--title" colspan="3">{props.subtotal}</td> 
      <td className="order-total__row--value">{props.subvalue}</td>
    </tr>
    <tr className="order-total__row">
      <td className="order-total__row--title" colspan="3">{props.tax}</td>
      <td className="order-total__row--value" >{props.taxvalue}</td>
    </tr>
    <tr className="order-total__row">
      <td className="order-total__row--title total" colspan="3">{props.total}</td>
      <td className="order-total__row--value total" >{props.totalvalue}</td>
    </tr>
  </table>
  
  );