import { WygPackage } from "../types"
import registry from "./registry"
import path from "path"
import { exec } from "shelljs"
import fs from "fs"

// find a wyg package
export function findPkg(pkg: string): WygPackage | undefined {
    return registry.find(item => item.name === pkg) || registry.find(item => item.aliases.includes(pkg))
}

// install a wyg package
export function installPkg(wygPkg: WygPackage) {
    //git clone repo
    console.log(`Starting git clone ${wygPkg.gitRepo}:`)
    const cmd = `git clone ${wygPkg.gitRepo} ${path.resolve(__dirname, `../src/${wygPkg.name}`)}`
    exec(cmd, (stderr) => {
        if (stderr) {
            console.log(stderr)
        } else {
            // check dependencies
            fs.readFile( path.resolve(__dirname, `../src/${wygPkg.name}/序.wy`), {encoding: "utf-8"}, (err, data) => {
                const pattern: RegExp = /吾嘗觀「「(.*?)」」之書/g
                let matchList: RegExpMatchArray | null = data.match(pattern)
                if(matchList !== null && matchList.length > 0){
                    let depList: string[] = []
                    depList = matchList.map(item => 
                        item.replace("吾嘗觀「「", "").replace("」」之書", "")
                    )
                    // install dependencies
                    console.log("Installing Dependencies...\n")
                    depList.forEach(dep => {
                        if(findPkg(dep)){
                            installPkg(findPkg(dep)!)
                        }
                    })
                }
            })
        }
    })
}

// uninstall a wyg package
export function uninstallPkg(wygPkg: WygPackage){
    console.log(`Uninstalling ${wygPkg.name}....`)
    const pkgPath = path.resolve(__dirname, `../src/${wygPkg.name}`)
    fs.rm(
        pkgPath, 
        { recursive: true },
        (err) => {
            if(err) console.log(err)
            else console.log(`${wygPkg.name} is successfully uninstalled!`)
        }
    )
}