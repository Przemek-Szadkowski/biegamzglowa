(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),r=a(1),c=a(2),s=a(4),u=a(3),p=a(5),l=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).mainButton=o.a.createRef(),e.handleClick=function(){for(var t="",a=Object(p.a)(document.querySelectorAll("input")).map((function(e){return parseInt(e.value)})),n=Object(p.a)(document.querySelectorAll("input")).map((function(e){return e.value})),o=e.props.dates,i=[],r=0;r<o.length;r++)i.push([o[r][0],n[r]]);if(e.props.updateDates(i),0!==a.filter((function(e){return e>0})).length){var c=a.filter((function(e){return e>0})).reduce((function(e,t){return e+t})),s=a.slice(0,7).filter((function(e){return e>0}));if(0!==s.length){var u=s.reduce((function(e,t){return e+t}))/(c/4);t=u<1.2?"green":u>=1.2&&u<1.5?"yellow":"red",e.props.updateRate(u),e.props.updateColor(t),e.props.updateSetDate(!1),e.props.updateOutcome(!0)}else alert("Ups! Sprawd\u017a czy poprawnie wpisa\u0142e\u015b kilometry wybiegane przez Ciebie w ostatnim tygodniu!")}else alert("Ups! Chyba zapomnia\u0142e\u015b wpisa\u0107 wybiegane kilometry!")},e.handleChange=function(t){var a=e.props.dates;a.find((function(e){return e[0]===t.currentTarget.placeholder}))[1]=t.currentTarget.value,e.props.updateDates(a)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"formArea"},o.a.createElement("p",null,'\n    Por\xf3wnuj\u0105c ilo\u015b\u0107 wybieganych przez Ciebie kilometr\xf3w w ostatnim tygodniu, do ilo\u015bci kilometr\xf3w z ostatnich 4 tygodni, mo\u017cna obliczy\u0107 stosunek okre\u015blany wska\u017anikiem ACR. Ma on 3 zakresy warto\u015bci, okre\u015blaj\u0105cych  ryzyko kontuzji przy danym obci\u0105\u017ceniu, poni\u017cej 1,2, mi\u0119dzy 1,2 a 1,5 oraz powy\u017cej 1,5. Zerknij na zapis swoich biegowych aktywno\u015bci i wpisz do tabeli kilometry przebiegni\u0119te przez Ciebie w ostatnim dniu, zaznaczonym szarym kolorem i w pozosta\u0142e dni biegowe poprzedzaj\u0105cych go 4 tygodni. A nast\u0119pnie kliknij przycisk "Oblicz!" by pozna\u0107 sw\xf3j wska\u017anik i dowiedzie\u0107 si\u0119 co oznacza!\n'),o.a.createElement("form",null,this.props.dates.map((function(t){return o.a.createElement("input",{key:t[0],type:"number",value:t[1],onChange:e.handleChange,placeholder:t[0]})}))),o.a.createElement("button",{ref:this.mainButton,onFocus:function(){e.mainButton.current.className="focus"},onBlur:function(){e.mainButton.current.className=""},onClick:this.handleClick},"Oblicz!")))}}]),a}(o.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).backToTableButton=o.a.createRef(),e.backToStartButton=o.a.createRef(),e.textSet=function(){return"green"===e.props.color?m:"yellow"===e.props.color?z:"red"===e.props.color?w:void 0},e.handleBack=function(){e.props.updateSetDate(!0),e.props.updateOutcome(!1)},e.handleBackToStart=function(){e.props.updateSetDate(!1),e.props.updateOutcome(!1),e.props.addLastDate("")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"outcome"},o.a.createElement("div",{className:"color ".concat(this.props.color)},o.a.createElement("p",null,"Tw\xf3j ACR to:"),o.a.createElement("p",null,Math.round(100*this.props.rate)/100),o.a.createElement("p",{className:"outcomeText"},this.textSet())),o.a.createElement("div",{className:"desc"},o.a.createElement("div",{className:"top"},o.a.createElement("p",null,y),o.a.createElement("p",{className:"motto"},"Do zobaczenia na biegowych trasach!")),o.a.createElement("div",{className:"bottom"},o.a.createElement("button",{ref:this.backToTableButton,onFocus:function(){e.backToTableButton.current.className="focus"},onBlur:function(){e.backToTableButton.current.className=""},onClick:this.handleBack},"Wr\xf3\u0107 do tabelki"),o.a.createElement("button",{ref:this.backToStartButton,onFocus:function(){e.backToStartButton.current.className="focus"},onBlur:function(){e.backToStartButton.current.className=""},onClick:this.handleBackToStart},"Zmie\u0144 dat\u0119 ostatniego treningu")))))}}]),a}(o.a.Component),y="\n    Sprawdzaj wsp\xf3\u0142czynnik ACR go co kilka tygodni, by kontrolowa\u0107 swoje treningowe obci\u0105\u017cenia! Ale pami\u0119taj, \u017ce to tylko sucha liczba, kt\xf3ra ma Tobie pom\xf3c w \u015bwiadomym bieganiu, a nie by\u0107 jedynym wyznacznikiem! Przede wszystkim obserwuj, nie przeci\u0105\u017caj i my\u015bl - mniej wcale nie oznacza gorzej!\n",m="BRAWO! ACR poni\u017cej warto\u015bci 1,2 to idealny wsp\xf3\u0142czynnik. Ilo\u015b\u0107 Twoich obci\u0105\u017ce\u0144 treningowych jest optymalna, a ryzyko kontuzji ma\u0142e! We\u017a jednak pod uwag\u0119 to, \u017ce wsp\xf3\u0142czynnik ACR nie bierze pod uwag\u0119 intensywno\u015bci trening\xf3w, wi\u0119c je\u015bli biegasz cz\u0119sto, ale bardzo intensywnie, to ryzyko kontuzji i tak ro\u015bnie. Dlatego obserwuj sw\xf3j organizm i \u015bwiadomie rozk\u0142adaj treningowe obci\u0105\u017cenia!!!",z="Warto\u015b\u0107 wsp\xf3\u0142czynnika ACR pomi\u0119dzy 1,2 a 1,5 oznacza ryzyko kontuzji na umiarkowanym poziomie. Nie jest to warto\u015b\u0107 optymalna (poni\u017cej 1,2), ale nie oznacza te\u017c bardzo du\u017cego ryzyka kontuzji (powy\u017cej 1,5). Obci\u0105\u017canie w ten spos\xf3b organizmu w d\u0142u\u017cszym okresie mo\u017ce wi\u0119c zwi\u0119kszy\u0107 ryzyko kontuzji. Dlatego pami\u0119taj, by stara\u0107 si\u0119 d\u0105\u017cy\u0107 do optymalnego roz\u0142o\u017cenia obci\u0105\u017ce\u0144 treningowych (poni\u017cej 1,2). I pami\u0119taj, \u017ce wsp\xf3\u0142czynnik ACR nie bierze pod uwag\u0119 intensywno\u015bci trening\xf3w, wi\u0119c je\u015bli biegasz cz\u0119sto, ale bardzo intensywnie, to ryzyko kontuzji ro\u015bnie szybciej. Dlatego obserwuj sw\xf3j organizm i \u015bwiadomie rozk\u0142adaj treningowe obci\u0105\u017cenia!!!",w="Warto\u015b\u0107 wsp\xf3\u0142czynnika powy\u017cej 1,5 oznacza bardzo du\u017ce ryzyko kontuzji!\nPowiniene\u015b ograniczy\u0107 ilo\u015b\u0107 przebieganych kilometr\xf3w lub roz\u0142o\u017cy\u0107 je bardziej r\xf3wnomiernie w ci\u0105gu tygodnia, tak by zmniejszy\u0107 wsp\xf3\u0142czynnik do warto\u015bci optymalnych - poni\u017cej 1,2. \nPami\u0119taj, \u017ce wsp\xf3\u0142czynnik ACR nie bierze pod uwag\u0119 intensywno\u015bci trening\xf3w, wi\u0119c je\u015bli biegasz cz\u0119sto, ale bardzo intensywnie, to ryzyko kontuzji ro\u015bnie szybciej. Dlatego obserwuj sw\xf3j organizm i \u015bwiadomie rozk\u0142adaj treningowe obci\u0105\u017cenia!!!",b=d,k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).startButton=o.a.createRef(),e.handleClick=function(){if(e.props.lastDate){e.props.updateSetDate(!0);var t=[],a=new Date(e.props.lastDate);t[0]=new Date(a.setDate(a.getDate()));for(var n=1;n<28;n++)t[n]=new Date(a.setDate(a.getDate()-1));var o=t.map((function(e){return["".concat(e.getDate(),"/").concat(e.getMonth()+1),""]}));e.props.updateDates(o)}else alert("Wprowad\u017a dat\u0119 Twojego ostatniego treningu!")},e.handleDate=function(t){e.props.addLastDate(t.target.value)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.isSetDate?o.a.createElement(l,{dates:this.props.dates,updateRate:this.props.updateRate,updateOutcome:this.props.updateOutcome,updateSetDate:this.props.updateSetDate,rate:this.props.rate,updateColor:this.props.updateColor,updateDates:this.props.updateDates}):this.props.isOutcomeReady?o.a.createElement(b,{color:this.props.color,rate:this.props.rate,addLastDate:this.props.addLastDate,updateSetDate:this.props.updateSetDate,updateOutcome:this.props.updateOutcome,dates:this.props.dates,updateDates:this.props.updateDates}):o.a.createElement("div",{className:"area"},o.a.createElement("h1",null,"Wsp\xf3\u0142czynnik ACR (Acute to Chronic Ratio)"),o.a.createElement("p",null,'\nCzy biegam za du\u017co? Oczywi\u015bcie, \u017ce nie! Przecie\u017c bieganie to ca\u0142e moje \u017cycie! Ja zdecydowanie biegam za ma\u0142o!!!\nZ pewno\u015bci\u0105 wi\u0119kszo\u015b\u0107 z Was podpisze si\u0119 pod tymi s\u0142owami. Ale kiedy w nasze bieganie wkradaj\u0105 si\u0119 b\xf3l i kontuzje, zaczynamy szuka\u0107 ich przyczyn. I bardzo cz\u0119sto te poszukiwania zaczynamy od my\u015bli, czy aby nie przesadzili\u015bmy z obj\u0119to\u015bci\u0105 trening\xf3w i ich r\xf3wnomiernym roz\u0142o\u017ceniem.\nKa\u017cdy z nas jest inny i bez dok\u0142adnej analizy, bada\u0144 i obserwacji organizmu nie da si\u0119 w \u0142atwy spos\xf3b odpowiedzie\u0107 na to pytanie. Ale istnieje prosty, pseudonaukowy wska\u017anik, kt\xf3ry sprawdza czy nasze obci\u0105\u017cenia treningowe i ryzyko kontuzji nie s\u0105 zbyt du\u017ce - wsp\xf3\u0142czynnik ACR.\nZa chwil\u0119 wyja\u015bni\u0119 jak go interpretowa\u0107, ale aby go obliczy\u0107, wybierz dzie\u0144 w kt\xf3rym ostatni raz biega\u0142e\u015b (to wa\u017cne, by obliczy\u0107 wska\u017anik dla Twojego obecnego obci\u0105\u017cenia) i kliknij przycisk "Zaczynamy!"\n'),o.a.createElement("input",{type:"date",name:"date",onChange:this.handleDate}),o.a.createElement("button",{ref:this.startButton,onFocus:function(){e.startButton.current.className="focus"},onBlur:function(){e.startButton.current.className=""},onClick:this.handleClick},"Zaczynamy!"))}}]),a}(o.a.Component),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={setDate:!1,outcomeReady:!1,lastDate:"",dates:[],rate:0,color:""},e.addLastDate=function(t){e.setState({lastDate:t})},e.updateDates=function(t){e.setState({dates:t})},e.updateSetDate=function(t){e.setState({setDate:t})},e.updateRate=function(t){e.setState({rate:t})},e.updateOutcome=function(t){e.setState({outcomeReady:t})},e.updateColor=function(t){e.setState({color:t})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"biegam za du\u017co?"),o.a.createElement(k,{history:this.props.history,addLastDate:this.addLastDate,lastDate:this.state.lastDate,updateDates:this.updateDates,updateSetDate:this.updateSetDate,isSetDate:this.state.setDate,dates:this.state.dates,updateRate:this.updateRate,isOutcomeReady:this.state.outcomeReady,updateOutcome:this.updateOutcome,rate:this.state.rate,updateColor:this.updateColor,color:this.state.color}),o.a.createElement("footer",null,o.a.createElement("a",{href:"mailto:przemoszadkowski@o2.pl"},"\xa9Przemys\u0142aw Szadkowski")))}}]),a}(o.a.Component);a(13);Object(i.render)(o.a.createElement(h,null),document.querySelector("#main"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.416f9430.chunk.js.map