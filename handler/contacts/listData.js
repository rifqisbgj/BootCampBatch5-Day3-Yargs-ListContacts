const fs = require('fs');
module.exports = () => {
    const rawData = fs.readFileSync('./data/contacts.json', 'utf-8');
    const user = JSON.parse(rawData);

    console.log("Contact List: ");
    // jika data user tersedia maka tampilkan data
    if (user.length > 0) {
        let no = 1 // menghitung urutan data
        user.forEach(data => {
            console.log(no + ". " + data.name + " - " + data.mobile);
            no++;
        });
    }

    // jika data tidak ditemukan
    if (!user.length) {
        console.log("Data tidak ada");
    }
}