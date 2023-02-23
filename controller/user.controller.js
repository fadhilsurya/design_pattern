
function pingUserHealth(req, res) {
    console.log('PONG!!!!')

    res.send('success')
    return
}

// class User {

//     testUserHealth(req, res) {
//         console.log('PING!!!!')

//         res.send('success')
//         return
//     }

// }

module.exports = { pingUserHealth, }