import * as esbuild from "esbuild";

try {
  await esbuild.build({
    entryPoints: ["./src/server/index.ts"],
    bundle: true,
    minify: true,
    platform: "node",
    packages: "external",
    outfile: "build/index.js",
  });

  console.log("[ESBuild]: server bundled successfully");
} catch (err) {
  console.error(err);
  process.exit(1);
}
