import React from 'react';
import PropTypes from 'prop-types';
import DayInputs from './DayInputs';
import Outcome from './Outcome';

const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime cum alias aperiam! Accusantium perferendis quidem, laudantium sit porro fugiat asperiores maiores reiciendis, autem ea est odit magnam ut! Vel corrupti quod provident qui labore beatae cupiditate! Nemo eaque laboriosam porro laborum facilis, earum quas iusto nihil saepe quibusdam nostrum officia quasi quia eos. Nostrum delectus aspernatur accusamus eius accusantium, quae totam veritatis fugiat itaque quisquam nihil consequatur illum dicta harum alias dolore libero ducimus tenetur. Sint suscipit accusamus ratione eum rerum, cupiditate veritatis. Eum sint, nemo maxime beatae consequuntur possimus.";

const text2 = 
`
Czy biegam za dużo? Oczywiście, że nie! Przecież bieganie to całe moje życie! Ja zdecydowanie biegam za mało!!!
Z pewnością większość z Was podpisze się pod tymi słowami. Ale kiedy w nasze bieganie wkradają się ból i kontuzje, zaczynamy szukać ich przyczyn. I bardzo często te poszukiwania zaczynamy od myśli, czy aby nie przesadziliśmy z objętością treningów i ich równomiernym rozłożeniem.
Każdy z nas jest inny i bez dokładnej analizy, badań i obserwacji organizmu nie da się w łatwy sposób odpowiedzieć na to pytanie. Ale istnieje prosty, pseudonaukowy wskaźnik, który sprawdza czy nasze obciążenia treningowe i ryzyko kontuzji nie są zbyt duże - współczynnik ACR.
Za chwilę wyjaśnię jak go interpretować, ale aby go obliczyć, wybierz dzień w którym ostatni raz biegałeś (to ważne, by obliczyć wskaźnik dla Twojego obecnego obciążenia) i kliknij przycisk "Zaczynamy!"
`

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
        color: PropTypes.string
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

    render() {
        if(this.props.isSetDate) {
           return <DayInputs dates={this.props.dates} updateRate={this.props.updateRate} updateOutcome={this.props.updateOutcome} updateSetDate={this.props.updateSetDate} rate={this.props.rate} updateColor={this.props.updateColor} updateDates={this.props.updateDates}/>
        } else if (this.props.isOutcomeReady) {
            return <Outcome color={this.props.color} rate={this.props.rate} addLastDate={this.props.addLastDate} updateSetDate={this.props.updateSetDate} updateOutcome={this.props.updateOutcome} dates={this.props.dates} updateDates={this.props.updateDates}/>
        }
        return (
            <div className="area">
                <h1>Współczynnik ACR (Acute to Chronic Ratio)</h1>
                <p>{text2}</p>
                <input type="date" name="date" onChange={this.handleDate}/>
                <button ref={this.startButton} onFocus={() => {
                    this.startButton.current.className = "focus"
                }} onBlur={() => {
                    this.startButton.current.className = ""
                }} onClick={this.handleClick}>Zaczynamy!</button>
            </div>
        )
    }
}

export default Start;