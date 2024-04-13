//@ts-nocheck
import { readFileSync, writeFileSync } from "fs";
import  Yargs from "yargs";
import { configure, render } from "nunjucks";

type BuildJSONDockerfile = {
  PreInstallCommands: string[];
  InstallCommands: string[],
  PostInstallCommands: string[]
}

type BuildJSON = {
  Dockerfile:BuildJSONDockerfile;
  ServiceName: string,
  ServiceType: string,
}

function main() {
  const argv = Yargs(process.argv.slice(2)).argv;

  const buildPath = argv["config"];

  const configuration = readFileSync(buildPath, {encoding: "UTF-8"});

  const configurationData = JSON.parse(configuration) as BuildJSON;

  configure("templates", {autoescape: true})

  const dockerfile = render("Dockerfile", configurationData)

  writeFileSync("Dockerfile", dockerfile)
}

main()