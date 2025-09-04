declare global {
	interface Window {
		YandexTicketsDealer: {
			push: (args: any[]) => void
			open: () => void
		}
	}
}

export {}
