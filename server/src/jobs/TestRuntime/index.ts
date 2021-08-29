import path from 'path'
const ext = path.extname(__filename)
const sandBoxFile = path.resolve(__dirname, `SandBox${ext}`)

export default {
  key: 'Index Runtime',
  sandBoxFile: sandBoxFile,
  options: {
    continuous: false
  }
}
