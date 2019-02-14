import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import { Link } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

export default class LatestBlock extends Component {

    state = {
        latestBlock: Object,
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const res = await axios.get('https://blockchain.info/latestblock?cors=true');
        this.setState({ latestBlock: res.data, loading: false });
    }

    render() {
        const { latestBlock, loading } = this.state;

        return (
            <React.Fragment>
                
                <nav class="" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="active breadcrumb-item" aria-current="page">Latest Block</li>
                    </ol>
                </nav>
                
                {loading ? null :
                    <div className="card">
                        <div className="description">
                            <p> <b> Hash: </b> {latestBlock.hash} </p>
                            <p> <b> Time: </b> <Timestamp time={latestBlock.time} /> </p>
                            <p> <b> Block Index: </b> {latestBlock.block_index} </p>
                            <p> <b> Height: </b> {latestBlock.height} </p>
                            <p> <b> No. of Indexes: </b> {latestBlock.txIndexes ? latestBlock.txIndexes.length : 0} </p>
                            <p className="read-more">
                                <Link to={`/block/${latestBlock.hash}`}> Read More </Link>
                            </p>
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