import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col-xs-10">
          <h1>Calendar</h1>
        </div>
        <div className="col-sx-2">
          <h2>
            <button className="btn btn-secondary">
              <Link to='/login'>Logout</Link>
            </button>
          </h2>
        </div>
      </div>
      <hr />
    </header>
  );
}

export { Header };