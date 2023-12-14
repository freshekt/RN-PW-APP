require('dotenv').config({ path: '.env' })
console.log('EXPO_ROUTER_APP_ROOT: ' + process.env.EXPO_ROUTER_APP_ROOT)
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {

      production: {
        plugins: ['react-native-paper/babel','expo-router/babel'],
      }
    },
  };
};
