async function fetchFn() {
    try {
        const response = await fetch('http://localhost:3333')
        const data = await response.json()
        console.log(response)
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

fetchFn()