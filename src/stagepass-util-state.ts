import create from "zustand";
import { combine } from "zustand/middleware";
import { TicketsDTO } from "./models/Ticket";

type TicketDataInfo = {
  ticketInfo: TicketsDTO | {};
  userInfo: any;
};

type CheckoutTicketData = {
  setTicketInfo: (ticketInfo: any) => void;
  setUserInfo: (userInfo: any) => void;
};

const store = combine<TicketDataInfo, CheckoutTicketData>(
  {
    ticketInfo: {},
    userInfo: {},
  },
  (set) => ({
    setTicketInfo: (ticketInfo) => set({ ticketInfo }),
    setUserInfo: (userInfo) => set({ userInfo }),
  })
);

export const useStore = create(store);
