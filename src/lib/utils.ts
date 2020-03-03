import { config } from "./Config"

export const getPath = (suffix: string) => {
    return config.urlPrefix + '/' + suffix;
}