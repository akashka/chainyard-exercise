import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import { Link } from "react-router-dom";
import Transactions from '../dumbComponents/block/Transactions';
import ClipLoader from 'react-spinners/ClipLoader';

export default class ViewBlock extends Component {

    state = {
        block: Object,
        hash: String,
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true, hash: this.props.match.params.block });
        const res = await axios.get(`https://blockchain.info/rawblock/${this.props.match.params.block}?cors=true`);
        this.setState({ block: res.data, loading: false });
    }

    render() {
        const { block, hash, loading } = this.state;

        const columns = [
            { Header: 'Hash', accessor: 'hash' },
            { Header: 'Version', accessor: 'ver' },
            { Header: 'Size', accessor: 'size' },
            { Header: 'Transaction Index', accessor: 'tx_index' },
            { Header: '', accessor: 'hash', Cell: props => <button className="view-btn">VIEW</button> },
        ];

        return (
            <React.Fragment>

                <nav class="" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to="/"> Latest Block </Link>
                        </li>
                        <li className="active breadcrumb-item" aria-current="page">View Block</li>
                    </ol>
                </nav>

                {loading ? null :
                    <div>
                        <div className="card">
                            <div className="description">
                                <p> <b> Version: </b> {block.ver} </p>
                                <p> <b> Mrkl. Root: </b> {block.mrkl_root} </p>
                                <p> <b> Time: </b> <Timestamp time={block.time} /> </p>
                                <p> <b> Bits: </b> {block.bits} </p>
                                <p> <b> Fee: </b> {block.fee} </p>
                                <p> <b> Nonce: </b> {block.nonce} </p>
                                <p> <b> N. Tx.: </b> {block.n_tx} </p>
                                <p> <b> Size: </b> {block.size} </p>
                                <p> <b> Block Index: </b> {block.block_index} </p>
                                <p> <b> Main Chain: </b> {block.main_chain} </p>
                                <p> <b> Height: </b> {block.height} </p>
                                <p> <b> Received Time: </b> <Timestamp time={block.received_time} /> </p>
                                <p> <b> Relayed By: </b> {block.relayed_by} </p>
                                <p> <b> No. of Indexes: </b> {block.tx ? block.tx.length : 0} </p>
                                <div className="col-6">
                                    <p className="read-more-left">
                                        <Link to={`/block/${block.prev_block}`}> View Previous Block </Link>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="read-more">
                                        {block.next_block && block.next_block.length > 0 ?
                                            <Link to={`/block/${block.next_block ? block.next_block[0] : '#'}`}> View Next Block </Link>
                                            : ''}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <nav class="" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/"> Latest Block </Link> </li>
                                <li class="breadcrumb-item"> <Link to={`/block/${hash}`}> View Block </Link> </li>
                                <li class="active breadcrumb-item" aria-current="page">Transactions</li>
                            </ol>
                        </nav>

                        <div className="row">
                            {block.tx ?
                                <Transactions
                                    transaction={block.tx}
                                    columns={columns}
                                    history={this.props.history}
                                />
                                : ''}
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