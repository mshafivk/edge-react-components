import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    resolve({ extensions: [".mjs", ".js", ".jsx", ".json"] }),
    commonjs(),
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
