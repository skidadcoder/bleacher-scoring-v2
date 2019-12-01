/**
 * Index refers to the active child route in the routes array.
 */
export const getCurrentStateName = (state) => {
    // @ts-ignore
    return findCurrentRoute(state).routeName;
  };
  
  export const getCurrentRouteState = (navigation) => {
    // @ts-ignore
    return findCurrentRoute(navigation.state);
  };
  
  export const getCurrentRouteIndex = (navigation) => {
    return navigation.state.index;
  };
  
  const findCurrentRoute = (state) => {
    if (state.routes && state.routes.length !== 0) {
      return findCurrentRoute(state.routes[state.index]);
    }
  
    return state;
  };
  
  export const isRootRoute = (index) => {
    return index === 0;
  };
  