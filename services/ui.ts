import { UIData } from '@/types/UIData'

const fs = require('fs')
const path = require('path')
const uiDataPath = path.join(process.cwd(), 'data', '/uiList.json')

export const fetchUIList = (): UIData[] => {
  const uiList = fs.readFileSync(uiDataPath, 'utf8')
  return JSON.parse(uiList)
}
