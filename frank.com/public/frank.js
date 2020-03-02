const request = new XMLHttpRequest()
request.open('GET', 'http://qq.com:8888/friends.json')
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        // const object = JSON.parse(request.response)
        // console.log(object)
        console.log(request.response)
    }
}
request.send()

// 上面是CORS，下面是JSONP

const random = 'frankJSONPCallBackName' + Math.random()
window[random] = (data) => {
    console.log(data)
}
const script = document.createElement('script')
script.src = `http://qq.com:8888/friends.js?functionName=${random}`
document.body.appendChild(script)
script.onload = () => {
    script.remove()
}
