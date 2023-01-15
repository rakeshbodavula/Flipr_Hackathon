import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Navbar from './Navbar';

class Stock1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }

    }

    componentDidMount() {
        const pointToThis = this;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        const endpoint = "http://localhost:9999/companies/RELIANCE"

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                for (var key in data['companies']) {
                    stockChartXValuesFunction.push(data['companies'][key]['Date']);
                    stockChartYValuesFunction.push(data['companies'][key]['Open']);
                }
                // console.log(stockChartXValuesFunction);
                pointToThis.setState({
                    stockChartXValues: stockChartXValuesFunction,
                    stockChartYValues: stockChartYValuesFunction
                });
            })
    }

    render() {
        return (
            <>
                <Navbar />
                <div>
                    {console.log(this.state.data)}
                    <h1>Stock market</h1>
                    <Plot
                        data={[
                            {
                                x: this.state.stockChartXValues,
                                y: this.state.stockChartYValues,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: { color: 'red' },
                            },
                            { type: 'bar', x: this.stockChartXValues, y: this.stockChartYValues },
                        ]}
                        layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
                    />
                </div>
            </>
        )
    }
}

export default Stock1;
