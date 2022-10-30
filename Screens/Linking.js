const config = {
  screens: {
    News: {
      path: 'news',
    },
    Discover: {
      path: 'discover',
    },
  },
};

const linking = {
  prefixes: ['mychat://'],
  config,
};

export default linking;
