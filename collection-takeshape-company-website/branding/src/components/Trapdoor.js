import React from 'react';
import { Link } from 'gatsby';

const Trapdoor = ({ heading, text, button = {} }) => {
  const { url: buttonUrl, text: buttonText } = button;
  return (
    <div className="trapdoor">
      <div className="container">
        <h1>{ heading }</h1>
        <p>{ text }</p>
        <Link to={ buttonUrl } className="button">{ buttonText }</Link>
      </div>
    </div>
  )
}

export default Trapdoor;