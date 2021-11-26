function pagefunction() {
    let nama = prompt('Siapa nama?');
    document.getElementById('tajuk').innerText = 'Selamat Datang ' + nama;
}

function simpan() {
    let sahkan =confirm('Adakah anda pasti?');
    if (sahkan) {
        return true;
    } else {
        alert('Arahan simpan dibatalkan');
        return false;
    }
}

function fokus() {
    document.getElementById('mesej').innerText = 'Sila klik butang Simpan';
}

function hitam() {
    document.getElementById('mesej').innerText = 'Sila nyatakan keperluan anda';
}