import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import Input from "../dumbComponents/block/Input";
import Output from "../dumbComponents/block/Output";
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from "react-router-dom";

export default class ViewTransaction extends Component {

    state = {
        txn: Object,
        hash: String,
        loading: false
    }

    async componentDidMount() {
        this.setState({ hash: this.props.match.params.txn, loading: true });
        const res = await axios.get(`https://blockchain.info/rawtx/${this.props.match.params.txn}?cors=true`);
        this.setState({ txn: res.data, loading: false });
    }

    render() {
        const { txn, hash, loading } = this.state;

        return (
            <React.Fragment>

                <nav class="" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"> <Link to="/"> Latest Block </Link> </li>
                        <li class="breadcrumb-item"> <a onClick={this.props.history.goBack}> View Block </a> </li>
                        <li class="active breadcrumb-item" aria-current="page">View Tansaction</li>
                    </ol>
                </nav>

                {loading ? null :
                    <div>
                        <div className="card">
                            <div className="description">
                                <p> <b> Version: </b> {txn.ver} </p>
                                <p> <b> Weight: </b> {txn.weight} </p>
                                <p> <b> Block Height: </b> {txn.block_height} </p>
                                <p> <b> Relayed By: </b> {txn.relayed_by} </p>
                                <p> <b> Lock Time: </b> {txn.lock_time} </p>
                                <p> <b> Size: </b> {txn.size} </p>
                                <p> <b> Double Spend: </b> ${txn.double_spend ? 'Yes' : 'No'} </p>
                                <p> <b> Block Index: </b> {txn.block_index} </p>
                                <p> <b> Time: </b> <Timestamp time={txn.time} /> </p>
                                <p> <b> Transaction Index: </b> {txn.tx_index} </p>
                                <p> <b> Input Size: </b> {txn.vin_sz} </p>
                                <p> <b> Output Size: </b> {txn.vout_sz} </p>
                            </div>
                        </div>

                        <nav class="" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/"> Latest Block </Link> </li>
                                <li class="breadcrumb-item"> <a onClick={this.props.history.goBack}> View Block </a> </li>
                                <li class="breadcrumb-item"> <Link to={`/transaction/${hash}`}> View Transaction </Link> </li>
                                <li class="active breadcrumb-item" aria-current="page">Output</li>
                            </ol>
                        </nav>

                        <div class="row">
                            {txn.out ? txn.out.map(output => (
                                <Output key={output.n} output={output} />
                            )) : ''}
                        </div>

                        <nav class="" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/"> Latest Block </Link> </li>
                                <li class="breadcrumb-item"> <a onClick={this.props.history.goBack}> View Block </a> </li>
                                <li class="breadcrumb-item"> <Link to={`/transaction/${hash}`}> View Transaction </Link> </li>
                                <li class="active breadcrumb-item" aria-current="page">Input</li>
                            </ol>
                        </nav>

                        <div class="row">
                            {txn.inputs ? txn.inputs.map(input => (
                                <Input key={input.n} input={input} />
                            )) : ''}
                        </div>

                    </div>
                }

                <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={loading}
                />

            </React.Fragment>
        )
    }

}
