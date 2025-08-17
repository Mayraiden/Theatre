export function createGallery() {
	return `
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
  `
}
