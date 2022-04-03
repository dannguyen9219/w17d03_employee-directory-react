import { Link } from 'react-router-dom';
// import employeeArr from '../data';

export default function EmployeeListItem(props) {
    const employeeArr = [
          {
            img: "https://i.imgur.com/j20eQUY.png",
            name: "Dan Nguyen",
            jobTitle: "Chief Executive Office",
            callOffice: "555-555-5555",
            callMobile: "555-555-5555",
            sms: "555-555-5555",
            email: "danimal@gmail.com"
          },
          {
            img: "https://i.imgur.com/3cvljIx.png",
            name: "Dyami Luster",
            jobTitle: "Chief Architect",
            callOffice: "555-555-5555",
            callMobile: "555-555-5555",
            sms: "555-555-5555",
            email: "dyami@gmail.com"
          },
          {
            img: "https://i.imgur.com/k04E0oH.png",
            name: "Punit Kapadia",
            jobTitle: "Vice President, Diversity",
            callOffice: "555-555-5555",
            callMobile: "555-555-5555",
            sms: "555-555-5555",
            email: "punit@gmail.com"
          },
          {
            img: "https://i.imgur.com/mX5mope.png",
            name: "Anudeep Dasaraju",
            jobTitle: "Chief Medical Officer",
            callOffice: "555-555-5555",
            callMobile: "555-555-5555",
            sms: "555-555-5555",
            email: "anudeep@gmail.com"
          },
          {
            img: "https://i.imgur.com/NdoWHXQ.png",
            name: "Nadeem Anvari",
            jobTitle: "Director of Nutrition",
            callOffice: "555-555-5555",
            callMobile: "555-555-5555",
            sms: "555-555-5555",
            email: "nadeem@gmail.com"
          },
          {
            img: "https://i.imgur.com/3sTgfxr.png",
            name: "Badi Foroodi",
            jobTitle: "Director of Human Resources",
            callOffice: "555-555-5555",
            callMobile: "555-555-5555",
            sms: "555-555-5555",
            email: "badi@gmail.com"
          }
    ];
    
    return (
        <div className="employee-list-item">
            <div className="image">

            </div>
            <div className="name-title">
                {employeeArr.map((employee) => {
                    const { name, jobTitle } = employee;

                    return (
                        <Link to={`/${name}`}>
                            <h4>{name}</h4>
                            <p>{jobTitle}</p>
                        </Link>
                    )
                })};
            </div>
        </div>
    );
};