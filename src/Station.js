import React from 'react';
const Station = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
        <h5 className="card-title">{props.course.name}</h5>
       
        </div>
    </div>
);
export default Station;