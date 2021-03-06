import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from "../../components/collection-overview/collections-overview.container";
import CollectionContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    /* For Redux action */
    // const { fetchCollectionStartAsync } = this.props;
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:id_collection`} component={CollectionContainer} />
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
