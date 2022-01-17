import React from "react";
// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div className="App">Latitude: </div>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the only time when we do direct assignment to this.state
    this.state = {
      lat: null,
      errorMessage: "",
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          // To update our state object we call setState
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // React says we have to define render()
  render() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessages}</div>;
    if (!this.state.errorMessage && this.state.lat)
      return <div>Latitude: {this.state.lat}</div>;
    return <div>Loading...</div>;
  }
}

export default App;
