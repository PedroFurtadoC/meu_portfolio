import { create } from "zustand";

interface CalendlyStore {
	toggleCalendly: () => void;
	isCalendlyOpen: boolean;
}

const useCalendlyStore = create<CalendlyStore>((set) => ({
	isCalendlyOpen: false,
	toggleCalendly() {
		setTimeout(() => {
			set((oldState) => ({ isCalendlyOpen: !oldState.isCalendlyOpen }));
		}, 100);
	},
}));

export default useCalendlyStore;
