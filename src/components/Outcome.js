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
                        <p>{text}</p>
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

const text = `
    Sprawdzaj współczynnik ACR go co kilka tygodni, by kontrolować swoje treningowe obciążenia! Ale pamiętaj, że to tylko sucha liczba, która ma Tobie pomóc w świadomym bieganiu, a nie być jedynym wyznacznikiem! Przede wszystkim obserwuj, nie przeciążaj i myśl - mniej wcale nie oznacza gorzej!
`;

const textGreen = `BRAWO! ACR poniżej wartości 1,2 to idealny współczynnik. Ilość Twoich obciążeń treningowych jest optymalna, a ryzyko kontuzji małe! Weź jednak pod uwagę to, że współczynnik ACR nie bierze pod uwagę intensywności treningów, więc jeśli biegasz częściej i krócej, ale bardzo intensywnie, to ryzyko kontuzji i tak rośnie. Dlatego obserwuj swój organizm i świadomie rozkładaj treningowe obciążenia!!!`;
 
const textYellow = `Wartość współczynnika ACR pomiędzy 1,2 a 1,5 oznacza ryzyko kontuzji na umiarkowanym poziomie. Nie jest to wartość optymalna (poniżej 1,2), ale nie oznacza też bardzo dużego ryzyka kontuzji (powyżej 1,5). Obciążanie w ten sposób organizmu w dłuższym okresie może więc zwiększyć ryzyko kontuzji. Dlatego pamiętaj, by starać się dążyć do optymalnego rozłożenia obciążeń treningowych (poniżej 1,2). I pamiętaj, że współczynnik ACR nie bierze pod uwagę intensywności treningów, więc jeśli biegasz częściej i krócej, ale bardzo intensywnie, to ryzyko kontuzji rośnie szybciej. Dlatego obserwuj swój organizm i świadomie rozkładaj treningowe obciążenia!!!`;

const textRed = `Wartość współczynnika powyżej 1,5 oznacza bardzo duże ryzyko kontuzji!
Powinieneś ograniczyć ilość przebieganych kilometrów lub rozłożyć je bardziej równomiernie w ciągu tygodnia, tak by zmniejszyć współczynnik do wartości optymalnych - poniżej 1,2. 
Pamiętaj, że współczynnik ACR nie bierze pod uwagę intensywności treningów, więc jeśli biegasz częściej i krócej, ale bardzo intensywnie, to ryzyko kontuzji rośnie szybciej. Dlatego obserwuj swój organizm i świadomie rozkładaj treningowe obciążenia!!!`;

export default Outcome;