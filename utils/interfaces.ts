interface I_Card {
    id: number;
    front: string;
    back: string;
}

interface I_Set {
    id: number;
    name: string;
    cards: Array<I_Card>;
}

interface AppContextInterface {
    app: {
        sets: Array<I_Set>;
    }
    setApp: any
}



export type {
    AppContextInterface,
    I_Set,
    I_Card
}
