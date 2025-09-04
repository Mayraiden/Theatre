import Image from 'next/image'
import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__content}>
					<div className={styles.footer__left}>
						<div className={styles.footer__logo}>
							<Image src="/logo.svg" alt="ТРИУМФ" width={120} height={60} />
						</div>

						<address className={styles.footer__address}>
							Адрес: Москва, <br /> Ленинская Слобода, д. 19, 62/1
						</address>
					</div>

					<div className={styles.footer__center}>
						<h3 className={styles.footer__title}>КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
						<div className={styles.footer__contacts}>
							<p className={styles.footer__contact}>
								По вопросам проката и постановки мюзиклов: Алексей Пеганов,
								<br />
								<a
									href="mailto:peganoc@triumphart.ru"
									className={styles.footer__link}
								>
									peganoc@triumphart.ru
								</a>
							</p>
							<p className={styles.footer__contact}>
								По вопросам групповых и корпоративных заказов: Дмитрий
								Пятибратов{' '}
								<a
									href="mailto:sale@triumphart.ru"
									className={styles.footer__link}
								>
									sale@triumphart.ru
								</a>
							</p>
						</div>
					</div>

					<div className={styles.footer__right}>
						<p className={styles.footer__copyright}>
							ООО «Триумф Арт» © 2025.
							<br />
							Все права защищены
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
