import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (

  <header>
    <nav>
      <div>
        <span className="leftNav">
          <FontAwesomeIcon icon={faChevronLeft} />
          Africa
        </span>
      </div>
      <div>
        <span className="middleNav">Directory</span>
      </div>
      <div>
        <span className="rightNav">
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faCog} />
        </span>
      </div>
    </nav>
  </header>
);

export default Navbar;
