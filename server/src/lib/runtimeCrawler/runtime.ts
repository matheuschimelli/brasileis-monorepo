import mkdirp from 'mkdirp'
import path from 'path'
import fs from 'fs/promises'
import { nanoid } from 'nanoid'
import vm from 'vm'
export async function createExecutionPath () {
  const folderId = nanoid()
  const tempCodePath = path.join(__dirname, 'temp', folderId)
  try {
    const pathCreated = await mkdirp(tempCodePath)
    return { folderId, pathCreated }
  } catch (error) {
    throw new Error(error)
  }
}

export async function createFile (pathFolder: string, fileName: string, extension: string, content: string): Promise<void> {
  const filePath = path.join(pathFolder, `${fileName}.${extension}`)
  try {
    await fs.writeFile(filePath, content)
  } catch (error) {
    throw new Error(error)
  }
}

export async function runCode (filePath: string) {
  const execute = require(filePath)
  console.log(execute)
}
