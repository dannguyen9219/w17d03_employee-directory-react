import { Route, Routes } from 'react-router-dom';
// import EmployeeList from './components/EmployeeList';
// import EmployeeListItem from './components/EmployeeListItem';
// import Header from './components/Header';
import Homepage from './pages/Homepage';
// import SearchBar from './components/SearchBar';


export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </div>
    );
};