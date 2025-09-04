import styles from './gallary.module.scss'

export const Gallary = () => {
	return (
		<section className={styles.gallary} id="gallery">
			<div className={styles.gallary__container}>
				<h2 className={styles.gallary__title}>
					МУЗЫКАЛЬНО-ТАНЦЕВАЛЬНОЕ ШОУ «МУЖЧИНЫ - ЭТО...»
				</h2>

				<div className={styles.gallary__grid}>
					<div className={`${styles.gallary__item} ${styles.gallary__item_1}`}>
						PHOTO 1
					</div>
					<div className={`${styles.gallary__item} ${styles.gallary__item_2}`}>
						PHOTO 2
					</div>
					<div className={`${styles.gallary__item} ${styles.gallary__item_3}`}>
						PHOTO 3
					</div>
					<div className={`${styles.gallary__item} ${styles.gallary__item_4}`}>
						PHOTO 4
					</div>
					<div className={`${styles.gallary__item} ${styles.gallary__item_5}`}>
						PHOTO 5
					</div>
					<div className={`${styles.gallary__item} ${styles.gallary__item_6}`}>
						<div className={styles.gallary__content}>
							<h3 className={styles.gallary__contentTitle}>
								ПОЗИТИВНЫЕ ЭМОЦИИ
							</h3>
							<p className={styles.gallary__contentText}>
								Какие на самом деле мужчины? О чем они переживают? Что их
								радует, а что злит?
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
