import path from 'path'

import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

import { formatDate } from './date'
import { sortWithProp } from './sort'

const dir = path.join(process.cwd(), 'content/posts')
const extend = '.md'

type ContentArgumentType = {
  fs: any
  slug: string | undefined
  fileName?: string
}

export const readContentFile = async ({
  fs,
  slug,
  fileName = '',
}: ContentArgumentType) => {
  if (slug === undefined) {
    slug = path.parse(fileName).name
  }
  const raw = fs.readFileSync(path.join(dir, `${slug}${extend}`), 'utf8')
  const matterResult = matter(raw)
  const { title, published: rawPublished } = matterResult.data
  const parsedContent = await remark().use(html).process(matterResult.content)
  const content = parsedContent.toString()
  return {
    title,
    published: formatDate(rawPublished),
    content,
    slug,
  }
}

export const listContetFileNameList = ({ fs }) => {
  const fileNames: string[] = fs.readdirSync(dir)
  return fileNames.filter((fileName) => path.parse(fileName).ext === extend)
}

export const readContentFiles = async ({ fs }) => {
  const promisses = listContetFileNameList({ fs }).map((fileName) =>
    readContentFile({ fs, slug: undefined, fileName: fileName })
  )
  const contents = await Promise.all(promisses)
  return contents.sort(sortWithProp('published', true))
}
