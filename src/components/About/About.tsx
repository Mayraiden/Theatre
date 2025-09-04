import Image from 'next/image'
import styles from './about.module.scss'

export const About = () => {
	return (
		<section className={styles.about} id="about">
			{/* Верхняя секция: видео + текст */}
			<div className={styles.about__container}>
				<div className={`${styles.about__video} ${styles.video}`}>
					<div className={styles.video__placeholder}></div>
				</div>

				{/* 4 фотографии под видео - только на мобильных */}
				<div className={styles.about__photos}>
					<div className={styles.about__photo}>
						<span className={styles.about__photoText}>PHOTO</span>
					</div>
					<div className={styles.about__photo}>
						<span className={styles.about__photoText}>PHOTO</span>
					</div>
					<div className={styles.about__photo}>
						<span className={styles.about__photoText}>PHOTO</span>
					</div>
					<div className={styles.about__photo}>
						<span className={styles.about__photoText}>PHOTO</span>
					</div>
				</div>

				<div className={styles.about__content}>
					<h2 className={styles.about__title}>Русская мечта</h2>
					<p className={styles.about__descr}>
						Театрализованное цирковое шоу &laquo;Русская мечта &raquo; - это
						проект нового поколения с&nbsp;захватывающими дух акробатическими
						номерами, танцами и&nbsp;мультимедийными эффектами.
					</p>
					<p className={styles.about__descr}>
						Вы&nbsp;когда-нибудь пробовали познать русскую душу глазами обычного
						клоуна? Если вы&nbsp;кивнули в&nbsp;ответ, то&nbsp;мы&nbsp;вам точно
						не&nbsp;поверим! Ведь аналогов этому шоу нет.
					</p>
				</div>
			</div>

			<div className={styles.cards}>
				<div className={styles.cards__line}></div>
				<div className={styles.cards__container}>
					<ul className={styles.cards__list}>
						<li className={`${styles.cards__item} ${styles.cards__item_left}`}>
							<div className={styles.cards__iconWrap}>
								<Image
									className={styles.cards__icon}
									src="./smile.svg"
									alt="."
									width={40}
									height={40}
								/>
							</div>

							<p className={styles.cards__text}>
								Шоу понятное без перевода. История рассказанная без слов. Только
								музыка, язык тела, декорации и&nbsp;неповторимая история
								проникающая в&nbsp;сердце и&nbsp;душу.
							</p>
						</li>
						<li className={`${styles.cards__item} ${styles.cards__item_right}`}>
							<div className={styles.cards__iconWrap}>
								<Image
									className={styles.cards__icon}
									src="./smile.svg"
									alt="."
									width={40}
									height={40}
								/>
							</div>

							<p className={styles.cards__text}>
								Уникальный международный состав шоу. На&nbsp;сцене специально
								для вас свои таланты покажут звёзды стран БРИКС. В&nbsp;шоу
								принимают участие артисты из&nbsp;Бразилии, Индии, Китая, ЮАР
								и&nbsp;России.
							</p>
						</li>
						<li className={`${styles.cards__item} ${styles.cards__item_left}`}>
							<div className={styles.cards__iconWrap}>
								<Image
									className={styles.cards__icon}
									src="./smile.svg"
									alt="."
									width={40}
									height={40}
								/>
							</div>

							<p className={styles.cards__text}>
								Цирковые трюки от&nbsp;ведущих постановщиков циркового жанра.
								Артисты Cirque du&nbsp;Soleil удивят акробатическим шоу
								на&nbsp;лыжах и&nbsp;роликах, на&nbsp;земле
								и&nbsp;в&nbsp;воздухе в&nbsp;оригинальных номерах.
							</p>
						</li>
						<li className={`${styles.cards__item} ${styles.cards__item_right}`}>
							<div className={styles.cards__iconWrap}>
								<Image
									className={styles.cards__icon}
									src="./smile.svg"
									alt="."
									width={40}
									height={40}
								/>
							</div>

							<p className={styles.cards__text}>
								В&nbsp;театрализованном цирковом шоу &laquo;Русская мечта&raquo;
								используются современные технологии: 3D-mapping, иммерсивный
								свет, синхронные проекции.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
