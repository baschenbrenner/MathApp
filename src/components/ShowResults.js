import React from 'react';

class ShowResults extends React.Component {
    render(){
      return (
        <div>
          <h1>{this.props.correct}</h1>
        </div>
      );
    }
}

export default ShowResults;
