import React from 'react';
import { connect } from 'react-redux';
import { showOnline, deliveryTime, priceRange } from './actions';

const mapDispatchToProps = (dispatch) => ({
  showOnline: (checked) => dispatch(showOnline(checked)),
  deliveryTime: (time) => dispatch(deliveryTime(time)),
  priceRange: (price1, price2) => dispatch(priceRange(price1, price2)),
});

class SidebarFilter extends React.Component {
  render() {
    return (
      <div className="sidebar-filter">
        <h3>Refine Results</h3>
        <ul className="list-unstyled">
          <h2>Delivery time</h2>
          <form>
            <p><input type="radio" /> Upto 24 hours</p>
            <p><input type="radio" /> Upto 3 days</p>
            <p><input type="radio" /> Upto 7 days</p>
            <p><input type="radio" /> Any</p>
        </form>
        </ul>
        <hr />
        <h2>Price Range</h2>
        <form onSubmit={(e) => {e.preventDefault(); this.props.priceRange(e.target.price1.value, e.target.price2.value)}}>
          $<input type="text" className="form-control" name="price1" />
          to $<input type="text" className="form-control" name="price2"/>
          <button type="submit">
            <span className="glyphicon glyphicon-menu-right" />
          </button>
        </form>
        <h2>Online Status</h2>
        <span>
          <input type="checkbox" onClick={(e) => this.props.showOnline(e.target.checked)}/>
          show online sellers
        </span>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SidebarFilter);