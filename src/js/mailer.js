const Mailer = (function () {
    const send = () => {
        const formSenderUrl = 'backend/form.php';
        const params = {
            email: "punkosergey1997@gmail.com"
        };

        //Encode the data
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');

        fetch(formSenderUrl, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: searchParams,
        })
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
