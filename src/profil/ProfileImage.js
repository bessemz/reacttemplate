import React from 'react';

const ProfileImage = ({ src, alt}) => {
    const imageStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
    
      };

  return <img src={src} alt={alt} style={imageStyle} />;
};

export default ProfileImage;
