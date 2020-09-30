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
      <form></form>
      <label for="title">Title:</label>
        <input type="text" name="title" value="" /><br/>
        <label for="year">Year:</label>
        <input type="text" name="year" value="" />
        <br/>
        <label for="rated">Rated:</label>
        <input type="text" name="rated" value="" />
        <br/>
        <label for="genre">Genre:</label>
        <input type="text" name="genre" value="" />
        <br/>
        <input type="submit" value="Submit"></input>
    </div>
    <div className="container-2">
      <h5>List of <br/> Open Requests</h5>
    </div>
    <div className="container-2">
      <h5>Accepted Requests <br/>Coming Soon</h5>
    </div>
    </div>
    </div>
    )
    };
}

ReactDOM.render(<App />, document.querySelector("main"));
