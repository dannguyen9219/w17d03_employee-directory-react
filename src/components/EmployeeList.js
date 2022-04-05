// import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
    return (
        <div className="employeeList">{props.children}</div>
    );
};