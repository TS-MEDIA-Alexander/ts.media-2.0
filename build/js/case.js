const videos=document.querySelectorAll('.case__video')
videos.forEach(el => {
   
   if(el.getElementsByTagName('video').length){
      el.innerHTML=[el.innerHTML, '<div class="case__video-management case__video-management_mute"></div>']
      el.querySelector('.case__video-management').addEventListener('click', ()=> {
         el.querySelector('video').muted=!el.querySelector('video').muted
         el.querySelector('video').muted?(
            el.querySelector('.case__video-management').classList.remove('case__video-management_sound'),
            el.querySelector('.case__video-management').classList.add('case__video-management_mute')
         ):(
            el.querySelector('.case__video-management').classList.remove('case__video-management_mute'),
            el.querySelector('.case__video-management').classList.add('case__video-management_sound')
         )
         
      })
   }
});
