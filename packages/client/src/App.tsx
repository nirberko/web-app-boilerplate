import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

function Routes() {
  const element = useRoutes([
    {
      path: '/',
      element: <div>hello</div>,
    },
  ]);

  return element;
}

export function App(): React.ReactElement {
  return (
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
}
