import React, { Component } from "react";

class ListItem extends Component {
  static defaultProps = {
    url: "#",
  };
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {
    const {
      itemStatus,
      itemHeading,
      itemsubHeading,
      description,
      date,
      children,
      url,
      button
    } = this.props;
    return (
      <a
        href={url}
        className={`list-group-item list-group-item-action ${itemStatus}`}
      >
        <div className="d-flex w-100 justify-content-start align-items-center">
          {children}
        </div>
        <div>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{itemHeading} </h5>
            {date && <small>{date}</small>}
          </div>
          <p className="mb-1">{description}</p>
          {itemsubHeading && <small>{itemsubHeading}</small>}
          {button}
        </div>
      </a>
    );
  }
}

export default ListItem;
