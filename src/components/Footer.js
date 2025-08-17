export function createFooter() {
	return `
    <footer class="w-full bg-[#050F26] text-[#C1C1C1] py-16">
      <div class="mx-auto px-80">
        <div class="flex justify-between items-start mx-auto">
          <!-- Левая колонка - Логотип и адрес -->
          <div class="flex flex-col items-start space-y-4">
            <div class="flex items-center">
              <img src="/logo.svg" alt="ТРИУМФ">
            </div>
            <address class="text-sm/2 not-italic ">
              Адрес: Москва, <br></br> Ленинская Слобода, <br></br> д. 19, 62/1
            </address>
          </div>
          
          <!-- Центральная колонка - Контактная информация -->
          <div class="flex flex-col items-start space-y-4">
            <h3 class="text-3xl font-semibold text-[#3D3E3E]">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
            <div class="text-sm/2 space-y-4">
              <p>По вопросам проката и постановки мюзиклов: Алексей Пеганов,<br></br> <a href="mailto:peganov@triumphart.ru" class="text-gray-200 hover:text-white transition-colors">peganov@triumphart.ru</a></p>
              <p>По вопросам групповых и корпоративных заказов: Дмитрий<br></br> Пятибратов <a href="mailto:sale@triumphart.ru" class="text-gray-200 hover:text-white transition-colors">sale@triumphart.ru</a></p>
            </div>
          </div>
          
          <!-- Правая колонка - Копирайт -->
          <div class="flex flex-col items-end">
            <p class="text-sm text-gray-200 text-right">
              ООО «Триумф Арт» © 2025.<br>
              Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  `
}
