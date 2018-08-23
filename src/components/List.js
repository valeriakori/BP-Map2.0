import React, { Component } from "react";

class List extends Component {

  render() {
    const { places } = this.props;

    return (
      <section className="list-section" role="list">
        <input
          onChange={e => this.props.handleQuery(e.target.value)}
          placeholder="Search for Location"
          id="locations-filter"
          role="search"
          tabIndex="0"
        />
        <label htmlFor="locations-filter">filter locations</label>

        <ul className="list-container" role="list">
          {places.map(place => (
            <li role="listitem" key={place.title}>
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
