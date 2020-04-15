class App extends React.Component {
  state = {
    counter: 0,
    forms: false,
    hiddenForms: true
  };

  handleClick = () => {
    this.setState(() => ({
      forms: !this.state.forms
    }));
    console.log("ok");
  };

  render() {
    return (
      <React.Fragment>
        <>
          <h1>Czy nie biegam za dużo?</h1>
        </>
        {this.state.forms ? <Forms /> : <MainArea click={this.handleClick} />}
        <Footer />
      </React.Fragment>
    );
  }
}

let text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime cum alias aperiam! Accusantium perferendis quidem, laudantium sit porro fugiat asperiores maiores reiciendis, autem ea est odit magnam ut! Vel corrupti quod provident qui labore beatae cupiditate! Nemo eaque laboriosam porro laborum facilis, earum quas iusto nihil saepe quibusdam nostrum officia quasi quia eos. Nostrum delectus aspernatur accusamus eius accusantium, quae totam veritatis fugiat itaque quisquam nihil consequatur illum dicta harum alias dolore libero ducimus tenetur. Sint suscipit accusamus ratione eum rerum, cupiditate veritatis. Eum sint, nemo maxime beatae consequuntur possimus, neque recusandae officia facilis ab dolor eaque odit in nam corporis quae sunt commodi natus nobis impedit repudiandae blanditiis! Veritatis, quidem, dolor quibusdam consectetur corporis labore sapiente nemo rerum perferendis sit impedit assumenda, numquam perspiciatis dolorum voluptatibus.";

const MainArea = props => {
  return (
    <div className="area">
      <h2>Współczynnik ACR (Acute to Chronic Ratio)</h2>
      <p>{text}</p>
      <PowerBtn click={props.click} />
    </div>
  );
};

const Forms = () => {
  return (
    <div className="formArea">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        inventore blanditiis earum optio corporis neque consequatur ab illum
        harum atque, doloremque suscipit perspiciatis iste sed id, quasi omnis
        vitae exercitationem.
      </p>
      <input id="date" type="date" />
      <form>
        <input type="number" placeholder="ok" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </form>
      <button>Oblicz!</button>
    </div>
  );
};

const PowerBtn = props => {
  return <button onClick={props.click}>Zaczynamy!</button>;
};

const Footer = () => {
  return (
    <footer>
      <p>&copy;Przemysław Szadkowski</p>
    </footer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
