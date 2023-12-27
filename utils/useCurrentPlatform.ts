/**
 * Author: Vincent-the-gamer
 * GitHub: https://github.com/Vincent-the-gamer
 * Bilibili: https://space.bilibili.com/3342738
 */
import os from "os"

export default function useCurrentPlatform() {
    switch(os.platform()){
        case "win32":
            return "Windows"
        case "darwin":
            return "macOS"
        case "linux":
            return "linux"
        default:
            break;
    }
}