import * as esbuild from "esbuild";
import postcss from "esbuild-postcss";

try {
  const context = await esbuild.context({
    entryPoints: ["./src/client/index.tsx"],
    bundle: true,
    minify: true,
    outfile: "public/static/bundle.js",
    plugins: [postcss()],
  });

  await context.watch();
  console.log("[ESBuild]: client bundled and watching");

  const { host, port } = await context.serve({
    servedir: "public",
  });

  console.log(`[ESBuild]: host reload at http://${host}:${port}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}
