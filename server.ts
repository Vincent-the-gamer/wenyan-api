/**
 * Author: Vincent-the-gamer
 * GitHub: https://github.com/Vincent-the-gamer
 * Bilibili: https://space.bilibili.com/3342738
 */
import fs from "fs"
import express from "express"
import path from "path"
import { exec } from "shelljs"
import getRunCodeCommand from "./utils/getRunCodeCommand"

const app = express()

// parse the request body of method post
app.use(express.json())


async function writeFile(content: string) {
    const path = "./src/main.wy"

    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) {
                reject(err.message)
            }
            resolve(`File has been written successfully in ${path}`)
        })
    })
}


// cross origin --- disable this if you are using nginx to proxy pass this server
app.all("*", function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'content-type')
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200)
    else
        next()
})


app.post("/", async (req: any, res: any) => {
    const wenyanCode = req.body.code
    // Write your Wenyan code into src/main.wy
    await writeFile(wenyanCode)

    const runCodeCmd = getRunCodeCommand(path.resolve(__dirname, `./src/main.wy`))

    // Run your code
    exec(runCodeCmd, (stdout: string, stderr: string) => {
        if (stderr) {
            res.end( JSON.stringify({ data: stderr }) )
        }
        else {
            res.end( JSON.stringify({ data: stdout }) )
        }
     })
})


/**
 * main
 */
const host = "0.0.0.0"
const port = 8080

app.listen(port, () => {
    console.log(`Server started: http://${host}:${port}`)
})