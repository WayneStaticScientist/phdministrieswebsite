import { create } from "zustand"

export interface FaqsInterface {
    title: string,
    description: string
}
export const allFaqs = create<FaqsInterface[]>(() => (
    [
        {
            title: "WHAT IS THE PROCEDURE BEFORE VISITING PHD MINISTRIES?",
            description: `If you would like to visit PHD Ministries, simply go to the Questionnaire, fill it out in detail and submit it.
            Make sure your complete details are included.
            Please note, you must wait to receive confirmation of your visit from us before making any travel arrangements/ flight bookings.
            All communication with PHD Ministries in regards to bookings should be through the following email address: bookings@phdministries.org
            When planning your visit, we advise you to take into consideration that the prayer line at PHD Ministries normally takes place every Monday.
            Also, please note that any form of smoking or alcohol consumption is prohibited on the church premises.`
        },
        {
            title: "WILL I GET TO SEE PROPHET W MAGAYA?",
            description: `Yes indeed. You will get to see and talk to Prophet W. Magaya on a one on one basis`
        },
        {
            title: "WHAT ARE THE ARRANGEMENTS OF FOOD AND ACCOMODATION?",
            description: "You will be provided with food and Accommodation"
        },
        {
            title: "WHAT SHOULD I BRING?",
            description: "1 passport size photo"
        }
    ]
))