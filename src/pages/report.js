/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Table,
	Column,
	Row,
	ColumnHead,
	BodyColumn,
	HeadColumn,
} from '../components/commons/Table';
import { InputSearch } from '../components/Forms/InputSearch';
import { Layout } from '../components/Layout';

import api from '../data/data_full.json';

import { loaderReport, updateReport } from '../store/modules/report/actions';

export function ReportPage() {
	const dispatch = useDispatch();
	const { list, total } = useSelector(state => state.report);
	const [search, setSearch] = React.useState('');

	React.useEffect(() => {
		dispatch(loaderReport(api.data.slice(0, total)));
	}, [dispatch, total]);

	const updateList = React.useCallback(() => {
		const {
			scrollHeight,
			scrollTop,
			clientHeight,
		} = document.documentElement;

		if (clientHeight + scrollTop > scrollHeight - 2000) {
			dispatch(
				loaderReport(
					api.data.slice(list.lenght, dispatch(updateReport()))
				)
			);
		}
	}, [dispatch, list.lenght]);

	React.useMemo(() => {
		window.addEventListener('scroll', () => {
			updateList();
		});

		return () => {
			window.removeEventListener('scroll', updateList);
		};
	}, [updateList]);

	return (
		<Layout>
			{/* <InputSearch
				id="filter"
				name="filter"
				placeholder="Searching for Product or Origin"
				value={search}
				handler={event => setSearch(event.target.value)}
			/> */}
			<Table>
				<HeadColumn>
					<ColumnHead>Product</ColumnHead>
					<ColumnHead>Quantity</ColumnHead>
					<ColumnHead>Price</ColumnHead>
					<ColumnHead>Type</ColumnHead>
					<ColumnHead>Industry</ColumnHead>
					<ColumnHead>Origin</ColumnHead>
				</HeadColumn>
				<BodyColumn>
					{list.map((item, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<Row key={index}>
							<Column>{item.product}</Column>
							<Column>{item.quantity}</Column>
							<Column>{item.price}</Column>
							<Column>{item.type}</Column>
							<Column>{item.industry}</Column>
							<Column>{item.origin}</Column>
						</Row>
					))}
				</BodyColumn>
			</Table>
		</Layout>
	);
}
