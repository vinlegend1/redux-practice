interface IColumns {
	dataIndex: string;
	key: string;
	title: string;
}

export interface IDataSource {
	key: string;
	name: string;
	age: number;
	address: string;
	children?: IDataSource[];
}

export interface IColumnData {
	columns: IColumns[];
	dataSource: IDataSource[];
}

export type DataIndex = keyof IDataSource;
