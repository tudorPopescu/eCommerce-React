import { connect } from 'react-redux';
import { Map } from 'react-lodash';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';


const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      <Map collection={collections} iteratee={ ({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} /> }/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(
  mapStateToProps
)(CollectionOverview);
