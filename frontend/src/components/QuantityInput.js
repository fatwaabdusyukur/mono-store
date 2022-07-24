import React from "react";

export default class QuantityInput extends React.Component {
  constructor() {
    super();
    this.state = {
      qty: 0,
    };
  }

  componentDidUpdate() {
    this.props.onHandleQuantity(this.state.qty);
  }

  render() {
    return (
      <div className="inline-flex items-center bg-gray-300/90 w-24 py-4 px-3 ml-2 justify-between">
        <button
          onClick={() => {
            this.setState({
              qty: this.state.qty !== 0 ? this.state.qty - 1 : 0,
            });
          }}
          id="minus"
          className="text-gray-800 dark:text-gray-700"
        >
          -
        </button>
        <h1 className="text-gray-800 dark:text-gray-700">{this.state.qty}</h1>
        <button
          onClick={() => {
            this.setState({ qty: this.state.qty + 1 });
          }}
          id="plus"
          className="text-gray-800 dark:text-gray-700"
        >
          +
        </button>
      </div>
    );
  }
}
