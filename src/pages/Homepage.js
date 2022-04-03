import EmployeeList from '../components/EmployeeList';
import EmployeeListItem from '../components/EmployeeListItem';
import Header from '../components/Header';
import Image from '../components/Image';
import SearchBar from '../components/SearchBar';



export default function Homepage(props) {
    return (
        <div>
            <Header />
            <SearchBar />
            <EmployeeListItem />
        </div>
    );
};
