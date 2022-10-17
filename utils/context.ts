import {createContext} from "react";
import {AppContextInterface} from "./interfaces";


export const AppCtx = createContext<AppContextInterface>({
    app: {
        sets: [],
        stats: [],
    }, setApp: () => {}
});

