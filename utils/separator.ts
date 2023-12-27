import useCurrentPlatform from "./useCurrentPlatform";

const platform = useCurrentPlatform()

const separator = platform === "Windows" ? "\\" : "/"

export default separator