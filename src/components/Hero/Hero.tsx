'use client'

import { useState, useEffect } from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'

export const Hero = () => {
	const [imageSrc, setImageSrc] = useState('/HeroImage.png')

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 770) {
				setImageSrc('/HeroSmall.png')
			} else {
				setImageSrc('/HeroImage.png')
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<section className={styles.hero}>
			<Image
				src={imageSrc}
				alt="Hero background"
				className={styles.hero__image}
				width={1920}
				height={1080}
				priority
			/>
		</section>
	)
}
