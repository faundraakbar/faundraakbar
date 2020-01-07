import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <div class="text-center container">
            <h3 className="display-4">Faundra Akbar</h3>
            <hr className="my-2" />
            <p className="lead">Student | Web Developer</p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;