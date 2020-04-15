import React from 'react';
import PropTypes from 'prop-types';

class Outcome extends React.Component {
    static propTypes = {
        rate: PropTypes.number,
        color: PropTypes.string
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

    // handleBack = () => {
    //     this.props.updateSetDate(true);
    //     this.props.updateOutcome(false);
    //     const inputValues = [...document.querySelectorAll('input')];
            
    //     const localStorageRef = localStorage.getItem("values");
    //     if(localStorageRef) {
    //         const values = JSON.parse(localStorageRef);
    //     }
    //     console.log(inputValues);
    // }

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
                        <p class="motto">Do zobaczenia na biegowych trasach!</p>
                    </div>
                    <div className="bottom">
                            {/* <button onClick={this.handleBack}>Wróć do tabelki</button> */}
                            <button>Wróć do tabelki</button>
                            <button>Zmień datę ostatniego treningu</button>
                        </div>
                </div>
            </div>
            </>
        )
    }
}

const textGreen = "zzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzz";

const textYellow = "yyyyyyyyyyyyyyyyy yyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyy yyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyy";

const textRed = "rrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrr rrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrrrrrr";

export default Outcome;