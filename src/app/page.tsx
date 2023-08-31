import {Category, getPostData} from "@/lib/Post";

export default function Home() {
  const postData = getPostData(Category.GAME)
  return (
    <>
      <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </div>
    </>
  )
}
