const alias = require("@rollup/plugin-alias");
const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const image = require("@rollup/plugin-image");
const { join } = require("path");

const customResolver = resolve({
  extensions: [".ts", ".tsx", ".scss"]
});

module.exports = {
  rollup(config, options) {
    // config.plugins.push(image());
    //
    // config.plugins.push({
    //   plugins: [
    //     alias({
    //       entries: [
    //         {
    //           find: "@",
    //           replacement: "test"
    //         }
    //       ],
    //       customResolver
    //     }),
    //     resolve()
    //   ]
    // });

    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: "default",
          })
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    //Do not treat absolute paths as external modules
    return {
      ...config
    };
  },
};