import React from 'react';
import PropTypes from 'prop-types';
import DayInputs from './DayInputs';
import Outcome from './Outcome';

const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime cum alias aperiam! Accusantium perferendis quidem, laudantium sit porro fugiat asperiores maiores reiciendis, autem ea est odit magnam ut! Vel corrupti quod provident qui labore beatae cupiditate! Nemo eaque laboriosam porro laborum facilis, earum quas iusto nihil saepe quibusdam nostrum officia quasi quia eos. Nostrum delectus aspernatur accusamus eius accusantium, quae totam veritatis fugiat itaque quisquam nihil consequatur illum dicta harum alias dolore libero ducimus tenetur. Sint suscipit accusamus ratione eum rerum, cupiditate veritatis. Eum sint, nemo maxime beatae consequuntur possimus.";

class Start extends React.Component {
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
        color: PropTypes.string
    }

    handleClick = () => {
        if(!this.props.lastDate) {
            alert("Wprowadź datę Twojego ostatniego treningu!");
            return
        }
        this.props.updateSetDate(true);
        const dates = [];
        const thisDate = new Date(this.props.lastDate);
        dates[0] = new Date(thisDate.setDate(thisDate.getDate()));
        for(let i = 1; i < 28; i++) {
            dates[i] = new Date(thisDate.setDate(thisDate.getDate() - 1))
        }
        // const days = dates.map(date => (
        //     `${date.getDate()}/${date.getMonth() + 1}`
        // ))
        const days = dates.map(date => (
            [`${date.getDate()}/${date.getMonth() + 1}`, '']
        ))
        this.props.updateDates(days);
    }

    handleDate = event => {
        this.props.addLastDate(event.target.value);
    }

    render() {
        if(this.props.isSetDate) {
           return <DayInputs dates={this.props.dates} updateRate={this.props.updateRate} updateOutcome={this.props.updateOutcome} updateSetDate={this.props.updateSetDate} rate={this.props.rate} updateColor={this.props.updateColor} updateDates={this.props.updateDates}/>
        } else if (this.props.isOutcomeReady) {
            return <Outcome color={this.props.color} rate={this.props.rate} updateSetDate={this.props.updateSetDate} updateOutcome={this.props.updateOutcome}/>
        }
        return (
            <div className="area">
                <h1>Współczynnik ACR (Acute to Chronic Ratio)</h1>
                <p>{text}</p>
                <input type="date" name="date" onChange={this.handleDate}/>
                <button onClick={this.handleClick}>Zaczynamy!</button>
            </div>
        )
    }
}

export default Start;