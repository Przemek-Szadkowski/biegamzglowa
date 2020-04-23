import React from 'react';
import Start from './Start';

class App extends React.Component {

    state = {
        setDate: false,
        outcomeReady: false,
        lastDate: '',
        dates: [],
        rate: 0,
        color: '',
    }

    addLastDate = (date) => {
        this.setState({
            lastDate: date
        })
    }

    updateDates = (dates) => {
        this.setState({
            dates
        })
    }

    updateSetDate = (bool) => {
        this.setState({
            setDate: bool
        })
    }

    updateRate = rate => {
        this.setState({
            rate
        })
    }

    updateOutcome = bool => {
        this.setState({
            outcomeReady: bool
        })
    }

    updateColor = color => {
        this.setState({
            color
        })
    }

    render() {
        return (
            <>
            <h2>biegam za dużo?</h2>
            <Start history={this.props.history} addLastDate={this.addLastDate} lastDate={this.state.lastDate} updateDates={this.updateDates} updateSetDate={this.updateSetDate} isSetDate={this.state.setDate} dates={this.state.dates} updateRate={this.updateRate} isOutcomeReady={this.state.outcomeReady} updateOutcome={this.updateOutcome} rate={this.state.rate} updateColor={this.updateColor} color={this.state.color}/>
            <footer>
                <a href="mailto:przemoszadkowski@o2.pl">&copy;Przemysław Szadkowski</a>
            </footer>
            </>
        )
    }
}

export default App;