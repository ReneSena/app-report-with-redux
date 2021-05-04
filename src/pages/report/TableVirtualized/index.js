import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column, AutoSizer } from 'react-virtualized';
import './styles.css';

export function TableVirtualized({ listLength, listElements }) {
	return (
		<AutoSizer>
			{({ width, height }) => (
				<Table
					width={width}
					height={height}
					headerHeight={60}
					rowHeight={60}
					rowCount={listLength}
					rowGetter={({ index }) => listElements[index]}>
					<Column width={width} label="Product" dataKey="product" />
					<Column width={width} label="Quantity" dataKey="quantity" />
					<Column width={width} label="Price" dataKey="price" />
					<Column width={width} label="Type" dataKey="type" />
					<Column width={width} label="Industry" dataKey="industry" />
					<Column width={width} label="Origin" dataKey="origin" />
				</Table>
			)}
		</AutoSizer>
	);
}

TableVirtualized.propTypes = {
	listLength: PropTypes.number.isRequired,
	listElements: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.func,
	]).isRequired,
};
