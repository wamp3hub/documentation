import traverseMetaData from './traverseMetaData'

export const prerender = true

export async function load() {
    let startFrom = './src/routes/(documents)'
    let linksByCategory = new Map()
    let pages = traverseMetaData(startFrom)
    for (let p of pages) {
        p.path = p.filepath.slice(startFrom.length-2, -9)
        let link = linksByCategory.get(p.category)
        if (!link) {
            link = {
                category: p.category,
                items: []
            }
            linksByCategory.set(p.category, link)
        }
        link.items.push({label: p.title, path: p.path, number: p.number})
    }
    let links = []
    for (let l of linksByCategory.values()) {
        l.items = l.items.sort((a, b) => a.number - b.number)
        links.push(l)
    }
    return { links, }
}
