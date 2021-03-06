import type { Library, Shelf, Book, Person } from 'entertainmentlibrary/types';

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
        isbn: 9781234567891,
        description: "Some Hobbits set off on a big adventure to destroy a ring",
        isOwned: true,
        haveRead: true,
        copies: [
            {
                borrowedBy: 1,
                borrowedDate: new Date("2020-04-25")
            },
            {
                borrowedBy: 2,
                borrowedDate: new Date("2020-03-20")
            }
        ]
    },
    {
        id: 2,
        title: "The Two Towers",
        author: "JRR Tolkien",
        isbn: 9781234567892,
        description: "Some Hobbits get taken to Isengard",
        isOwned: true,
        haveRead: true,
        copies: [
            {
                borrowedBy: 1,
                borrowedDate: new Date("2020-04-27")
            }
        ]
    },
    {
        id: 3,
        title: "The Return of the King",
        author: "JRR Tolkien",
        isbn: 9781234567893,
        description: "Some Hobbits destroy a ring",
        isOwned: true,
        haveRead: true,
        copies: [
            {}
        ]
    }
]

const people:Person[] = [
    {
        id: 1,
        name: "John Doe",
        bookIDs: [
            1,2
        ]
    },
    {
        id: 2,
        name: "Jane Doe",
        bookIDs: [
            1
        ]
    }
]

export const testData = {
    libraries,
    shelves,
    books,
    people
}