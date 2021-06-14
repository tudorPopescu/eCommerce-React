import React from 'react';
import { Map } from 'react-lodash';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ history, match, routeName, title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>
        <span>{title.toUpperCase()}</span>
      </h1>
      <div className="preview">
        {
          <Map collection={items} iteratee={ (item, index) => index < 4 ? <CollectionItem key={item.id} item={item} /> : null }/>
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview);
