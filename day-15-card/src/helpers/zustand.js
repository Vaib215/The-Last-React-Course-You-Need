import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCard = create(persist((set)=> ({
    cardholdername: "John",
    cardnumber: "0000000000000000",
    expmonth: "08",
    expyear: 29,
    cvv: 741,
    setName: (cardholdername) => set({
        cardholdername
    }),
    setNumber: (cardnumber) => set({
        cardnumber
    }),
    setMonth: (expmonth) => set({
        expmonth
    }),
    setYear: (expyear) => set({
        expyear
    }),
    setCvv: (cvv) => set({
        cvv
    })
}), {
    name: 'card-details',
    storage: createJSONStorage(()=>localStorage)
}))