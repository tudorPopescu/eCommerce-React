import React from 'react';

const withData = (WrappedComponent, dataSource) => {
  class withData extends React.Component {
    constructor() {
      super();
      this.state = {
        data: []
      };
    };

    componentDidMount() {
      fetch(dataSource)
      .then(r => r.json())
      .then(data => this.setState({ data: data.slice(0, 3) }));
    };

    render() {
      return (
        <WrappedComponent data={ this.state.data } { ...this.props } />
      );
    };
  };

  return withData;
};

export default withData;
