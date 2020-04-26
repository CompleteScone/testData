import { Library, Shelf, Book } from './libararyInterfaces';

const libraries:Library[] = [
    {
        id: 1,
        name: "Main Bookshelf",
        shelfIDs: [
            1,2,3
        ]
    },
    {
        id: 2,
        name: "Fantasy Books",
        shelfIDs: [
            1,4
        ]
    }
];

const shelves:Shelf[] = [
    {
        id: 1,
        order: 1,
        name: "Top Left",
        bookIDs: [
            1,2,3
        ]
    },
    {
        id: 2,
        order: 2,
        name: "Middle Left",
        bookIDs: [
            1,2,3
        ]
    },
    {
        id: 3,
        order: 3,
        name: "Bottom Left",
        bookIDs: [
            1,2,3
        ]
    },
    {
        id: 4,
        order: 2,
        name: "Other Fantasy",
        bookIDs: [
            1,2,3
        ]
    }
]

const books:Book[] = [
    {
        id: 1,
        title: "The Fellowship of the Ring",
        author: "JRR Tolkien",
        isbn: 1234,
        description: "Some Hobbits set off on a big adventure to destroy a ring",
        isOwned: true,
        haveRead: true,
        copies: [
            {}
        ]
    },
    {
        id: 2,
        title: "The Two Towers",
        author: "JRR Tolkien",
        isbn: 1234,
        description: "Some Hobbits get taken to Isengard",
        isOwned: true,
        haveRead: true,
        copies: [
            {}
        ]
    },
    {
        id: 3,
        title: "The Return of the King",
        author: "JRR Tolkien",
        isbn: 1234,
        description: "Some Hobbits destroy a ring",
        isOwned: true,
        haveRead: true,
        copies: [
            {}
        ]
    }
]

export const testData = {
    libraries,
    shelves,
    books
}