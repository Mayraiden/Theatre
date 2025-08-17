(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const o=""+new URL("logo-D1aelKbS.svg",import.meta.url).href,d="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17%2018C14.9%2018%2012.9%2017.5%2010.8%2016.6C8.8%2015.7%206.9%2014.4%205.2%2012.7C3.5%2011%202.2%209.2%201.3%207.1C0.4%205%200%203.1%200%201.1C0%200.8%200.1%200.5%200.3%200.3C0.5%200.1%200.8%200%201.1%200H5.1C5.3%200%205.5%200.1%205.7%200.2C5.9%200.4%206%200.6%206.1%200.8L6.8%204.3C6.8%204.6%206.8%204.8%206.8%205C6.6%205.2%206.5%205.3%206.4%205.5L4%207.9C4.3%208.5%204.7%209.1%205.2%209.7C5.7%2010.3%206.2%2010.8%206.7%2011.4C7.2%2011.9%207.8%2012.4%208.3%2012.8C8.8%2013.2%209.5%2013.6%2010.1%2014L12.4%2011.7C12.6%2011.5%2012.7%2011.4%2013%2011.4C13.2%2011.3%2013.5%2011.3%2013.7%2011.3L17.2%2012C17.4%2012.1%2017.6%2012.2%2017.8%2012.4C18%2012.6%2018%2012.8%2018%2013V17C18%2017.3%2017.9%2017.5%2017.7%2017.8C17.5%2017.9%2017.3%2018%2017%2018Z'%20fill='%23E8EAED'/%3e%3c/svg%3e",c="data:image/svg+xml,%3csvg%20width='57'%20height='58'%20viewBox='0%200%2057%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.3333%2044.5834C31.5444%2044.5834%2034.4604%2043.6744%2037.0812%2041.8563C39.7021%2040.0383%2041.6028%2037.6417%2042.7833%2034.6667H13.8833C15.0639%2037.6417%2016.9646%2040.0383%2019.5854%2041.8563C22.2062%2043.6744%2025.1222%2044.5834%2028.3333%2044.5834ZM16.4333%2026.1667L19.55%2023.1917L22.525%2026.1667L25.5%2023.1917L19.55%2017.1001L13.4583%2023.1917L16.4333%2026.1667ZM34.1417%2026.1667L37.1167%2023.1917L40.2333%2026.1667L43.2083%2023.1917L37.1167%2017.1001L31.1667%2023.1917L34.1417%2026.1667ZM28.3333%2057.3334C24.4139%2057.3334%2020.7306%2056.5897%2017.2833%2055.1022C13.8361%2053.6147%2010.8375%2051.5959%208.2875%2049.0459C5.7375%2046.4959%203.71875%2043.4973%202.23125%2040.0501C0.74375%2036.6029%200%2032.9195%200%2029.0001C0%2025.0806%200.74375%2021.3973%202.23125%2017.9501C3.71875%2014.5029%205.7375%2011.5042%208.2875%208.95425C10.8375%206.40425%2013.8361%204.3855%2017.2833%202.898C20.7306%201.4105%2024.4139%200.666748%2028.3333%200.666748C32.2528%200.666748%2035.9361%201.4105%2039.3833%202.898C42.8306%204.3855%2045.8292%206.40425%2048.3792%208.95425C50.9292%2011.5042%2052.9479%2014.5029%2054.4354%2017.9501C55.9229%2021.3973%2056.6667%2025.0806%2056.6667%2029.0001C56.6667%2032.9195%2055.9229%2036.6029%2054.4354%2040.0501C52.9479%2043.4973%2050.9292%2046.4959%2048.3792%2049.0459C45.8292%2051.5959%2042.8306%2053.6147%2039.3833%2055.1022C35.9361%2056.5897%2032.2528%2057.3334%2028.3333%2057.3334Z'%20fill='white'/%3e%3c/svg%3e",s={logo:o,phone:d,smile:c};function n(){return`
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
  `}function p(){return`
    <section class="h-screen w-full">
      <div class="h-full w-full bg-[url(/heroBg.png)] bg-cover bg-center">
        
      </div>
    </section>
  `}function f(){return`
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
  `}function x(){return`
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
  `}function u(){return`
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
  `}function h(){return`
    <section class="relative w-full h-screen px-80 pt-40 pb-18 flex flex-col items-center justify-between bg-light-blue">
    
      <h1 class="text-4xl font-bold uppercase mb-12">о наших мюзиклах говорят</h1>   

      <div class="w-full h-full mb-20 bg-[url(/feedback.png)] bg-contain bg-no-repeat bg-center"></div>
   
      
      <button class="w-90 h-17 text-white font-bold uppercase bg-gradient-to-r from-[#FF8B13] to-[#FF5B00] rounded-4xl shadow-[0_0_20px_rgba(255,139,19,0.6),0_0_40px_rgba(255,91,0,0.4)]">Оставить свой отзыв</button>
      
      <div class="w-full h-1.5 bg-gradient-to-r from-[#FF8812] to-[#FF5E01] absolute bottom-0"></div>
    </section>
  `}function v(){return`
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
  `}function m(){return`
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
  `}function g(){return`
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
  `}function b(){return`
    ${n()}
    ${p()}    
    ${f()}
    ${x()}
    ${u()}
    ${h()}
    ${v()}
    ${m()}
    ${g()}
  `}document.querySelector("#app").innerHTML=b();
