class App extends Component {

  //code goes here

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMount() called...')
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillMount() {
    console.log('componentWillMount() called...')
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate() called...`)
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUpdate(params) {
    console.log(`componentWillUpdate() called...`)
    document.title = `You clicked ${this.state.count} times`;
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>click me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
