// BlogContext.js
import { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [formattedTime, setFormattedTime] = useState('');

  return (
    <BlogContext.Provider value={{ formattedTime, setFormattedTime }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
