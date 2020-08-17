import React from 'react';

function Column(props) {
    return (
        <div className="col-lg-8">{props.children}</div>
    )
}

export default Column;