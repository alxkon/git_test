var login = prompt('Введите логин', '');
var password

if (login = 'admin') {
    password = prompt('Введите пароль', '');
} else if (login = null) {
    alert('Canceled');
} else {
    alert('Access denied');
}

if (password = 'passw0rd') {
    alert('Welcome home!')
} else {
    alert('Wrong password!')
}