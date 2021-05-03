import React from 'react';

import './styles.css';

export function Table() {
	return (
		<table className="table__container">
			<thead className="table__header">
				<tr className="table__row">
					<th className="table__column">Products</th>
					<th className="table__column">Quantity</th>
					<th className="table__column">Price</th>
					<th className="table__column">Type</th>
					<th className="table__column">Industry</th>
					<th className="table__column">Origin</th>
				</tr>
			</thead>
			<tbody className="table__body">
				<tr className="table__row">
					<td className="table__column">RXW</td>
					<td className="table__column">100</td>
					<td className="table__column">R$ 5.40</td>
					<td className="table__column">M</td>
					<td className="table__column">Aerospace</td>
					<td className="table__column">LA</td>
				</tr>
			</tbody>
		</table>
	);
}
