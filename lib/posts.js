import fs from 'fs'
import matter from 'gray-matter'

export function getMd(filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    return fileContents
    //const matterResult = matter(fileContents)
    //return matterResult.data
}