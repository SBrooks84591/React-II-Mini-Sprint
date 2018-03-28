import React from 'react';
import people from './people.js';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div className="People-Wrapper">
      {props.people.map((person => {
        return (
            <div>
              <h4>{person.first_name}</h4>
              <h4>{person.last_name}</h4>
              <div>{person.email}</div>
            </div>
          )
      }))}
    </div>
  )
};




// Pass your `People` data down to PeopleList and render out the People List `<PeopleList people={this.state.People} />`.
