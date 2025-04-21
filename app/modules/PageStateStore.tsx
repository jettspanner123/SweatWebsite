import {create} from "zustand/react";

export interface PageStateInterface {
    selectedPageLink: string;
    setSelectedPageLink: (pageLink: string) => void;
}

export const PageStateStore = create<PageStateInterface>((set) => ({
    selectedPageLink: "/",
    setSelectedPageLink: (pageLink: string) => set((state) => ({selectedPageLink: pageLink})),
}));
