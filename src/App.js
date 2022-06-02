import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/List";
import Detail from "./routes/Detail";
import VLISample from "./routes/VLISample";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/vli" element={<VLISample />} />
			<Route exact path="/list" element={<List />} />
			<Route exact path="/list/:id" element={<Detail />} />
		</Routes>
	);
}

export default App;
