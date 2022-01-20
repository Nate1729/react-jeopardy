import React from 'react';

const ContentContext = React.createContext(
  {
    showModal: false,
    modalHeader: "Hi",
    modalBody: "Apple"
  });

export default ContentContext;
