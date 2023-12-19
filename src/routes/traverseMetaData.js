import fs from 'fs'
import path from 'path'
import fm from 'front-matter'


function readFileMetaData(filepath) {
    let content = fs.readFileSync(filepath, {encoding: 'utf-8'})
    let {attributes} = fm(content)
    attributes.filepath = filepath
    return attributes
}


export default function traverseMetaData(directory) {
    let result = []
    let filelist = fs.readdirSync(directory)
    for (let filename of filelist) {
        let child = path.join(directory, filename)
        let item = fs.statSync(child)
        if (item.isDirectory()) {
            let subresult = traverseMetaData(child)
            result = [...result, ...subresult]
        } else if (filename === '+page.md') {
            let metaData = readFileMetaData(child)
            result.push(metaData)
        }
    }
    return result
}
