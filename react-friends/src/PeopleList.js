import React from 'react';
import people from './people.js';
import './PeopleList.css';



export const PeopleList = (props) => {
    return (
        <div className="People-Wrapper">
        {props.people.map((person => {
            return (
                <div className="peepList">
                <h4 className="firstName">{person.first_name}</h4>
              <h4 className="lastName">{person.last_name}</h4>
              <h4 className="email">{person.email}</h4>
                </div>
            )
        }))}
        </div> //People-Wrapper
    ) //return

};//export





