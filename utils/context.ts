import {createContext} from "react";
import {AppContextInterface} from "./interfaces";


export const AppCtx = createContext<AppContextInterface | null>({
    app: {
        sets: []
    }, setApp: () => {}
});

