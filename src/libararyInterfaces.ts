export interface Person {
    id: number,
    name: string,
    bookIDs: number[]
}

export interface Copy {
    borrowedBy?: number,
    borrowedDate?: Date,
    coverImage?: string
}

export interface Book {
    id: number,
    title: string,
    author: string,
    isbn: number,
    description: string,
    isOwned: boolean,
    haveRead: boolean,
    seriesMember?: number,
    pageCount?: number,
    publishDate?: Date,
    copies: Copy[]
}

export interface SeriesMember {
    order: number,
    bookID: number
}

export interface Series {
    id: number,
    name: string,
    author: string,
    isFinished: boolean,
    members: SeriesMember[],
    fullyOwned: boolean,
    fullyRead: boolean
}

export interface Shelf {
    id: number,
    order: number,
    name: string,
    bookIDs: number[]
}

export interface Library {
    id: number,
    name: string,
    shelfIDs: number[]
}
