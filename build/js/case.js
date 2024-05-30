function addEventOnEntry() {
   const entrys = document.querySelectorAll(".entry")

   entrys.forEach(el => {
      el.addEventListener('click', () => {
         setTimeout(() => addControlAudio(), 7000)
      })
   })
}

function hasAudio(video) {
   return video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks && video.audioTracks.length);
}

function addControlAudio() {

   addEventOnEntry()

   const videos = document.querySelectorAll('.case__video')
   videos.forEach(el => {
      const video = el.getElementsByTagName('video')

      if (video.length && hasAudio(video[0])) {

         el.innerHTML = [el.innerHTML, '<div class="case__video-management case__video-management_mute"></div>']
         el.querySelector('.case__video-management').addEventListener('click', () => {
            el.querySelector('video').muted = !el.querySelector('video').muted
            el.querySelector('video').muted ? (
               el.querySelector('.case__video-management').classList.remove('case__video-management_sound'),
               el.querySelector('.case__video-management').classList.add('case__video-management_mute')
            ) : (
               el.querySelector('.case__video-management').classList.remove('case__video-management_mute'),
               el.querySelector('.case__video-management').classList.add('case__video-management_sound')
            )

         })
      }
   });

}

if (document.querySelectorAll('.case__video')) {
   setTimeout(() => addControlAudio(), 4000)
}

addEventOnEntry()






