export const shuffleArray = (array: any) => {
    return array.map((value: any) => ({value, sort: Math.random()}))
        .sort((a: any, b: any) => a.sort - b.sort)
        .map(({value}: { value: any }) => value)
}
