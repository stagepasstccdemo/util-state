import create from "zustand";
import { combine } from "zustand/middleware";
import { TicketsDTO } from "./models/Ticket";

type TicketDataInfo = {
  ticketInfo: TicketsDTO | {};
  userInfo: any;
  redirectUrl: string | null; // Define the new redirectUrl property
};

type CheckoutTicketData = {
  setTicketInfo: (ticketInfo: any) => void;
  setUserInfo: (userInfo: any) => void;
  setRedirectUrl: (redirectUrl: string | null) => void; // Add a setter for redirectUrl
};

const store = combine<TicketDataInfo, CheckoutTicketData>(
  {
    ticketInfo: {},
    userInfo: {},
    redirectUrl: null,
  },
  (set) => ({
    setTicketInfo: (ticketInfo) => set({ ticketInfo }),
    setUserInfo: (userInfo) => set({ userInfo }),
    setRedirectUrl: (redirectUrl) => set({ redirectUrl }),
  })
);

export const useStore = create(store);
