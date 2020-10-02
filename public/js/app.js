class App extends React.Component {
  state = {};

  render = () => {
    return (
      <div>
        <div className='container-1'>
          <div className='header-img'></div>
        </div>
        <Molly></Molly>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector("main"));
