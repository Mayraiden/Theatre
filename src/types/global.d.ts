declare global {
	interface Window {
		YandexTicketsDealer: {
			push: (args: unknown[]) => void
			open: () => void
		}
	}
}

export {}
