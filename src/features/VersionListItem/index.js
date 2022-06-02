import { FormOutlined } from "@ant-design/icons";
import React from "react";
import {
	Container,
	FlexContainer,
	GridContainer,
	StyledButton,
} from "./styles";

const VersionListItem = () => {
	return (
		<Container>
			<GridContainer
				gridTemplateColumns="1fr 1fr"
				alignItems="center"
				justifyContent="space-between"
			>
				<FlexContainer
					justifyContent="space-between"
					flexDirection="column"
				>
					<p>
						<b>Version 1.00</b>
					</p>
					<div>
						<h2>AAAA</h2>
						<p
							style={{
								textTransform: "uppercase",
							}}
						>
							Administrative, Centre for Educational Research ->
							Exchange N...
						</p>
					</div>
				</FlexContainer>
				<FlexContainer flexDirection="column" alignItems="end">
					<p>
						<b>Created by:</b> Mark (Admin) Sampson
					</p>
					<FlexContainer
						justifyContent="space-between"
						alignItems="center"
						style={{ width: "90%" }}
					>
						<p style={{ textAlign: "center" }}>29/05/2022</p>
						<p>Published</p>

						<FlexContainer
							flexDirection="column"
							alignItems="stretch"
						>
							<StyledButton style={{ marginBottom: 8 }}>
								Recall
							</StyledButton>
							<StyledButton color="red">Delete</StyledButton>
						</FlexContainer>
					</FlexContainer>
				</FlexContainer>
			</GridContainer>
			<FlexContainer alignItems="center">
				<FormOutlined />
				<div style={{ paddingLeft: 4 }}>
					<b>Notes:</b> BBBB
				</div>
			</FlexContainer>
		</Container>
	);
};

export default VersionListItem;
