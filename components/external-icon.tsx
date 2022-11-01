import React from 'react';
import { Link } from 'react-router-dom';

const ExternalIcon = (props: { iconURL: string; externalURL: string; id: string }) => {
  const { iconURL, externalURL, id } = props;

  return (
    <Link to={externalURL}>
      <img src={iconURL} alt="External link icon" id={id} />
    </Link>
  );
};

export default ExternalIcon;
