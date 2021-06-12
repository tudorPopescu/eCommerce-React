import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'react-lodash';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      <Map collection={sections} iteratee={({id, ...otherProps }) => <MenuItem key={id} {...otherProps} />} />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(
  mapStateToProps
)(Directory);
