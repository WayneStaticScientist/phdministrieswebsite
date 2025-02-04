import { create } from "zustand"

export interface OfficeInterface {
    title: string,
    location: string,
    phone: string,
    map: string
}
export const useOffices = create<OfficeInterface[]>(() => ([
    {
        title: "P.H.D HQ",
        location: "No. 1 Sherwood Crescent, Cnr. Simon Mazorodze, Waterfalls, Harare, Zimbabwe",
        phone: "+263772473649",
        map: "",
    },
    {
        title: "Hotel",
        location: "168 Smuts Road Prospect",
        phone: "+263783213034",
        map: "",
    },
    {
        title: "Bindura",
        location: "shop Super M Auto Spares 42 RG Mugabe behind Energy Park service station",
        phone: "+263772641464",
        map: "",
    },
    {
        title: "Mutare Sakubva",
        location: "Light Accademy No 87 4th Street",
        phone: "+263775086464",
        map: "",
    },
    {
        title: "Bulawayo",
        location: "Shop No 1 Ramjis Complex Cnr Robert Mugabe & 11th Street",
        phone: "+263774404327",
        map: "",
    },
    {
        title: "Chinhoyi",
        location: "Nyasha Hardware 5361 Midway Street CBD",
        phone: "+263772371241",
        map: "",
    },
    {
        title: "Kadoma",
        location: "Kadoma Industrial site along Bulawayo road",
        phone: "+263777451321",
        map: "",
    },
    {
        title: "Rusape",
        location: "10 Robert Mugabe opposite CBZ",
        phone: "+263778782864",
        map: "",
    },
    {
        title: "Mt Darwin",
        location: "BDP Hall Pfura",
        phone: "+263783880478",
        map: "",
    },
    {
        title: "Gokwe",
        location: "BDP Hall Pfura",
        phone: "+263773306227",
        map: "",
    },
    {
        title: "Chipinge",
        location: "No 20 Joubert Street Chipinge",
        phone: "+263772312744",
        map: "",
    },
    {
        title: "Redcliff",
        location: "Rutendo Backyard along Main Road to Mutenga Shopping Centre",
        phone: "+263773306227",
        map: "",
    },
    {
        title: "Kwekwe",
        location: "Mbizo Youth Centre - next bo Mbizo Stadium",
        phone: "+263772312744",
        map: "",
    },
    {
        title: "Masvingo",
        location: "Mucheke Old Rank",
        phone: "no number",
        map: "",
    },
    {
        title: "Mutare City",
        location: "Econet Trade Centre Cubi 27",
        phone: "+263772447111",
        map: "",
    },
    {
        title: "Beitbridge",
        location: "Living Waters Office No 27",
        phone: "+263787314192",
        map: "",
    },
    {
        title: "Mutoko",
        location: "1559 Chizanga Township New Stands",
        phone: "+263773447505",
        map: "",
    },
    {
        title: "Marondera",
        location: "22 Secod Street next to Dunchip",
        phone: "+263775282022",
        map: "",
    },
    {
        title: "Kariba",
        location: "no address",
        phone: "+263778303664",
        map: "",
    },
    {
        title: "Chegutu",
        location: "Wlfare Centre",
        phone: "+263782835545",
        map: "",
    },
    {
        title: "Mhangura",
        location: "Flat No 1 6th Avenue",
        phone: "no phone number",
        map: "",
    },
    {
        title: "Chirundu",
        location: "Stand No 386 Chirundu New Stands",
        phone: "no phone number",
        map: "",
    },
]))

export const useOfficesInternational = create<OfficeInterface[]>(() => ([
    {
        title: "Capetown Office:",
        location: "249 vootrakker road Belleville, Cape Town",
        phone: "+27 78 672 4449",
        map: "",
    },
    {
        title: "Australia",
        location: "158 crossway avenue Tarneit 3029 158 crossway avenue Tarneit 3029",
        phone: "+61 404396052",
        map: "",
    },
]))