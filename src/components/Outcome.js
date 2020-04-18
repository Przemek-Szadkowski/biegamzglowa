import React from 'react';
import PropTypes from 'prop-types';

class Outcome extends React.Component {

    backToTableButton = React.createRef();
    backToStartButton = React.createRef();

    static propTypes = {
        rate: PropTypes.number,
        color: PropTypes.string,
        updateSetDate: PropTypes.func,
        updateOutcome: PropTypes.func,
        addLastDate: PropTypes.func
    }

    textSet = () => {
        if(this.props.color === "green") {
            return textGreen;
        } else if (this.props.color === "yellow") {
            return textYellow;
        } else if (this.props.color === "red") {
            return textRed;
        }
    }

    handleBack = () => {
        // let values = [];
        // let newDates = [];
        this.props.updateSetDate(true);
        this.props.updateOutcome(false);
        // const dates = this.props.dates;
            
        // const localStorageRef = localStorage.getItem("values");
        // if(localStorageRef) {
        //     values = JSON.parse(localStorageRef);
        // }
        // for(let i=0; i < dates.length; i++) {
        //     newDates.push([dates[i][0], values[i]]);
        // }
        // console.log(newDates);
    }

    handleBackToStart = () => {
        this.props.updateSetDate(false);
        this.props.updateOutcome(false);
        this.props.addLastDate('');
    }

    render() {
        return (
            <>
            <div className="outcome">
                <div className={`color ${this.props.color}`}>
                    <p>Twój ACR to:</p>
                    <p>{Math.round(this.props.rate * 100) / 100}</p>
                    <p className="outcomeText">{this.textSet()}</p>
                </div>
                <div className="desc">
                    <div className="top">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam aliquid necessitatibus. Fuga vel ullam obcaecati dolores dolorem. Et eveniet in dolorem accusamus placeat harum incidunt illum, cumque libero provident.</p>
                        <p className="motto">Do zobaczenia na biegowych trasach!</p>
                    </div>
                    <div className="bottom">
                    <button ref={this.backToTableButton} onFocus={() => {
                    this.backToTableButton.current.className = "focus"
                }} onBlur={() => {
                    this.backToTableButton.current.className = ""
                }} onClick={this.handleBack}>Wróć do tabelki</button>
                            {/* <button>Wróć do tabelki</button> */}
                    <button ref={this.backToStartButton} onFocus={() => {
                    this.backToStartButton.current.className = "focus"
                }} onBlur={() => {
                    this.backToStartButton.current.className = ""
                }} onClick={this.handleBackToStart}>Zmień datę ostatniego treningu</button>
                        </div>
                </div>
            </div>
            </>
        )
    }
}

const textGreen = "zzzzzz zzzzz zzzzzzzz zzzz zzzz zzzzzzzzz zzzzzzz zzzzzz zzzzzzzzzzzzzz zzzzzzzzzzzz zzzzzz zzzzzz zzzzzz zzzzzzzzzzz zzzzzzzzzzzz zzzzzzzzz zzzzzzzzzzzzzzzz zzzzzzzzzzzz zzzzzzzzzz zzzzzz zzzzzzzz zzzzzzz zzzzzzzz zzzzzzzzzzzzzzzzz zzzzzzzzzzzzzz zzzzzz";
 
const textYellow = "yyyyyyyyyyyyyyyyy yyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyy yyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyy";

const textRed = "rrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrr rrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrrrr";

export default Outcome;