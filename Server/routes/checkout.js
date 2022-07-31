const app = require('express').Router();

const stripe = require('stripe')('sk_test_51LH8TABEvWoKMFurAqUYqJ0h6PAUIeGemZKLCGJxSt4jzLM3ah1WngB8S0dRnLIbrPsiUCkZhzQao2Xj90BTXOlf00QZo9Zn14')

app.post('/payment', async (req, res) => {
    let status, error;

    const { token, amount } = req.body
    try {
        await stripe.charges.create({
            source: token.id,
            amount,
            currency: 'USD'
        })
        status = 'success'
    } catch (error) {
        console.log(error)
        status = 'faliure'
    }
    res.json({ error, status })
})





module.exports = app