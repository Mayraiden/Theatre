'use client'

import Image from 'next/image'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header} role="banner">
			<div className={styles.header__container}>
				<div className={styles.header__logo}>
					<a href="#" aria-label="Главная страница ТРИУМФ - Продюсерский центр">
						<Image
							src="/logo.svg"
							alt="Логотип ТРИУМФ - Продюсерский центр"
							width="200"
							height="100"
						/>
					</a>
				</div>

				<div className={styles.header__inner}>
					<nav
						className={styles.nav}
						role="navigation"
						aria-label="Главное меню"
					>
						<ul className={styles.nav__list}>
							<li className={styles.nav__item}>
								<a
									href="#about"
									className={styles.nav__link}
									aria-label="Перейти к разделу О мюзикле"
								>
									О МЮЗИКЛЕ
								</a>
							</li>
							<li className={styles.nav__item}>
								<a
									href="#tickets"
									className={styles.nav__link}
									aria-label="Перейти к разделу Билеты"
								>
									БИЛЕТЫ
								</a>
							</li>
							<li className={styles.nav__item}>
								<a
									href="#gallery"
									className={styles.nav__link}
									aria-label="Перейти к разделу Галерея"
								>
									ГАЛЕРЕЯ
								</a>
							</li>
							<li className={styles.nav__item}>
								<a
									href="#contacts"
									className={styles.nav__link}
									aria-label="Перейти к разделу Контакты"
								>
									КОНТАКТЫ
								</a>
							</li>
						</ul>
					</nav>

					<div className={styles.header__right}>
						<div className={styles.header__contact}>
							<Image
								src="phone.svg"
								alt=""
								className=""
								aria-hidden="true"
								width={20}
								height={20}
							/>
							<span aria-label="Телефон для связи">+7 (495) 22-595-77</span>
						</div>

						<button
							type="button"
							className={styles.header__btn}
							aria-label="Купить билет на мюзикл"
							onClick={() => {
								window['YandexTicketsDealer'].push([
									'getDealer',
									function (dealer) {
										dealer.open({
											id: '95544264-efa2-4d6d-89ad-9e0c8496f39c',
											type: 'tour',
										})
									},
								])
							}}
						>
							КУПИТЬ БИЛЕТ
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
