import styles from './contacts.module.scss'

export const Contacts = () => {
	return (
		<section className={styles.contacts} id="contacts">
			<div className={styles.contacts__container}>
				<h2 className={styles.contacts__title}>КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>

				<div className={styles.contacts__content}>
					<div className={styles.contacts__left}>
						<p className={styles.contacts__description}>
							По вопросам проката и постановки мюзиклов:
						</p>
						<span className={styles.contacts__name}>Алексей Пеганов, </span>
						<span className={styles.contacts__email}>
							<a
								href="mailto:peganoc@triumphart.ru"
								className={styles.contacts__link}
							>
								peganoc@triumphart.ru
							</a>
						</span>
					</div>
					<div className={styles.contacts__divider}></div>
					<div className={styles.contacts__right}>
						<p className={styles.contacts__description}>
							По вопросам групповых и корпоративных заказов:
						</p>
						<span className={styles.contacts__name}>Дмитрий Пятибратов, </span>
						<span className={styles.contacts__email}>
							<a
								href="mailto:sale@triumphart.ru"
								className={styles.contacts__link}
							>
								sale@triumphart.ru
							</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
