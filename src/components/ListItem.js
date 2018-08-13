import React from 'react';

const ListItem = (props) => {
    return(
        <li>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
        </li>
    )
}

export default ListItem
