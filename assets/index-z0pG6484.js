(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s={logo:"logo.svg",phone:"phone.svg",smile:"smile.svg"};function o(){return`
    <header class="w-full h-22 bg-gradient-to-r text-white from-blue to-dark-blue font-gilroy font-bold text-base">
      <div class="w-full h-full mx-auto px-80 flex items-center justify-between ">
        <div class="h-14 mr-23.5 shrink-0">
          <img src="${s.logo}" alt="ТРИУМФ" class="h-full w-full">
        </div>
        
        <nav class="h-full flex items-center justify-center gap-16 mr-20">
          <a href="#about" class="">О МЮЗИКЛЕ</a>
          <a href="#gift" class="">ПОДАРОК</a>
          <a href="#gallery" class="">ГАЛЕРЕЯ</a>
          <a href="#contacts" class="">КОНТАКТЫ</a>
        </nav>
        
        <div class="flex">
          <span class="mr-20 text-base flex items-center">
                      <img src="${s.phone}" alt="phone" class="w-5 h-5 mr-2">
          +7 (495) 22-595-77
          </span>

          <button class="w-40 h-12 font-bold text-xs bg-white rounded-4xl text-black shadow-[0_0_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2)] shadow-white">КУПИТЬ БИЛЕТ</button>
        </div>
      </div>
    </header>
  `}function d(){return`
    <section class="h-screen w-full">
      <div class="h-full w-full bg-[url(/heroBg.png)] bg-cover bg-center">
        
      </div>
    </section>
  `}function c(){return`
    <section class="w-full bg-light-blue" id="about">

      <div class="w-full px-84.5 pt-28.5 pb-15.5 flex justify-between gap-14.5">
                
        <div class="h-95.5 w-xl bg-[#D3DBF6] rounded-3xl">
          <div class="h-full w-full flex items-center justify-center">
            <div class="font-bold text-2xl">VIDEO</div>
          </div>
        </div>

        <div class="h-1/2 w-1/2">
          <h2 class="mb-5 font-bold text-3xl text-dark-text">МУЗЫКАЛЬНО-ТАНЦЕВАЛЬНОЕ ШОУ «МУЖЧИНЫ – ЭТО...»</h2>

          <p class="font-medium text-lg text-text mb-6">
            Какие на самом деле мужчины? О чем они переживают? Что их радует, а что злит? В масштабном музыкально-танцевальном шоу «Мужчины - это…» каждый зритель попытается заглянуть в души мужчин, чтобы понять, о чем они думают, мечтают и самое главное танцуют и поют.
          </p>
          <p class="font-medium text-lg">
            Уникальные оперные, эстрадные и мюзикловые голоса встретятся на одной сцене в сочетании с потрясающей физической подготовкой и танцевальными данными разножанровых артистов. Это шоу кладезь талантливых мужчин.
          </p>
        </div>
      </div>

             <!-- Оранжевая полоска  -->
       <div class="w-full relative">

         <div class="w-full h-1.5 bg-gradient-to-r from-[#FF8812] to-[#FF5E01] absolute top-1/3"></div>
         
         <!-- карточки  -->
         <div class="relative z-10 px-63 py-15.5">
          
          <ul class="flex gap-2.5">
            <li>
              <div class="w-86 h-125 bg-white rounded-3xl px-9 py-6 shadow-md shadow-[#D0D9F6] flex flex-col items-center justify-between">
                <div class="size-29 bg-gradient-to-b from-[#0039A4] to-[#227AC4] rounded-2xl flex items-center justify-center mb-13.5">
                  <img src="${s.smile}" alt="" />
                </div>
          
              <p class="font-medium text-xl text-text">
                Какие на самом деле мужчины? О чем они переживают? Что их радует, а что злит? В масштабном музыкально-танцевальном шоу «Мужчины это...» каждый зритель попытается заглянуть в души мужчин, чтобы понять, о чем они думают, мечтают и самое главное танцуют и поют.
              </p>
          </div>
            </li>
            <li>
              <div class="w-86 h-125 bg-white rounded-3xl px-9 py-6 shadow-md shadow-[#D0D9F6] flex flex-col items-center justify-between">
                <div class="size-29 bg-gradient-to-b from-[#0039A4] to-[#227AC4] rounded-2xl flex items-center justify-center mb-13.5">
                  <img src="${s.smile}" alt="" />
                </div>
          
              <p class="font-medium text-xl text-text">
                Какие на самом деле мужчины? О чем они переживают? Что их радует, а что злит? В масштабном музыкально-танцевальном шоу «Мужчины это...» каждый зритель попытается заглянуть в души мужчин, чтобы понять, о чем они думают, мечтают и самое главное танцуют и поют.
              </p>
          </div>
            </li>
            <li>
              <div class="w-86 h-125 bg-white rounded-3xl px-9 py-6 shadow-md shadow-[#D0D9F6] flex flex-col items-center justify-between">
                <div class="size-29 bg-gradient-to-b from-[#0039A4] to-[#227AC4] rounded-2xl flex items-center justify-center mb-13.5">
                  <img src="${s.smile}" alt="" />
                </div>
          
              <p class="font-medium text-xl text-text">
                Какие на самом деле мужчины? О чем они переживают? Что их радует, а что злит? В масштабном музыкально-танцевальном шоу «Мужчины это...» каждый зритель попытается заглянуть в души мужчин, чтобы понять, о чем они думают, мечтают и самое главное танцуют и поют.
              </p>
          </div>
            </li>
            <li>
              <div class="w-86 h-125 bg-white rounded-3xl px-9 py-6 shadow-md shadow-[#D0D9F6] flex flex-col items-center justify-between">
                <div class="size-29 bg-gradient-to-b from-[#0039A4] to-[#227AC4] rounded-2xl flex items-center justify-center mb-13.5">
                  <img src="${s.smile}" alt="" />
                </div>
          
              <p class="font-medium text-xl text-text">
                Какие на самом деле мужчины? О чем они переживают? Что их радует, а что злит? В масштабном музыкально-танцевальном шоу «Мужчины это...» каждый зритель попытается заглянуть в души мужчин, чтобы понять, о чем они думают, мечтают и самое главное танцуют и поют.
              </p>
          </div>
            </li>
          </ul>

         
         </div>
       </div>
      </section>
  `}function n(){return`
    <section class="w-full px-75 pb-15 h-[70vh] bg-[url(/showBg.png)]" id="gallery">
      <div class="">
        <h2 class="mb-15 font-bold text-[32px] uppercase">Музыкально-танцевальное шоу «Мужчины - это…»</h2>
        
        <div class="grid gap-4.5 text-xl font-bold" style="grid-template-areas: 
          'photo1 photo2 photo4 photo5'
          'photo3 photo3 photo4 photo6';
          grid-template-columns: 196px 196px 339px 338px;
          grid-template-rows: 1fr 1fr;">
          
          <div class="w-[196px] h-[247px] bg-light-blue shadow-md shadow-[#D0D9F6] rounded-2xl flex items-center justify-center" style="grid-area: photo1;">PHOTO 1</div>
          <div class="w-[196px] h-[247px] bg-light-blue shadow-md shadow-[#D0D9F6] rounded-2xl flex items-center justify-center" style="grid-area: photo2;">PHOTO 2</div>
          <div class="w-[411px] h-[247px] bg-light-blue shadow-md shadow-[#D0D9F6] rounded-2xl flex items-center justify-center" style="grid-area: photo3;">PHOTO 3</div>
          <div class="w-[340px] h-[515px] bg-light-blue shadow-md shadow-[#D0D9F6] rounded-2xl flex items-center justify-center" style="grid-area: photo4;">PHOTO 4</div>
          <div class="w-[] bg-light-blue shadow-md shadow-[#D0D9F6] rounded-2xl flex items-center justify-center" style="grid-area: photo5;">PHOTO 5</div>
          <div class="w-[] bg-light-blue shadow-md shadow-[#D0D9F6] rounded-2xl flex items-center justify-center" style="grid-area: photo6;">PHOTO 6</div>
        </div>
          
            
          
      </div>
    </section>
  `}function p(){return`
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
  `}function f(){return`
    <section class="relative w-full h-screen px-80 pt-40 pb-18 flex flex-col items-center justify-between bg-light-blue">
    
      <h1 class="text-4xl font-bold uppercase mb-12">о наших мюзиклах говорят</h1>   

      <div class="w-full h-full mb-20 bg-[url(/feedback.png)] bg-contain bg-no-repeat bg-center"></div>
   
      
      <button class="w-90 h-17 text-white font-bold uppercase bg-gradient-to-r from-[#FF8B13] to-[#FF5B00] rounded-4xl shadow-[0_0_20px_rgba(255,139,19,0.6),0_0_40px_rgba(255,91,0,0.4)]">Оставить свой отзыв</button>
      
      <div class="w-full h-1.5 bg-gradient-to-r from-[#FF8812] to-[#FF5E01] absolute bottom-0"></div>
    </section>
  `}function u(){return`
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
  `}function x(){return`
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
  `}function h(){return`
    <footer class="w-full bg-[#050F26] text-[#C1C1C1] py-16">
      <div class="mx-auto px-80">
        <div class="flex justify-between items-start mx-auto">
          <!-- Левая колонка - Логотип и адрес -->
          <div class="flex flex-col items-start space-y-4">
            <div class="flex items-center">
              <img src="${s.logo}" alt="ТРИУМФ">
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
  `}function v(){return`
    ${o()}
    ${d()}    
    ${c()}
    ${n()}
    ${p()}
    ${f()}
    ${u()}
    ${x()}
    ${h()}
  `}document.querySelector("#app").innerHTML=v();
