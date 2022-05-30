import React, { useEffect, useRef, useState } from "react"
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space, Button, Table } from "antd";
import {useDispatch, useSelector} from "react-redux"
import {fetchList, selectList} from "./slice"
import Highlighter from "react-highlight-words";
import Detail from "../Detail/index"
import {set} from "../Detail/slice"

const List = () => {
    const list = useSelector(selectList)
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef(null);

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])
    
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText("");
	};

	const getColumnSearchProps = (dataIndex) => ({
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
						handleSearch(selectedKeys, confirm, dataIndex)
					}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() =>
							handleSearch(selectedKeys, confirm, dataIndex)
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
							setSearchText(selectedKeys[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{ color: filtered ? "#1890ff" : undefined }}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes(value.toLowerCase()),
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
                <a onClick={e => {
                    e.preventDefault()
                    dispatch(
                    set({
                        username: list.list.find(user => user.name === text).username,
                        name: text,
                        email: list.list.find(user => user.name === text).email,
                    })
                    )
                }}>{text}</a>
			),
	});

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			width: "30%",
			...getColumnSearchProps("name"),
			sorter: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
			sortDirections: ["ascend", "descend"],
		},
	];

	return (
        <div style={{display: "flex"}}>
		<Table
			dataSource={list.list}
			columns={columns}
            //onRow={(record, rowIndex) => {
                //return {
                  //onClick: event => {console.log(event.target)}, // click row
                //};
              //}}
			title={() => "First"}
		/>
        {
            "dfa" !== "" ? <Detail /> : null
        }
        </div>
	);
}

export default List;
