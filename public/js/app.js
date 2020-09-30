class App extends React.Component {
  state = {};

  render = () => {
    return (
    <div>
    <div className="container-1">
      <div className="header-img"> 
      </div>
    </div>
    <div class="main-section">
    <div className="container-2">
      <h5>Rent a Movie</h5>
    </div>
    <div className="container-2">
      <h5>Movies Recently <br/>Added to <br/>Request List</h5>
    </div>
    <div className="container-2">
      <h5>Search Results</h5>
    </div>
    </div>
    </div>
    )
    };
}

ReactDOM.render(<App />, document.querySelector("main"));
