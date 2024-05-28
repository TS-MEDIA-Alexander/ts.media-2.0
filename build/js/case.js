function hasAudio (video) {
   return video.mozHasAudio ||
   Boolean(video.webkitAudioDecodedByteCount) ||
   Boolean(video.audioTracks && video.audioTracks.length);
}

function addControlAudio(videos){

   videos.forEach(el => {
      const video=el.getElementsByTagName('video')
      
      if(video.length && hasAudio(video[0])){
   
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

}

const videos=document.querySelectorAll('.case__video')

setTimeout(()=>addControlAudio(videos), 4000)


/* function hasAudio (video) {
   return video.mozHasAudio ||
   Boolean(video.webkitAudioDecodedByteCount) ||
   Boolean(video.audioTracks && video.audioTracks.length);
} */