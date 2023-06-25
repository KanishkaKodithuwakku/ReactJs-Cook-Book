import React, { Component } from "react";

class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: false,
    };
  }

  render() {
      const { showSpinner } = this.state;
      const { styles,type } = this.props;

    return (
      showSpinner && (
        <div className={`spinner-${type} ${styles}`} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    );
  }
}

export default Spinner;
