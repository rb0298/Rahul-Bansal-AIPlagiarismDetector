
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlagiarismCheck from "./pages/PlagiarismCheck";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />}/>
        <Route path="home" element={<Homepage />} />
        <Route path="plagiarismChecker" element={<PlagiarismCheck/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;


