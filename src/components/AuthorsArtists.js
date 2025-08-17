export function createAuthorsArtists() {
	return `
    <section class="w-full h-[70vh] bg-[url(/authorsBg.png)]">
      <div class="container">
        <div class="authors-artists__content">
          <div class="authors-artists__column">
            <h3 class="column__title">АВТОРЫ:</h3>
            <div class="profile">
              <div class="profile__image">
                <img src="/roman-artyukhov.jpg" alt="Roman Artyukhov">
              </div>
              <div class="profile__info">
                <h4 class="profile__name">ROMAN ARTYUKHOV</h4>
                <p class="profile__role">КОМПОЗИТОР</p>
              </div>
            </div>
            <div class="profile">
              <div class="profile__image">
                <img src="/nikolai-androsov.jpg" alt="Nikolai Androsov">
              </div>
              <div class="profile__info">
                <h4 class="profile__name">NIKOLAI ANDROSOV</h4>
                <p class="profile__role">РЕЖИССЕР, АВТОР СЦЕНАРИЯ</p>
              </div>
            </div>
          </div>
          
          <div class="authors-artists__column">
            <h3 class="column__title">АРТИСТЫ:</h3>
            <div class="profile">
              <div class="profile__image">
                <img src="/petr-petrovich.jpg" alt="Petr Petrovich">
              </div>
              <div class="profile__info">
                <h4 class="profile__name">PETR PETROVICH</h4>
                <p class="profile__role">АКТЕР ИВАН ИВАНОВИЧ</p>
              </div>
            </div>
            <div class="profile">
              <div class="profile__image">
                <img src="/valery-vali.jpg" alt="Valery Vali">
              </div>
              <div class="profile__info">
                <h4 class="profile__name">VALERY VALI</h4>
                <p class="profile__role">АКТЕР ЗИВАН ИВА</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
