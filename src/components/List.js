import React, { Component}  from 'react';
import ListItem from "./ListItem";

class List extends Component {
  //state = {};
  // hat die überhaupt state?
  // places wird als prop v. App übergeben

  filterPlaces = query => {
    //filters out !places.contain(query)
  };

  render() {
    const { places } = this.props;

    return (
      <section className="list-section" role="list of places in budapest">
        <input
          onChange={e => this.props.handleQuery(e.target.value)}
          placeholder="Search for Location"
        />
        <ul>
          {places.map(place => (
            <ListItem
              onClick={e => this.props.handleSelection(e.target.innerText)}
              key={place.title}
            />
          ))}
        </ul>
      </section>
    );
  }
}
export default List;
