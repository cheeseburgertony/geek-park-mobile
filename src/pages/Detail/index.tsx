import { DetailDataType, getArticlesByIdAPI } from "@/apis/detail"
import { NavBar } from "antd-mobile"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null>(null)

  // 导航栏点击返回
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }

  // 获取路由参数
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  useEffect(() => {
    // 获取文章详情
    const getArticlesByIdData = async () => {
      try {
        const res = await getArticlesByIdAPI(id!)
        setDetail(res.data.data)
      } catch (error) {
        throw new Error('fetch detail error')
      }
    }
    getArticlesByIdData()
  }, [id])

  // 数据返回之前loading占位
  if (!detail) {
    return <div>this is loading...</div>
  }

  // 数据返回之后正式渲染的内容
  return (
    <div>
      <NavBar onBack={onBack}>{detail?.title}</NavBar>
      <div dangerouslySetInnerHTML={{
        __html: detail?.content
      }}></div>
    </div>
  )
}

export default Detail