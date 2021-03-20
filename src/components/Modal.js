import React from 'react';
import PropTypes from 'prop-types';

const acrText = `
    Czy biegam za dużo? Oczywiście, że nie! Przecież bieganie to całe moje życie! Ja zdecydowanie biegam za mało!!!
    Z pewnością większość z Was podpisze się pod tymi słowami. Ale kiedy w nasze bieganie wkradają się ból i kontuzje, zaczynamy szukać ich przyczyn. I bardzo często te poszukiwania zaczynamy od myśli, czy aby nie przesadziliśmy z objętością treningów i ich równomiernym rozłożeniem.
    Każdy z nas jest inny i bez dokładnej analizy, badań i obserwacji organizmu nie da się w łatwy sposób odpowiedzieć na to pytanie. Ale istnieje prosty, pseudonaukowy wskaźnik, który sprawdza czy nasze obciążenia treningowe i ryzyko kontuzji nie są zbyt duże - to współczynnik ACR.
    Przy jego wyliczaniu porównuje się ilość wybieganych przez Ciebie kilometrów w ostatnim tygodniu, do ilości kilometrów z ostatnich 4 tygodni. Współczynnik ma 3 zakresy wartości, określających  ryzyko kontuzji przy danym obciążeniu, poniżej 1,2, między 1,2 a 1,5 oraz powyżej 1,5. Najbezpieczniejsze są wartości poniżej 1,2. Dokładniejszy opis zakresu w którym plasują Cię Twoje przebiegnięte kilometry poznasz, gdy skorzystasz z tej strony. Kliknij więc przycisk Powrót i podążaj za wskazówkami na ekranie!
    `;

class Modal extends React.Component {

    static propTypes = {
        updateIsModal: PropTypes.func
    }

    handleClick = () => {
        this.props.updateIsModal(false);
    }

    render() {
        return(
            <div className="modal_outer">
                    <div className="modal_inner">
                    <p>{acrText}</p>
                    <button onClick={this.handleClick}>Powrót</button>
                    </div></div>
        )
    }
}

export default Modal;