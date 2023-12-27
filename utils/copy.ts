import fs from "fs"
import path from "path"
import separator from "./separator"

const sourcePath: string = path.resolve(__dirname, "../node_modules/.bin/藏書樓")
const destPath: string = path.resolve(__dirname, "../src")

if( fs.existsSync( sourcePath ) ){
    const packages = fs.readdirSync(sourcePath)
    packages.forEach(pkg => {
        fs.copyFileSync(sourcePath + separator + pkg, destPath + separator + pkg)
    })
}
   
