class App extends React.Component {
  state = {
    title: "",
    year: "",
    rated: "",
    genre: "",
    edit: false,
    putID: null,
    movies: [],
  };
  componentDidMount = () => {
    axios.get("http://localhost:3004/blockbuster/requests").then((response) => {
      console.log(response);
      this.setState({
        movies: response.data,
      });
    });
  };

  deleteRequest = (event) => {
    axios
      .delete(
        "http://localhost:3004/blockbuster/requests/" + event.target.value
      )
      .then((response) => this.setState({ movies: response.data }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3004/blockbuster/requests", this.state)
      .then((response) =>
        this.setState({
          title: "",
          year: "",
          rated: "",
          genre: "",
          movies: response.data,
        })
      );
  };
  updateRequest = (event) => {
    const id = event;
    axios
      .put("http://localhost:3004/blockbuster/requests/" + id, this.state)
      .then((response) => {
        this.setState({
          title: "",
          year: "",
          rated: "",
          genre: "",
          movies: response.data,
          edit: false,
        });
      });
  };

  grabUpdateForm = (event) => {
    return (
      <div className='edit-div'>
        <h5>Edit a Request</h5>
        <form className='form' onSubmit={this.updateRequest(event)}>
          <label className='form' htmlFor='title'>
            Title:
          </label>
          <input type='text' onChange={this.handleChange} id='title' />
          <br />
          <label className='form' htmlFor='year'>
            Year:
          </label>
          <input type='text' onChange={this.handleChange} id='year' />
          <br />
          <label className='form' htmlFor='rated'>
            Rated:
          </label>
          <input type='text' onChange={this.handleChange} id='rated' />
          <br />
          <label className='form' htmlFor='genre'>
            Genre:
          </label>
          <input type='text' onChange={this.handleChange} id='genre'></input>

          <br />
          <input className='form-button' type='submit' value='Edit'></input>
        </form>
      </div>
    );
  };

  changeEdit = () => {
    this.setState({
      edit: true,
    });
  };
  checkEdit = (event) => {
    if (this.state.edit === true) {
      this.grabUpdateForm(event);
    }
  };

  render = () => {
    return (
      <div>
        <div className='container-1'>
          <div className='header-img'></div>
        </div>
        <div className='main-section'>
          <div className='container-2'>
            <h5>Rent a Movie</h5>
            <form className='form' onSubmit={this.handleSubmit}>
              <label className='form' htmlFor='title'>
                Title:
              </label>
              <input type='text' onChange={this.handleChange} id='title' />
              <br />
              <label className='form' htmlFor='year'>
                Year:
              </label>
              <input type='text' onChange={this.handleChange} id='year' />
              <br />
              <label className='form' htmlFor='rated'>
                Rated:
              </label>
              <input type='text' onChange={this.handleChange} id='rated' />
              <br />
              <label className='form' htmlFor='genre'>
                Genre:
              </label>
              <input
                type='text'
                onChange={this.handleChange}
                id='genre'
              ></input>

              <br />
              <input
                className='form-button'
                type='submit'
                value='Submit'
              ></input>
            </form>
          </div>
          <div className='container-2'>
            <h5>
              List of <br /> Open Requests
            </h5>
            <ul>
              {this.state.movies.map((movie) => {
                return (
                  <li key={movie._id}>
                    {movie.title} Year: {movie.year}
                    Rating: {movie.rated}
                    <br />
                    <button value={movie._id} onClick={this.deleteRequest}>
                      DELETE
                    </button>
                    <button value={movie._id} onClick={this.changeEdit}>
                      EDIT
                    </button>
                    {this.checkEdit(movie._id)}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='container-2'>
            <h5>
              Accepted Requests <br />
              Coming Soon
            </h5>
            <div className='coming-soon'>
              <div className='fight'>
                <h4>Fight Club</h4>
              </div>
              <div className='matrix'>
                <h4>The Matrix</h4>
              </div>
              <div className='sixth'>
                <h4>The Sixth Sense</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector("main"));
