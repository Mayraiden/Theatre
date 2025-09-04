import styles from './feedback.module.scss'

const feedbacks = [
	{
		id: 1,
		name: 'Глюкоза',
		role: 'Певица, актриса',
		text: 'Это какое-то невероятное шоу! Огромное спасибо вам за эту новогоднюю сказку, я и мои дети остались под огромным впечатлением! Особенно впечатлили декорации и оживающие предметы!',
	},
	{
		id: 2,
		name: 'Юлия Началова',
		role: 'Певица',
		text: 'Это какое-то невероятное шоу! Огромное спасибо вам за эту новогоднюю сказку, я и мои дети остались под огромным впечатлением! Особенно впечатлили декорации и оживающие предметы!',
	},
	{
		id: 3,
		name: 'Анфиса Чехова',
		role: 'Ведущая, актриса',
		text: 'Это какое-то невероятное шоу! Огромное спасибо вам за эту новогоднюю сказку, я и мои дети остались под огромным впечатлением! Особенно впечатлили декорации и оживающие предметы!',
	},
]

export const Feedback = () => {
	return (
		<section className={styles.feedback}>
			<div className={styles.feedback__container}>
				<h1 className={styles.feedback__title}>о наших мюзиклах говорят</h1>

				{/* Десктопная версия */}
				<div className={styles.feedback__feeds}></div>

				{/* Мобильная версия */}
				<div className={styles.feedback__mobile}>
					{feedbacks.map((feedback) => (
						<div key={feedback.id} className={styles.feedback__item}>
							<div className={styles.feedback__avatar}>
								<span className={styles.feedback__avatarText}>
									{feedback.name.charAt(0)}
								</span>
							</div>
							<div className={styles.feedback__content}>
								<h3 className={styles.feedback__name}>{feedback.name}</h3>
								<p className={styles.feedback__text}>{feedback.text}</p>
							</div>
						</div>
					))}
				</div>

				<button className={styles.feedback__btn} type="button">
					оставить свой отзыв
				</button>
			</div>
		</section>
	)
}
