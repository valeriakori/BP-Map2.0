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

        <ul className="list-container" id="locations-list" role="tablist">
          {places.map(place => (
            <li role="tab" role="option" key={place.title}>
              <h4 tabIndex="-1" onClick={e => this.props.handleSelection(e.target.innerText)}>
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
