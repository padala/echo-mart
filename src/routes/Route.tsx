import React from 'react';
import { RouteProps as ReactRouteProps, Route as ReactRoute, Redirect } from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
  // eslint-disable-next-line react/require-default-props
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate = false, component: Component, ...rest }: RouteProps): JSX.Element => {
  // your can put your logic here to check if user is authenticated
  // with prop isPrivate and handle const below
  const authenticated = false;

  return (
    <ReactRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location: from }) => {
        return isPrivate === authenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/restrict',
              state: { from },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
