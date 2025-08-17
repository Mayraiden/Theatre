export function createContactInfo() {
	return `
    <section class="py-20 bg-white" id="contacts">
      <div class="mx-auto px-80">
        <h2 class="text-[52px] font-bold text-center mb-16">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
        
        <div class="h-14 flex justify-center items-start gap-16  mx-auto">
          <!-- Левая колонка -->
          <div class="flex-1 text-center">
            <p class="text-base leading-relaxed">
              По вопросам проката и постановки мюзиклов:
            </p>
            <div class="space-y-2">
              <span class="">Алексей Пеганов</span>
              <span><a href="mailto:reganoc@triumphart.ru" class="text-lg font-medium">
                reganoc@triumphart.ru
              </a></span>
            </div>
          </div>
          
          <!-- Оранжевая разделительная линия -->
          <div class="w-1 h-14 bg-orange-500 self-center"></div>
          
          <!-- Правая колонка -->
          <div class="flex-1 text-center">
            <p class="text-base leading-relaxed">
              По вопросам групповых и корпоративных заказов:
            </p>
            <div class="space-y-2">
              <span class="text-lg font-medium">Дмитрий Пятибратов</span>
              <span>
              <a href="mailto:sale@triumphart.ru" class="text-[#013ba5] hover:text-[#001d73] transition-colors text-lg font-medium">
                sale@triumphart.ru
              </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
