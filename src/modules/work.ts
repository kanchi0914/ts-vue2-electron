interface IWork {
    path: string
    title: string
    author: string
    comment: string
    rating: number
    isFavorite: boolean
    tags: Array<string>
    createdAt: Date
    updatedAt: Date
}

export class Work implements IWork {

    path: string
    title: string
    author: string = ''
    comment: string = ''
    rating: number = 0
    isFavorite: boolean = false
    tags: Array<string> = []
    createdAt: Date  = new Date()
    updatedAt: Date = new Date()

    constructor(path:string) {
        this.path = path
        this.title = path.split('/').pop() ?? path
    }
}
