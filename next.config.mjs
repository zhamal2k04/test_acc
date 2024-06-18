/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["next-on-netlify"]);

module.exports = {
  // your other configurations here
  trailingSlash: true, // try setting this to true if it's not
};

module.exports = withPlugins([withTM], {
  // your other configurations here
});

export default nextConfig;
