import React from "react";
import { Layout, Menu } from "antd";
import BreadCrumb from "./BreadCrumb";
import { useNavigate } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const items2 = [
	{
		key: "home",
		label: "Home",
	},
	{
		key: "list",
		label: "List",
	},
	{
		key: "versionlistitem",
		label: "VersionListItem",
	},
];

const AppLayout = ({ children }) => {
	const navigation = useNavigate();
	return (
		<Layout>
			<Sider>
				<Menu
					mode="inline"
					onClick={(e) => {
						switch (e.key) {
							case "home":
								navigation("/");
								break;
							case "versionlistitem":
								navigation("/vli");
								break;
							case "list":
								navigation("/list");
								break;
							default:
								navigation("/");
						}
					}}
					theme="dark"
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					style={{
						height: "100%",
						borderRight: 0,
					}}
					items={items2}
				/>
			</Sider>
			<Layout>
				<Header style={{ backgroundColor: "#fafafa" }}>Header</Header>
				<Content style={{ minHeight: "calc(100vh - 120px)" }}>
					<div style={{ padding: 4 }}>
						<BreadCrumb />
						{children}
					</div>
				</Content>
				<Footer
					style={{
						textAlign: "center",
						backgroundColor: "#fafafa",
					}}
				>
					Rick Astley &copy; 2022
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
