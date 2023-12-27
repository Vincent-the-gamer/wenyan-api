/**
 * Wyg CLI
 */
import pkg from "../package.json"
import { program } from "commander"
import { exec } from "shelljs"
import { findPkg, installPkg, uninstallPkg } from "./packageHandler"
import getRunCodeCommand from "../utils/getRunCodeCommand"

program.name("wyg")
       .version(pkg.version)
       .helpOption()

// install package
program.command("install <pkg>")
       .aliases(["i", "add"])
       .description("install a wyg package.")
       .action((pkg) => {
            let foundPkg = findPkg(pkg)
            if(foundPkg){
                // install package
                installPkg(foundPkg)
            } else {
                console.log(`Package ${pkg} not found!`)
            }
       })

// uninstall package
program.command("uninstall <pkg>")
       .aliases(["remove", "rm"])
       .description("Uninstall a wyg package.")
       .action((pkg) => {
            let foundPkg = findPkg(pkg)
            if(foundPkg){
                uninstallPkg(foundPkg)
            } else {
                console.log(`Package ${pkg} not found!`)
            }
       })

// run wenyan code
program.command("run <codeFilePath>")
       .description("Run wenyan code.")
       .action((codeFilePath) => {
         const runCodeCmd = getRunCodeCommand(codeFilePath)
         // Run your code
         exec(runCodeCmd)
       })
       

program.parse()