import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data.js';
import { Map } from 'react-lodash';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: DIRECTORY_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {
          <Map collection={this.state.sections} iteratee={({id, ...otherProps }) => <MenuItem key={id} {...otherProps} />} />
        }
      </div>
    );
  };
}

export default Directory;
