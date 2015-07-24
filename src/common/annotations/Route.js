module.exports = {
  Routes: routes => target => {
    target.$routeConfig = routes;
  },
  Route: route => target => {
    target.$route = route;
  }
};

