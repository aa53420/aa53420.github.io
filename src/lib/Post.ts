import fs from "fs"
import { remark } from 'remark';
import matter from "gray-matter";
import {metadata} from "@/app/layout";

export enum Category {
  GAME = "game",
  IT = "it",
}

/**
 * 게시물 루트 경로
 */
export const rootPath = "src/app/post"

/**
 * 카테고리에 해당하는 게시물 목록을 리턴한다
 */
type PostData = {
  title: string,
  subtitle: string | "",
  thumbnail: string,
  tags: string[],
  path: string | "",
}

export const getPostData = (category: Category) => {
  try {
    const path = `${rootPath}/${category}`
    const files = fs.readdirSync(path)
    let result: PostData[] = []

    for(let file of files) {
      const content = fs.readFileSync(`${path}/${file}`, 'utf8')
      const postData = JSON.parse(JSON.stringify(matter(content))).data as PostData
      result.push(postData)
    }

    return result
  } catch (e) {
    console.error(e)
    return []
  }
}