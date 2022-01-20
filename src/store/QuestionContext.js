import React from 'react';

const ContentContext = React.createContext(
  {
    setShowModal: () => {},
    setModalText: () => {}
  }
);

export default ContentContext;
