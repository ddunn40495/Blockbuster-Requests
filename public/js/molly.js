class Molly extends React.Component {
    state = {};
  
    render = () => {
      return ( 
        <section>
      <div class="main-section">
      <div className="container-2">
        <h5>Rent a Movie</h5>
        <form>
        <label className="form" for="title">Title:</label>
          <input type="text" name="title" value="" /><br/>
          <label className="form" for="year">Year:</label>
          <input type="text" name="year" value="" />
          <br/>
          <label className="form" for="rated">Rated:</label>
          <input type="text" name="rated" value="" />
          <br/>
          <label className="form" for="genre">Genre:</label>
          <input type="text" name="genre" value="" />
          <br/>
          <input className="form-button" type="submit" value="Submit"></input>
          </form>
      </div>
        <div className="container-2">
        <h5>List of <br/> Open Requests</h5>
      </div>
      <div className="container-3">
        <h5>Accepted Requests <br/>Coming Soon</h5>
        <div class="coming-soon">
        <div className="fight">
        <h7>Fight Club</h7>
        </div>
        <div className="matrix">
            <h7>The Matrix</h7>
        </div>
        <div className="sixth">
            <h7>The Sixth Sense</h7>
        </div>
        </div>
      </div>
      </div>
      </section>
      )
      };
  }
  