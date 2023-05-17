import React from 'react';
import PropTypes from 'prop-types';

const Profil = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{fullName}</h2>
      <p>Bio: {bio}</p>
      <p>Profession: {profession}</p>
      {children}
      <button  onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profil.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profil.defaultProps = {
  fullName: 'Foulen Ben Foulen',
  bio: 'No bio available',
  profession: 'Unknown',
};

export default Profil;
