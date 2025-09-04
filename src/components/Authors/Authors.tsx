'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import styles from './authors.module.scss'

const authors = [
	{
		id: 1,
		name: 'РОМАН АРТЮХОВ',
		role: 'КОМПОЗИТОР',
		image: '/RomanArtuhov.jpg',
	},
	{
		id: 2,
		name: 'НИКОЛАЙ АНДРОСОВ',
		role: 'РЕЖИССЕР, АВТОР СЦЕНАРИЯ',
		image: '/NikolaiAndrosov.jpg',
	},
]

const artists = [
	{
		id: 3,
		name: 'ПЕТР ПЕТРОВИЧ',
		role: 'АКТЕР (ИВАН ИВАНОВИЧ)',
		image: '/PetrPetrovich.png',
	},
	{
		id: 4,
		name: 'ВАЛЕРИЙ ВАЛИ',
		role: 'АКТЕР (ИВАН ИВАНОВИЧ)',
		image: '/Valeriy.jpg',
	},
]

export const Authors = () => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(true)

	const updateScrollButtons = () => {
		const slider = sliderRef.current
		if (!slider) return

		const { scrollLeft, scrollWidth, clientWidth } = slider
		setCanScrollLeft(scrollLeft > 0)
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
	}

	const scrollLeft = () => {
		const slider = sliderRef.current
		if (!slider) return

		const cardWidth = 412 + 20 // ширина карточки + gap
		slider.scrollBy({
			left: -cardWidth,
			behavior: 'smooth',
		})
	}

	const scrollRight = () => {
		const slider = sliderRef.current
		if (!slider) return

		const cardWidth = 412 + 20 // ширина карточки + gap
		slider.scrollBy({
			left: cardWidth,
			behavior: 'smooth',
		})
	}

	// Обработчик для тач-событий (тачпад)
	useEffect(() => {
		const slider = sliderRef.current
		if (!slider) return

		const handleWheel = (e: WheelEvent) => {
			// Проверяем, что это тач-событие (deltaY обычно больше для тачпада)
			const isTouchEvent = Math.abs(e.deltaY) > 50 || e.deltaMode === 0

			if (!isTouchEvent) return

			const { scrollLeft, scrollWidth, clientWidth } = slider
			const isScrollingRight = e.deltaY > 0
			const isScrollingLeft = e.deltaY < 0

			// Проверяем границы скролла
			const buffer = 5
			const isAtStart = scrollLeft <= buffer
			const isAtEnd = scrollLeft >= scrollWidth - clientWidth - buffer

			// Если пытаемся скроллить вправо, но уже в конце - разрешаем скролл страницы
			if (isScrollingRight && isAtEnd) {
				return // Не preventDefault, позволяем скроллить страницу
			}

			// Если пытаемся скроллить влево, но уже в начале - разрешаем скролл страницы
			if (isScrollingLeft && isAtStart) {
				return // Не preventDefault, позволяем скроллить страницу
			}

			// В остальных случаях скроллим слайдер
			e.preventDefault()
			slider.scrollLeft += e.deltaY
		}

		slider.addEventListener('wheel', handleWheel, { passive: false })

		return () => {
			slider.removeEventListener('wheel', handleWheel)
		}
	}, [])

	return (
		<section className={styles.authors} id="authors">
			<div className={styles.authors__container}>
				{/* Кнопка "Влево" */}
				{canScrollLeft && (
					<button
						className={`${styles.authors__navButton} ${styles.authors__navButton_left}`}
						onClick={scrollLeft}
						aria-label="Прокрутить влево"
					>
						←
					</button>
				)}

				{/* Кнопка "Вправо" */}
				{canScrollRight && (
					<button
						className={`${styles.authors__navButton} ${styles.authors__navButton_right}`}
						onClick={scrollRight}
						aria-label="Прокрутить вправо"
					>
						→
					</button>
				)}

				<div
					className={styles.authors__slider}
					ref={sliderRef}
					onScroll={updateScrollButtons}
				>
					{/* Категория "Авторы" */}
					<div className={styles.authors__firstSection}>
						<div className={styles.authors__category}>
							<h2 className={styles.authors__title}>АВТОРЫ:</h2>
						</div>

						{/* Авторы */}
						{authors.map((author) => (
							<div key={author.id} className={styles.authors__card}>
								<div className={styles.authors__image}>
									<Image
										src={author.image}
										alt={author.name}
										width={412}
										height={584}
									/>
								</div>
								<div className={styles.authors__info}>
									<h3 className={styles.authors__name}>{author.name}</h3>
									<p className={styles.authors__role}>{author.role}</p>
								</div>
							</div>
						))}
					</div>

					{/* Категория "Артисты" */}
					<div className={styles.authors__secondSection}>
						<div className={styles.authors__category}>
							<h2 className={styles.authors__title}>АРТИСТЫ:</h2>
						</div>

						{/* Артисты */}
						{artists.map((artist) => (
							<div key={artist.id} className={styles.authors__card}>
								<div className={styles.authors__image}>
									<Image
										src={artist.image}
										alt={artist.name}
										width={412}
										height={584}
									/>
								</div>
								<div className={styles.authors__info}>
									<h3 className={styles.authors__name}>{artist.name}</h3>
									<p className={styles.authors__role}>{artist.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
