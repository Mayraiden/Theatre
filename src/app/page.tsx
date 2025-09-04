import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Gallary } from '@/components/Gallary/Gallary'
import { Authors } from '@/components/Authors/Authors'
import { Feedback } from '@/components/Feedback/Feedback'
import { Tickets } from '@/components/Tickets/Tickets'
import { Contacts } from '@/components/Contacts/Contacts'
import { Footer } from '@/components/Footer/Footer'

import '@/Styles/normalize.css'

export default function Home() {
	return (
		<main className="main">
			<div className="section-header">
				<Header />
			</div>
			<div className="section-hero">
				<Hero />
			</div>
			<div className="section-about">
				<About />
			</div>
			<div className="section-gallery">
				<Gallary />
			</div>
			<div className="section-authors">
				<Authors />
			</div>
			<div className="section-feedback">
				<Feedback />
			</div>
			<div className="section-tickets">
				<Tickets />
			</div>
			<div className="section-contacts">
				<Contacts />
			</div>
			<div className="section-footer">
				<Footer />
			</div>
		</main>
	)
}
