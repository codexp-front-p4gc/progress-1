import React from "react";
import "./order-details.css";


export default (props) => (
    <table className="order-details">
        <thead className="order-details-head">
            <tr>
                <th className="order-details-head__title--left">Description</th>
                <th className="order-details-head__title--left">Qty</th>
                <th className="order-details-head__title--right">Price</th>
                <th className="order-details-head__title--right">Amount</th>
            </tr>
        </thead>
        <tbody className="order-details-body">
            <tr>
                <td className="order-details-body__line--left">{props.description1}</td>
                <td className="order-details-body__line--left">{props.qty1}</td>
                <td className="order-details-body__line--right">${props.price1}</td>
                <td className="order-details-body__line--right">${props.amount1}</td>
            </tr>
            <tr>
                <td className="order-details-body__line--left">{props.description2}</td>
                <td className="order-details-body__line--left">{props.qty2}</td>
                <td className="order-details-body__line--right">${props.price2}</td>
                <td className="order-details-body__line--right">${props.amount2}</td>
            </tr>
            <tr>
                <td className="order-details-body__line--left">{props.description3}</td>
                <td className="order-details-body__line--left">{props.qty3}</td>
                <td className="order-details-body__line--right">${props.price3}</td>
                <td className="order-details-body__line--right">${props.amount3}</td>
            </tr>
            <tr>
                <td className="order-details-body__line--left">{props.description4}</td>
                <td className="order-details-body__line--left">{props.qty4}</td>
                <td className="order-details-body__line--right">${props.price4}</td>
                <td className="order-details-body__line--right">{props.amount4}</td>
            </tr>
        </tbody>
    </table>
);