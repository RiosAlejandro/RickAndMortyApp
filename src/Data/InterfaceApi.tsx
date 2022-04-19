export interface InterfaceApi {
    info: {
        count: number,
        pages: number,
        next:  string ,
        prev:  null
        },
    results: [
            {
            id: number,
            name: string,
            status: string,
            species: string,
            type: string,
            gender: string,
            origin: {
            name: string,
            url: string
            },
            location: {
                name: string,
                url: string
            },
            image: string,
            episode: [],
            }
    ]   
}

