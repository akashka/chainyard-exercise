import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

const Transactions = ({ transaction, columns, history }) => (
    <ReactTable
        defaultPageSize={10}
        data={transaction}
        columns={columns}
        getTdProps={(state, rowInfo, column, instance) => {
            console.log(state);
            console.log(column);
            console.log(instance);
            return {
                onClick: (e, handleOriginal) => {
                    if(column.Header === '') history.push(`/transaction/${rowInfo.row.hash}`);
                }
            };
        }}
    />
);

export default Transactions;