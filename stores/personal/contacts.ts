export interface MinistryContacts {
    number: string,
    fomarted: string
}
export interface SocialMediaHandle {
    url: string
}
export const MINISTRY_MAIL = "info@phdministries.org"
export const MINISTRY_CONTACTS: MinistryContacts[] = [
    {
        number: "+263773443049",
        fomarted: "+263 773 443 049"
    },
    {
        number: "+263780247531",
        fomarted: "+263 780 247 531"
    },
    {
        number: "+263780247532",
        fomarted: "+263 780 247 532"
    },
    {
        number: "+263783357183",
        fomarted: "+263 783 357 183"
    },

]
export const SocialMediaHandles = {
    facebook: <SocialMediaHandle>{
        url: "https://www.facebook.com/prophetmagayaministries"
    },
    twitter: <SocialMediaHandle>{
        url: "https://x.com/prophetw_magaya"
    },
    instagram: <SocialMediaHandle>{
        url: "https://www.instagram.com/prophetw.magaya/"
    },
    youtube: <SocialMediaHandle>{
        url: "https://www.youtube.com/channel/UCEHG5TRrZqplawb-J1z1bcQ"
    }
}