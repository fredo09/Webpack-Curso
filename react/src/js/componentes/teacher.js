import React from 'react'; 

const Teacher = (props) => {
    return(
        <li className="Teacher">
            {props.name}
            {props.escuela}
        </li>
    )
}

export default Teacher;