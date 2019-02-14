import React from 'react';

const Output = ({output}) => (
    <div className="card col-4">
        <div className="description">
            <p> <b> Spent? </b> {output.spent ? 'Yes' : 'No'} </p>
            <p> <b> Index: </b> {output.tx_index} </p>
            <p> <b> Type: </b> {output.type} </p>
            <p> <b> Address: </b> {output.addr} </p>
            <p> <b> Value: </b> {output.value} </p>
            <p> <b> No: </b> {output.n} </p>
            <p> <b> Script: </b> {output.script} </p>
        </div>
    </div>
);

export default Output;

// prettier