class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }
  
  render() {
    return(
      <button onClick={this.handleClick.bind(this)}>{this.state.count}</button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
