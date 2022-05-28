import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  //A lifecycle method that can be added to any class-based component
  //It makes that class-based component an error boundary
  componentDidCatch(error) {
    console.log(error.message);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
