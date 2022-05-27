import { SearchOutlined } from "@ant-design/icons";
import { InputRef, Input, Space, Button, Table } from "antd";
import { ColumnType, ColumnsType } from "antd/lib/table";
import { FilterConfirmProps } from "antd/lib/table/interface";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux";
import { DataIndex, IDataSource } from "../actions";
import { RootState } from "../app/store";
import { setData } from "../feature";
import { fetchColumnData } from "../utils/fetch/ColumnData";

const Second = () => {
	const data = useSelector((state: RootState) => state.data);
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef<InputRef>(null);

	const fetchAsync = async () => {
		dispatch(setData(await fetchColumnData()));
	};
	useEffect(() => {
		fetchAsync();
	}, []);

	const handleSearch = (
		selectedKeys: string[],
		confirm: (param?: FilterConfirmProps) => void,
		dataIndex: DataIndex
	) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters: () => void) => {
		clearFilters();
		setSearchText("");
	};

	const getColumnSearchProps = (
		dataIndex: DataIndex
	): ColumnType<IDataSource> => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() =>
						handleSearch(
							selectedKeys as string[],
							confirm,
							dataIndex
						)
					}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() =>
							handleSearch(
								selectedKeys as string[],
								confirm,
								dataIndex
							)
						}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() =>
							clearFilters && handleReset(clearFilters)
						}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({ closeDropdown: false });
							setSearchText((selectedKeys as string[])[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered: boolean) => (
			<SearchOutlined
				style={{ color: filtered ? "#1890ff" : undefined }}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex]!.toString()
				.toLowerCase()
				.includes((value as string).toLowerCase()),
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});

	const columns: ColumnsType<IDataSource> = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			...getColumnSearchProps("name"),
			sorter: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
			sortDirections: ["ascend", "descend"],
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
			...getColumnSearchProps("age"),
			sorter: (a, b) => (a.age < b.age ? -1 : a.age > b.age ? 1 : 0),
			sortDirections: ["ascend", "descend"],
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
			...getColumnSearchProps("address"),
			sorter: (a, b) =>
				a.address < b.address ? -1 : a.address > b.address ? 1 : 0,
			sortDirections: ["ascend", "descend"],
		},
	];

	return (
		<Table
			dataSource={data.dataSource}
			columns={columns}
			title={() => "Second"}
		/>
	);
};

export default Second;
