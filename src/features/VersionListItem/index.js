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
			<FlexContainer justifyContent="space-between">
				<p>
					<b>Version 1.00</b>
				</p>
				<p>
					<b>Created by:</b> Mark (Admin) Sampson
				</p>
			</FlexContainer>
			<GridContainer
				gridTemplateColumns="1fr 1fr 1fr 1fr"
				alignItems="center"
				justifyContent="space-between"
			>
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
				<p style={{ textAlign: "center" }}>29/05/2022</p>
				<p>Published</p>

				<FlexContainer flexDirection="column" alignItems="stretch">
					<StyledButton style={{ marginBottom: 8 }}>
						Recall
					</StyledButton>
					<StyledButton color="red">Delete</StyledButton>
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
