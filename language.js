const xlsx = require('node-xlsx');
const fs = require('fs');

const workSheetsFromFile = xlsx.parse(`./language/Language.xlsx`);

let viJson, enJson, koJson = {};

for (let i = 1; i < workSheetsFromFile[0].data.length; i++) {
    const key = workSheetsFromFile[0].data[1] ? workSheetsFromFile[0].data[i][1].toString().replace('msg-', '') : '';
    if (key) {
        viJson[key] = workSheetsFromFile[0].data[i][2] ? workSheetsFromFile[0].data[i][2] : ''; // vi
        enJson[key] = workSheetsFromFile[0].data[i][3] ? workSheetsFromFile[0].data[i][3] : ''; // en
        koJson[key] = workSheetsFromFile[0].data[i][4] ? workSheetsFromFile[0].data[i][4] : ''; // kr
    }
}

fs.writeFile('./src/assets/i18n/vi.json', JSON.stringify(viJson, null, 4), 'utf8', () => {
    console.log('DONE VN')
});

fs.writeFile('./src/assets/i18n/en.json', JSON.stringify(enJson, null, 4), 'utf8', () => {
    console.log('DONE EN')
});

fs.writeFile('./src/assets/i18n/ko.json', JSON.stringify(koJson, null, 4), 'utf8', () => {
    console.log('DONE KO')
});


