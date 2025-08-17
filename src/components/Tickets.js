export function createTickets() {
	return `
    <section class="relative w-full h-screen bg-white py-35" id="tickets">
      <div class="max-w-[1920px] mx-auto md:px-16 lg:px-32 xl:px-81">
        <div class="flex flex-col lg:flex-row gap-16 items-start">
          
          <!-- Левая колонка с контентом -->
          <div class="flex-1 space-y-8">
            <h2 class="text-[52px] font-bold">БИЛЕТЫ НА МЮЗИКЛ</h2>
            
            <p class="text-[32px] font-bold ">У ВАС ЕЩЕ ОСТАЛИСЬ СОМНЕНИЯ - ИДТИ НА МЮЗИКЛ ИЛИ НЕТ?</p>
            
            <p class="text-[20px] font-medium  leading-relaxed">
              Более 100 человек принимали участие в создании шоу "Русская мечта". Актеры, акробаты, певцы, музыканты, декораторы и костюмеры трудились на протяжении многих месяцев, чтобы вы увидели действительно впечатляющее шоу! Это ли не гарантия качества?
            </p>
            
            
              <button class="w-full max-w-md h-16 text-white text-xl font-bold uppercase bg-gradient-to-r from-[#FF8B13] to-[#FF5B00] rounded-3xl shadow-[0_0_20px_rgba(255,139,19,0.4),0_0_40px_rgba(255,91,0,0.2)] hover:shadow-[0_0_25px_rgba(255,139,19,0.6),0_0_50px_rgba(255,91,0,0.3)] transition-all duration-300">
                КУПИТЬ БИЛЕТ ПРЯМО СЕЙЧАС
              </button>
            
            
            <div class="space-y-2">
              <p class="text-4xl">Стоимость билетов на мюзикл от 1000 до 3500 руб</p>
            </div>
            
            <p class="text-base font-bold text-[#147EBB] leading-relaxed">
              Вы также можете заказать билеты по телефону 8(495)22-595-77, приобрести их в кассе КЦ «Москвич» или на сайтах билетных операторов.
            </p>
          </div>
          
          <!-- Правая колонка с изображением -->
          <div class="flex-1">
            <div class="w-[570px] h-[752px] bg-gray-200 rounded-3xl flex items-center justify-center">
              <span class="text-xl font-medium">PHOTO</span>
            </div>
          </div>
          
        </div>
      </div>
      <div class="absolute w-full h-1.5 bg-gradient-to-r from-[#FF8812] to-[#FF5E01] bottom-0"></div>
    </section>
  `
}
