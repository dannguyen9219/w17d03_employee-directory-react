import EmployeeList from '../components/EmployeeList';
import EmployeeListItem from '../components/EmployeeListItem';
import employeeArr from '../data';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function EmployeeShow(props) {
    return (
        <div className="homepage">
            <Header />
            <SearchBar />
            <EmployeeList>
                {employeeArr.map((listItem, idx) => {
                    return <EmployeeListItem getInfo = {props.getInfo}{...listItem} key={idx} />
                })};
            </EmployeeList>
        </div>
    )
};