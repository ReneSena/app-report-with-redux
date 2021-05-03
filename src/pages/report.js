import React from 'react';
import { Table } from '../components/commons/Table';
import { InputSearch } from '../components/Forms/InputSearch';
import { Layout } from '../components/Layout';

export function ReportPage() {
	const [search, setSearch] = React.useState('');

	return (
		<Layout>
			<InputSearch
				id="filter"
				name="filter"
				placeholder="Searching for Product or Origin"
				value={search}
				handler={event => setSearch(event.target.value)}
			/>
			<Table />
		</Layout>
	);
}
