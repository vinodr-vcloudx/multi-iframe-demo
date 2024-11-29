import './style.css'

const modal = document.getElementById('widget-modal')
const widgetButton = document.getElementById('widget-button')
const closeModalButton = document.getElementById('close-modal')
const iframeSecond = document.getElementById('iframe-second')

widgetButton.addEventListener('click', () => {
  if (!modal) return
  modal.classList.add('opacity-100', 'pointer-events-auto', 'block')
  modal.classList.remove('opacity-0', 'pointer-events-none', 'hidden')
})

closeModalButton.addEventListener('click', () => {
  if (!modal) return
  modal.classList.add('opacity-0', 'pointer-events-none', 'hidden')
  modal.classList.remove('opacity-100', 'pointer-events-auto', 'block')
})


const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
if (urlParams.size > 0) {
  if (urlParams.has("room_id")) {
    const roomId = urlParams.get("room_id")
    if (roomId) {
      // set the iframe src for the second iframe
      iframeSecond.setAttribute('src', `/for-second-iframe.html?room_id=${roomId}`);
    }
  }
}
