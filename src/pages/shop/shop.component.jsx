import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } />
        <Route path={`${match.path}/:id_collection`} render={props => <CollectionWithSpinner isLoading={isCollectionFetching} {...props} /> } />
      </div>
    );
  };
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
