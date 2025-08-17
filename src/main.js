import './styles/style.css'

// Import components
import { createHeader } from './components/Header.js'
import { createHero } from './components/Hero.js'
import { createAboutMusical } from './components/AboutMusical.js'
import { createGallery } from './components/Gallery.js'
import { createAuthorsArtists } from './components/AuthorsArtists.js'
import { createTestimonials } from './components/Testimonials.js'
import { createTickets } from './components/Tickets.js'
import { createContactInfo } from './components/ContactInfo.js'
import { createFooter } from './components/Footer.js'

// Main App Component
function createApp() {
	return `
    ${createHeader()}
    ${createHero()}    
    ${createAboutMusical()}
    ${createGallery()}
    ${createAuthorsArtists()}
    ${createTestimonials()}
    ${createTickets()}
    ${createContactInfo()}
    ${createFooter()}
  `
}

// Initialize the app
document.querySelector('#app').innerHTML = createApp()
