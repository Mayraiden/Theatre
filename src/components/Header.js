export function createHeader() {
	return `
    <header class="w-full h-22 bg-gradient-to-r text-white from-blue to-dark-blue font-gilroy font-bold text-base">
      <div class="w-full h-full mx-auto px-80 flex items-center justify-between ">
        <div class="h-14 mr-23.5 shrink-0">
          <img src="/logo.svg" alt="ТРИУМФ" class="h-full w-full">
        </div>
        
        <nav class="h-full flex items-center justify-center gap-16 mr-20">
          <a href="#about" class="">О МЮЗИКЛЕ</a>
          <a href="#gift" class="">ПОДАРОК</a>
          <a href="#gallery" class="">ГАЛЕРЕЯ</a>
          <a href="#contacts" class="">КОНТАКТЫ</a>
        </nav>
        
        <div class="flex">
          <span class="mr-20 text-base flex items-center">
          <img src="/phone.svg" alt="phone" class="w-5 h-5 mr-2">
          +7 (495) 22-595-77
          </span>

          <button class="w-40 h-12 font-bold text-xs bg-white rounded-4xl text-black shadow-[0_0_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2)] shadow-white">КУПИТЬ БИЛЕТ</button>
        </div>
      </div>
    </header>
  `
}
