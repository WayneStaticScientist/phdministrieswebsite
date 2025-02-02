import { create } from "zustand"

export interface BooksInterface {
    title: string
    image: string
    downloadUrl: string
}
export const useBooksStates = create<BooksInterface[]>(() => (
    [
        {
            title: "40 laws of Success",
            image: "/assets/img/icon/book1.png",
            downloadUrl: ""
        },
        {
            title: "Engulfed Success through mentorship",
            image: "/assets/img/icon/book2.png",
            downloadUrl: ""
        },
        {
            title: "The CEO's mind",
            image: "/assets/img/icon/book3.png",
            downloadUrl: ""
        },
    ]
))