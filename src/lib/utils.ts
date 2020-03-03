import { RouteConfig } from "./RouteConfig"

export const getPath = (suffix: string) => {
    return RouteConfig.urlPrefix + '/' + suffix;
}