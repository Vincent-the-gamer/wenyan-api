import path from "path";
import registry from "../wyg/registry";
import fs from "fs"

const ignoreList: string[] = registry.map(pkg => "src/" + pkg.name)

const content = ".DS_Store\nnode_modules\n" + ignoreList.join("\n")

fs.writeFile(path.resolve(__dirname, "../.gitignore"), content, (err) => {
    if(err) console.log(err)
})