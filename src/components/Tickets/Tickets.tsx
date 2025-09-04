'use client'

import styles from './tickets.module.scss'

export const Tickets = () => {
	const handleTicketClick = () => {
		if (typeof window !== 'undefined' && window.YandexTicketsDealer) {
			window.YandexTicketsDealer.push([
				'getDealer',
				function (dealer: {
					open: (config: { id: string; type: string }) => void
				}) {
					dealer.open({
						id: '95544264-efa2-4d6d-89ad-9e0c8496f39c',
						type: 'tour',
					})
				},
			])
		}
	}

	return (
		<section className={styles.tickets} id="tickets">
			<div className={styles.tickets__container}>
				<div className={styles.tickets__content}>
					<div className={styles.tickets__left}>
						<h2 className={styles.tickets__title}>БИЛЕТЫ НА МЮЗИКЛ</h2>

						<p className={styles.tickets__subtitle}>
							У ВАС ЕЩЕ ОСТАЛИСЬ СОМНЕНИЯ - ИДТИ НА МЮЗИКЛ ИЛИ НЕТ?
						</p>

						<p className={styles.tickets__description}>
							Более 100 человек принимали участие в&nbsp;создании шоу
							&laquo;Русская мечта&raquo;. Актеры, акробаты, певцы, музыканты,
							декораторы и&nbsp;костюмеры трудились на&nbsp;протяжении многих
							месяцев, чтобы вы&nbsp;увидели действительно впечатляющее шоу!
							Это&nbsp;ли не&nbsp;гарантия качества?
						</p>

						<button className={styles.tickets__btn} onClick={handleTicketClick}>
							КУПИТЬ БИЛЕТЫ
						</button>

						<div className={styles.tickets__price}>
							<p className={styles.tickets__priceText}>
								Стоимость билетов на мюзикл <br />
								от 1000 до 3500 руб
							</p>
						</div>

						<p className={styles.tickets__contact}>
							Вы также можете заказать билеты по телефону 8(495)22-595-77,
							<br />
							приобрести их в кассе КЦ «Москвич» или на сайтах билетных
							операторов.
						</p>
					</div>

					<div className={styles.tickets__right}>
												<img 
							src="./shariki.png" 
							alt="Шарики" 
							className={styles.tickets__balloons}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
