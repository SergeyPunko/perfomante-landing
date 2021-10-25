const Mailer = (function () {
    const send = (body = new FormData(), url) => {
        //Encode the data
        const searchParams = [...body.entries()].map(([key,value]) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }).join('&');

        return fetch(url, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: searchParams,
        })
            .then((res) => res.json())
            .catch(err => {
                console.error(err);
                alert('Technical error. Please, reload the page and try again or send us an email directly to hi@perfomante.io');
            })
    }
    return {
        send: send
    }
})()

export default Mailer;
