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

interface I_Stat {
    setId: number;
    createdAt: Date;
    totalQuestions: number;
    totalAnsweredQuestions: number;
    totalIncorrectAnsweredQuestions: number;
    totalUnansweredQuestions: number;
    answeredRatio: number;
}

interface AppContextInterface {
    app: {
        sets: Array<I_Set>;
        stats: Array<I_Stat>;
    }
    setApp: any
}



export type {
    AppContextInterface,
    I_Set,
    I_Card,
    I_Stat
}
