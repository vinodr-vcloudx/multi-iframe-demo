import './style.css'
const room = document.getElementById('room')
const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
if (urlParams.size > 0) {
    if (urlParams.has("room_id")) {
        const roomId = urlParams.get("room_id")
        if (roomId) {
            room.innerHTML = `Roomd ID: ${roomId}`
        }
    }
}
