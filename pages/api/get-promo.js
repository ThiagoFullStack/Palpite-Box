
import { GoogleSpreadsheet } from 'google-spreadsheet'
// import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.VARIABLE_DOC_ID)

// const fromBase64 = value => {
//   const buff = Buffer.from(value, 'base64');
//   return buff.toString('ascii');
// }


export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({

      client_email: process.env.VARIABLE_CLIENT_EMAIL,
      private_key: process.env.VARIABLE_PRIVATE_KEY
      // private_key: fromBase64(process.env.VARIABLE_PRIVATE_KEY)
    })
    await doc.loadInfo()


    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')


    const mostraPromocaoCell = sheet.getCell(1, 0)
    const textoCell = sheet.getCell(1, 1)


    res.end(JSON.stringify({
      showCoupon: mostraPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (erro) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))

  }
}

