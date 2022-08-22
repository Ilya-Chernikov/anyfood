export const WithAuthorize = ({
  ComponentForAuthorized,
  ComponentForUnauthorized,
}) => {
  const WrappedComponentWithAuthorization = (props) => {
    // check is user authorized
    const isAuthorized = true;

    if (isAuthorized) {
      WrappedComponentWithAuthorization.displayName = `WithAuthorize${ComponentForAuthorized.name}`;
      return <ComponentForAuthorized {...props} />;
    }

    WrappedComponentWithAuthorization.displayName = `WithAuthorize${ComponentForUnauthorized.name}`;
    return <ComponentForUnauthorized {...props} />;
  };

  return WrappedComponentWithAuthorization;
};
