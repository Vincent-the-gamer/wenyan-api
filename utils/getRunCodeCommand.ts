import path from "path"
import useCurrentPlatform from "./useCurrentPlatform"

export default function getRunCodeCommand(codeFilePath: string){
    const wenyanPath: string = path.resolve(__dirname, `../node_modules/.bin/wenyan`)

    const platform = useCurrentPlatform()
    const shellCmd = platform === "Windows" ? `sh ${wenyanPath} ${codeFilePath}`
                                            : `${wenyanPath} ${codeFilePath}`
    return shellCmd
}