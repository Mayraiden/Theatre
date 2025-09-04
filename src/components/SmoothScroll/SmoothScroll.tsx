'use client'

import { useEffect } from 'react'

// Кастомная функция плавного скролла
const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
	const startPosition = window.pageYOffset
	const distance = targetPosition - startPosition
	let startTime: number | null = null

	const animation = (currentTime: number) => {
		if (startTime === null) startTime = currentTime
		const timeElapsed = currentTime - startTime
		const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
		window.scrollTo(0, run)
		if (timeElapsed < duration) requestAnimationFrame(animation)
	}

	requestAnimationFrame(animation)
}

// Функция easing для плавной анимации
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
	t /= d / 2
	if (t < 1) return (c / 2) * t * t + b
	t--
	return (-c / 2) * (t * (t - 2) - 1) + b
}

export const SmoothScroll = () => {
	useEffect(() => {
		// Принудительно используем JavaScript для всех браузеров
		const handleClick = (e: Event) => {
			const target = e.target as HTMLElement
			const link = target.closest('a[href^="#"]') as HTMLAnchorElement

			if (link) {
				e.preventDefault()
				const href = link.getAttribute('href')

				if (href && href !== '#') {
					const targetElement = document.querySelector(href)

					if (targetElement) {
						const headerHeight = 80
						const elementPosition = targetElement.getBoundingClientRect().top
						const offsetPosition =
							elementPosition + window.pageYOffset - headerHeight

						console.log('Scrolling to:', offsetPosition) // Для отладки

						// Пробуем нативный smooth scroll
						window.scrollTo({
							top: offsetPosition,
							behavior: 'smooth',
						})

						// Fallback: если нативный не работает, используем кастомную анимацию
						setTimeout(() => {
							const currentPosition = window.pageYOffset
							if (Math.abs(currentPosition - offsetPosition) > 10) {
								console.log('Using custom animation')
								smoothScrollTo(offsetPosition)
							}
						}, 100)
					}
				}
			}
		}

		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])

	return null
}
