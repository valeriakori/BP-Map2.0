import React, { Component } from "react";

class List extends Component {

  render() {
    const { places } = this.props;

    return (
      <section className="list-section" role="list of places in budapest">
        <input
          onChange={e => this.props.handleQuery(e.target.value)}
          placeholder="Search for Location"
        />
        <ul className="list-container">
          {places.map(place => (
            <li key={place.title}>
              <h4 onClick={e => this.props.handleSelection(e.target.innerText)}>
                {place.title}
              </h4>
              <h5>{place.subtitle}</h5>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default List;
