import React from 'react';
import PropTypes from 'prop-types';
import DayInputs from './DayInputs';
import Outcome from './Outcome';
import Modal from './Modal';

const text2 = 
`
Wybierz dzień w którym ostatni raz biegałeś, a następnie kliknij przycisk zaczynamy!
`;

class Start extends React.Component {

    startButton = React.createRef();

    static propTypes = {
        lastDate: PropTypes.string,
        updateSetDate: PropTypes.func,
        updateDates: PropTypes.func,
        addLastDate: PropTypes.func,
        isSetDate: PropTypes.bool,
        dates: PropTypes.array,
        updateRate: PropTypes.func,
        updateOutcome: PropTypes.func,
        rate: PropTypes.number,
        updateColor: PropTypes.func,
        isOutcomeReady: PropTypes.bool,
        color: PropTypes.string,
        isModal: PropTypes.bool,
        updateIsModal: PropTypes.func
    }

    handleClick = () => {
        if(!this.props.lastDate) {
            alert("Wprowadź datę Twojego ostatniego treningu!");
            return
        }
        this.props.updateSetDate(true);
        const dates = [];
        // set date of first training day
        const thisDate = new Date(this.props.lastDate);
        dates[0] = new Date(thisDate.setDate(thisDate.getDate()));
        // set rest of days
        for(let i = 1; i < 28; i++) {
            dates[i] = new Date(thisDate.setDate(thisDate.getDate() - 1))
        }
        const days = dates.map(date => (
            [`${date.getDate()}/${date.getMonth() + 1}`, '']
        ))
        this.props.updateDates(days);
    }

    handleDate = event => {
        this.props.addLastDate(event.target.value);
    }

    handleAcrClick = () => {
        this.props.updateIsModal(true);
    }

    render() {
        if(this.props.isSetDate) {
           return <DayInputs dates={this.props.dates} updateRate={this.props.updateRate} updateOutcome={this.props.updateOutcome} updateSetDate={this.props.updateSetDate} rate={this.props.rate} updateColor={this.props.updateColor} updateDates={this.props.updateDates}/>
        } else if (this.props.isOutcomeReady) {
            return <Outcome color={this.props.color} rate={this.props.rate} addLastDate={this.props.addLastDate} updateSetDate={this.props.updateSetDate} updateOutcome={this.props.updateOutcome} dates={this.props.dates} updateDates={this.props.updateDates}/>
        }
        return (
            <div className="area">
                <h1>Współczynnik ACR (Acute to Chronic Ratio)</h1>
                <button class="acr" onClick={this.handleAcrClick}>Dowiedz się czym jest ACR!</button>
                <p>{text2}</p>
                <input type="date" name="date" onChange={this.handleDate}/>
                <button ref={this.startButton} onFocus={() => {
                    this.startButton.current.className = "focus"
                }} onBlur={() => {
                    this.startButton.current.className = ""
                }} onClick={this.handleClick}>Zaczynamy!</button>
                {this.props.isModal ? <Modal updateIsModal={this.props.updateIsModal}/> : null}
            </div>
        )
    }
}

export default Start;