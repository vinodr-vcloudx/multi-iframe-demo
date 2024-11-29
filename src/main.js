import './style.css'

const modal = document.getElementById('widget-modal')
const widgetButton = document.getElementById('widget-button')
const closeModalButton = document.getElementById('close-modal')
const iframeFirst = document.getElementById('iframe-first')
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
    const roomId = urlParams.get("room_id") || "6306174ec9ba87666b298a57";
    const name = urlParams.get("name");
    const custId = urlParams.get("custId");
    const clientId = urlParams.get("clientId");
    const scanId = urlParams.get("scanId");

    // set the iframe src for the first iframe
    let first = `https://meet.yourvideo.live/${roomId}?name=${name}&user_ref=${custId}&landing=no`;
    console.log(first)
    iframeFirst.setAttribute('src', first);

    // set the iframe src for the second iframe
    const second = `https://fedo.ai/products/vitals/webapp/vitals?orgId=19&custId=${custId}&userId=702&tenantId=124&clientId=${clientId}&scanId=${scanId}`
    console.log(second);
    iframeSecond.setAttribute('src', second);
}
