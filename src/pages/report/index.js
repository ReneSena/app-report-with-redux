import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputSearch } from '../../components/Forms/InputSearch';
import { Layout } from '../../components/Layout';
import api from '../../data/data_full.json';
import { loaderReport } from '../../store/modules/report/actions';
import { TableVirtualized } from './TableVirtualized';

import './style.css';

export function ReportPage() {
	const dispatch = useDispatch();
	const { list } = useSelector(state => state.report);
	const [search, setSearch] = React.useState('');

	React.useEffect(() => {
		dispatch(loaderReport(api.data));
	}, [dispatch]);

	React.useEffect(() => {
		if (search.length === 0) dispatch(loaderReport(api.data));
	}, [search]);

	function handleSubmit(event) {
		event.preventDefault();

		const dataSearch = list.filter(
			item => item.product === search || item.origin === search
		);

		const isSearchValid =
			search.length === 0
				? dispatch(loaderReport(api.data))
				: dispatch(loaderReport(dataSearch));

		return isSearchValid;
	}

	return (
		<Layout>
			<section className="section__filter">
				<InputSearch
					id="filter"
					name="filter"
					placeholder="Searching for Product or Origin"
					value={search}
					handlerChange={event =>
						setSearch(event.target.value.toUpperCase())
					}
					handleSubmit={event => handleSubmit(event)}
				/>
			</section>

			<section className="section__data">
				<TableVirtualized
					listLength={list.length}
					listElements={list}
				/>
			</section>
		</Layout>
	);
}
