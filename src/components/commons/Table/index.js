import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export function Row({ children }) {
	return <tr className="table__row">{children}</tr>;
}

export function ColumnHead({ children }) {
	return <th className="table__column">{children}</th>;
}

export function Column({ children }) {
	return <td className="table__column">{children}</td>;
}

export function HeadColumn({ children }) {
	return (
		<thead className="table__header">
			<Row>{children}</Row>
		</thead>
	);
}

export function BodyColumn({ children }) {
	return <tbody className="table__body">{children}</tbody>;
}

export function Table({ children }) {
	return (
		<div className="table__scroll">
			<table className="table__container">{children}</table>
		</div>
	);
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
};

ColumnHead.propTypes = {
	children: PropTypes.node.isRequired,
};

Column.propTypes = {
	children: PropTypes.node.isRequired,
};

HeadColumn.propTypes = {
	children: PropTypes.node.isRequired,
};

BodyColumn.propTypes = {
	children: PropTypes.node.isRequired,
};

Table.propTypes = {
	children: PropTypes.node.isRequired,
};

export default memo(Table, BodyColumn, HeadColumn, Column, ColumnHead, Row);
