const request = new XMLHttpRequest()
request.open('GET', '/friends.json')
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        const object = JSON.parse(request.response)
        console.log(object)
    }
}
request.send()