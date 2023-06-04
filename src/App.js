import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/test" element={<h1>Test</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
