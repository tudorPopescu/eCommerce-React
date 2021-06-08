import React from 'react';
import { Map, Filter } from 'react-lodash';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {
          <Map collection={ items } iteratee={ (item, index) => index < 4 ? <div key={item.id}>{item.name}</div> : null } />
        }
      </div>
    </div>
  )
}

export default CollectionPreview;
