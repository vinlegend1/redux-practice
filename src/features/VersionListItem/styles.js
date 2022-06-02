import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled.button`
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;

	color: #fff;
	padding: 12px 28px;
	border-radius: 4px;

	${(props) => {
		if (props.color === "red") {
			return `
                background-color: #EC6E56;
            `;
		} else {
			return `
                background-color: #06A89D;
            `;
		}
	}}
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || "row"};
	justify-content: ${(props) => props.justifyContent || "start"};
	align-items: ${(props) => props.alignItems || "start"};
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.gridTemplateColumns};
	justify-content: ${(props) => props.justifyContent || "start"};
	align-items: ${(props) => props.alignItems || "start"};

	@media only screen and (max-width: 790px) {
		grid-template-columns: 1fr;

		p,
		h2 {
			text-align: center;
		}
	}
`;

export const Container = styled.div`
	width: 780px;
	padding: 8px;
	border: 1px solid gray;
	border-radius: 4px;
	background-color: white;

	@media only screen and (max-width: 790px) {
		width: auto;
	}
`;
