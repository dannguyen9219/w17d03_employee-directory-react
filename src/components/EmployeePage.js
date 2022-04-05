import Header from './Header';
import { Link } from 'react-router-dom';

export default function EmployeePage(props) {
    return (
        <>
            <div>
                <Header />
                <div>
                    <div>
                        <div><img src={props.info.img} alt={props.info.name} /></div>
                        <div>
                            <h3>NAME: {props.info.name}</h3>
                            <h3>TITLE: {props.info.jobTitle}</h3>
                            <h3>OFFICE NUMBER: {props.info.callOffice}</h3>
                            <h3>MOBILE NUMBER: {props.info.callMobile}</h3>
                            <h3>EMAIL: {props.info.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};