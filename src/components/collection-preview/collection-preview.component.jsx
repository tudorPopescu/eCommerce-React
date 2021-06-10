import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { Map } from 'react-lodash';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {
          <Map collection={items} iteratee={ (item, index) => index < 4 ? <CollectionItem key={item.id} item={item} /> : null }/>
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
