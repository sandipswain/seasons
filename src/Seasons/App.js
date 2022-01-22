import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div className="App">Latitude: </div>;
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // This is the only time when we do direct assignment to this.state
  //   this.state = {
  //     lat: null,
  //     errorMessage: "",
  //   };
  // }

  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    // This method is called when the component gets rendered for the first time
    console.log("My Component was rendered to the screen");
    // To update our state object we call setState
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was updated - it rerendered!");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessage}</div>;
    if (!this.state.errorMessage && this.state.lat)
      // return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    return <Spinner message="Please accept the location request" />;
  }

  // React says we have to define render()
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
