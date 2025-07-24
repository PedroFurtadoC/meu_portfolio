import { create } from "zustand";

// Define o formato do estado para controlar o modal do Calendly
interface CalendlyStore {
	toggleCalendly: () => void; // Função para alternar a visibilidade
	isCalendlyOpen: boolean; // Indica se o Calendly está aberto
}

// Cria a store com Zustand para controlar o estado do Calendly
const useCalendlyStore = create<CalendlyStore>((set) => ({
	isCalendlyOpen: false, // Estado inicial: Calendly fechado

	toggleCalendly() {
		// Aguarda 100ms antes de alternar o estado
		setTimeout(() => {
			set((oldState) => ({ isCalendlyOpen: !oldState.isCalendlyOpen }));
		}, 100);
	},
}));

export default useCalendlyStore; // Exporta o hook para ser usado nos componentes
