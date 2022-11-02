import React from 'react';

const ContentContext = React.createContext(
  {
    showModal: false,
    modalHeader: "Hi",
    modalBody: "Apple",
    modalImage: <div />
  });

export default ContentContext;
