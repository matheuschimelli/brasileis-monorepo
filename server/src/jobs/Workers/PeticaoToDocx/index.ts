// import { Job } from 'bull'
// import HTMLtoDOCX from 'html-to-docx'
// import fs from 'fs/promises'
// import path from 'path'

export default {
  key: 'PeticaoToDocx',
  sandBoxFile: null,
  options: {
    sandBox: false,
    continuous: false
  },
  async handle () {
    /*
    const { title, html, owner, createdAt, modifiedAt } = job.data
    console.log(job.data)

    const docOptions = {
      orientation: 'portrait',

      margins: {
        top: 1700.787401575, // 3cm
        right: 1700.787401575, // 3cm
        bottom: 1133.858267717, // 2cm
        left: 1133.858267717 // 2cm
      },

      title: title,
      // subject: 'Petição Brasileis',
      // creator: owner,
      // keywords: ['petiçao', 'brasileis'],
      lastModifiedBy: 'Brasileis',
      // createdAt: createdAt,
      // modifiedAt: modifiedAt,
      header: true, // to test
      footer: true,
      font: 'Arial', // TODO change
      // fontSize: 12,
      skipFirstHeaderFooter: true
    }
    try {
      const tempFile = path.resolve(__dirname, '../../../../../temp', 'file.docx')

      //  const fileBuffer = await HTMLtoDOCX(html, '<p>Brasileis Header</p>', docOptions, '<p>Brasileis Footer</p>')

      //  await fs.writeFile(tempFile, fileBuffer, 'utf8')

      return Promise.resolve()
    } catch (error) {
      throw new Error(error)
    }
  }
  */
  }
}
