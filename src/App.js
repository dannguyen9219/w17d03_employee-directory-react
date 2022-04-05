import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import EmployeePage from './components/EmployeePage';
import EmployeeShow from './pages/EmployeeList';


// import Homepage from './pages/Homepage';
// import EmployeePage from './pages/EmployeePage';


export default function App() {
    const [employeeInfo, setEmployeeInfo] = useState({})
    const getEmployee = (data) => {
        setEmployeeInfo(data)
    };
    
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<EmployeeShow getInfo = {getEmployee}/>} />
                <Route path="/:id" element={<EmployeePage info = {employeeInfo}/>} />
            </Routes>
        </div>
    );
};