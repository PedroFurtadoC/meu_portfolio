import { create } from "zustand";

interface HeaderAnchorStore {
	activeAnchor: string;
	setActiveAnchor: (anchor: string) => void;
}

const useHeaderAnchorStore = create<HeaderAnchorStore>((set) => ({
	activeAnchor: "",
	setActiveAnchor(anchor) {
		return set({ activeAnchor: anchor });
	},
}));

export default useHeaderAnchorStore;
