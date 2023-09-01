import {Category, getPostData} from "@/lib/Post";

/**
 * 메인 페이지
 * - 카테고리 카드 표출 (링크)
 */
export default function Home() {
  const postData = getPostData(Category.GAME)
  return (
    <>
      test
    </>
  )
}
