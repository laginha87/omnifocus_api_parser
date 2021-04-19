var glob = require("glob");
var path = require("path");
var fs = require("fs");

function changeExtension(file, extension) {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + extension);
}

let result = require("esbuild").buildSync({
  entryPoints: glob.sync("Plugins/*.ts"),
  write: false,
  bundle: true,
  platform: "node",
  outdir: "Build",
});

for (let out of result.outputFiles) {
  const fsContent = Buffer.from(out.contents, "utf-8").toString();
  const basename = path.basename(out.path, path.extname(out.path));
  const manifest = {
    author: "Author Name",
    targets: ["omnifocus"],
    type: "action",
    identifier: `com.mycompany.${basename}`,
    version: "0.1",
    description: "A plug-in that...",
    label: basename,
    mediumLabel: basename,
    paletteLabel: basename,
  };
  const output = [
    "/*" +  JSON.stringify(manifest) + "*/",
    "(() => {",
    fsContent,
    " return action",
    "})();",
  ].join("\n");
  fs.writeFile(changeExtension(out.path, ".omnijs"), output, (err) => {
    console.error(err);
  });
}
