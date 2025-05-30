let deck = [[[]],[[]],[[]],[[]]]

deck.forEach(k => {
    for (let i = 0; i < 15; i++)
    {
        k[i] = true;
        console.log(k[i])
    }
})