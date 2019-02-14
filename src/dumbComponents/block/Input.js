import React from 'react';

const Input = ({ input }) => (
    <div className="card col-6">
        <div className="description">
            <p> <b> Sequence: </b> {input.sequence} </p>
            <p> <b> Prev. Output Spent? </b> {input.prev_out && input.prev_out.spent ? 'Yes' : 'No'} </p>
            <p> <b> Prev. Transaction Index: </b> {input.prev_out ? input.prev_out.tx_index : 'NA'} </p>
            <p> <b> Prev. Transaction Type: </b> {input.prev_out ? input.prev_out.type : 'NA'} </p>
            <p> <b> Prev. Transaction Address: </b> {input.prev_out ? input.prev_out.addr : 'NA'} </p>
            <p> <b> Prev. Transaction Value: </b> {input.prev_out ? input.prev_out.value : 'NA'} </p>
            <p> <b> Prev. Transaction No: </b> {input.prev_out ? input.prev_out.n : 'NA'} </p>
            <p> <b> Prev. Transaction Script: </b> {input.prev_out ? input.prev_out.script : 'NA'} </p>
        </div>
    </div>
);

export default Input;