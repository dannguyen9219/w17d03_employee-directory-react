// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import EmployeeHeader from '../components/EmployeeHeader';
// import employeeArr from '../data';

// export default function EmployeePage(props) {

//     const params = useParams()
//     const name = params.name
//     const url = `http://localhost:3000/employeepage/${name}`
//     const [employee, setEmployee] = useState(null)

//     const getEmployee = async (employee) => {
//         try{
//             const response = await fetch(url);
//             const data = await response.json();
//             setEmployee(employeeArr);
//             console.log(employee)
//             console.log(employeeArr[0])
//             console.log(employee.email)
//         }   catch(err) {
//             console.error(err)
//         }
//     };

//     useEffect(() => {
//         getEmployee()
//     }, []);

//     const loaded = () => {
//         return (
//             <div>
//                 <EmployeeHeader />
//                 <h1>{employee.email}</h1>
//             </div>
//         )
//     };

//     const loading = () => {
//         return <h1>Loading...</h1>
//     };

//     return employee && employee.email ? loaded() : loading()
// };