import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
// import employeeArr from '../data';

export default function EmployeeListItem({ img, name, jobTitle, callOffice, callMobile, sms, email, getInfo}) {
    const employee = { img, name, jobTitle, callOffice, callMobile, sms, email }

    return (
      <>
        <Link onClick={() => { getInfo(employee) }} to={`/:${name}`}>
          <div className="employee-card">
            <div className="employee-photo">
              <img src={img} className="image" alt={name} />
            </div>
            <div className="employeeInfo">
              <span className="employeeName">{name}</span>
              <span className="employeeTitle">{jobTitle}</span>
            </div>
          </div>
        </Link>
      </>
    );
};