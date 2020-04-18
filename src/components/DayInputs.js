import React from 'react';
import PropTypes from 'prop-types';

class DayInputs extends React.Component {

    mainButton = React.createRef();

    static propTypes = {
        updateSetDate: PropTypes.func,
        dates: PropTypes.array,
        updateRate: PropTypes.func,
        updateOutcome: PropTypes.func,
        updateColor: PropTypes.func,
        updateDates: PropTypes.func
    }

    handleClick = () => {
        let color = '';
        const inputValues = [...document.querySelectorAll('input')]
            .map(input => parseInt(input.value));

        const values = [...document.querySelectorAll('input')].map(value => value.value);
        // blok zapisu do localStorage
        // localStorage.setItem("values", JSON.stringify(values));

        // blok do kontroli inputów
        const dates = this.props.dates;
        let newDates = [];
        for(let i=0; i < dates.length; i++) {
            newDates.push([dates[i][0], values[i]]);
        }
        this.props.updateDates(newDates);
        // koniec bloku
            
        if(inputValues.filter(value => value > 0).length === 0) {
                alert("Ups! Chyba zapomniałeś wpisać wybiegane kilometry!");
                return
        }
        const kilometers = inputValues
            .filter(value => value > 0)
            .reduce((x, y) => x + y);
        const lastWeek = inputValues
        .slice(0, 7)
        .filter(value => value > 0);

        if(lastWeek.length === 0) {
            alert("Ups! Sprawdź czy poprawnie wpisałeś kilometry wybiegane przez Ciebie w ostatnim tygodniu!");
            return
        }

        const lastWeekKilometers = lastWeek.reduce((x, y) => x + y);

        const outcomeRate = lastWeekKilometers / (kilometers / 4);

        if(outcomeRate < 1.2) {
            color = 'green';
        } else if (outcomeRate >= 1.2 && outcomeRate < 1.5) {
            color = 'yellow';
        } else {
            color = 'red';
        }

        this.props.updateRate(outcomeRate);
        this.props.updateColor(color);
        this.props.updateSetDate(false);
        this.props.updateOutcome(true);
    }

    handleChange = event => {
        const dates = this.props.dates;
        dates.find(item => item[0] === event.currentTarget.placeholder)[1] = event.currentTarget.value;
        this.props.updateDates(dates);
    }

    render() {
        return(
            <>
                <div className="formArea">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                    inventore blanditiis earum optio corporis neque consequatur ab illum
                    harum atque, doloremque suscipit perspiciatis iste sed id, quasi omnis
                    vitae exercitationem.
                </p>
                <form>
                    {(this.props.dates).map(date =>
                        // <input key={date} type="number" placeholder={date}></input>
                        <input key={date[0]} type="number" value={date[1]} onChange={this.handleChange} placeholder={date[0]}></input>
                    )}
                </form>
                <button ref={this.mainButton} onFocus={() => {
                    this.mainButton.current.className = "focus"
                }} onBlur={() => {
                    this.mainButton.current.className = ""
                }} onClick={this.handleClick}>Oblicz!</button>
                </div>
                </>
        )
    }
}

export default DayInputs;