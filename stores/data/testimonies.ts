import { create } from "zustand"

export interface Testimonies {
    date: string
    path: string
    title: string,
    image: string,
    width: number,
    height: number,
    summary: string,
    description: string,
}
export const useTestimonies = create<Testimonies[]>(() => ([
    {
        width: 800,
        height: 694,
        title: "Heart transplant reversed",
        summary: "Heart transplant reversed after the anointed touch of Prophet Dr W. Magaya",
        image: "/assets/img/testimonies/tid.jpg",
        date: "December 1o 2019",
        description: "",
        path: ""
    },
    {
        width: 666,
        height: 999,
        title: "Leg ulcer",
        summary: "Leg ulcer healed after a guest house visit",
        image: "/assets/img/testimonies/tid2.jpg",
        date: "December 3 2019",
        description: "",
        path: ""
    },
    {
        width: 800,
        height: 694,
        title: "Testicles popped out",
        summary: "Distance proved no barrier when kid's testicles popped out",
        image: "/assets/img/testimonies/tid3.jpg",
        date: "December 26 2019",
        description: "",
        path: ""
    }
]))