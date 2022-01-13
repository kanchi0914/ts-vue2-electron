interface IDocument {
    title: string
    comment: string
    tags: []
    createdAt: Date
    updatedAt: Date
    text: string
}

export class Doc implements IDocument {
    comment: string;
    createdAt: Date;
    tags: [];
    text: string;
    title: string;
    updatedAt: Date;

    constructor(text = '', title =  '', comment = '') {
        this.text = 'HI!!'
        this.title = title
        this.comment = comment
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.tags = []
    }
}
