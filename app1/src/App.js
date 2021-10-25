import React, {Suspense} from "react";
const RemoteApp2 = React.lazy(() => import("app2/App"));

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: false
      }
  }
  setValue() {
    this.setState({ 'value': !this.state.value });
  }
  render() {
    const value = this.state.value;
    return (
      <div>
        <div style={{
          margin:"10px",
          padding:"10px",
          textAlign:"center",
          backgroundColor:"greenyellow"
        }} onClick={ this.setValue.bind(this) }>
          <h1>App1: 点击加载App2</h1>
        </div>
        <Suspense fallback={"loading..."}>
          { value &&  <RemoteApp2/> }
        </Suspense>
      </div>)
  }
}

export default App;
