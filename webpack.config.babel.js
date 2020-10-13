export default (env) => {
  const pathModule = env.production ? 'production' : 'development';
  return require(`./compiler/${pathModule}.js`)
};
