import React, { Component } from 'react';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY = 'HGJWFG4N8AQ66ICD';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=compact&apikey=${API_KEY}`;

        fetch(API_Call)
            .then((response) => {
                return response.json();
            })
            .then(
                function (data) {
                    console.log(data);
                }
            )
    }

    render() {
        return (
            <>

            </>
        )
    }
}

export default Stock;
