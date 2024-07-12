import { Image, List } from 'antd-mobile'
// mock数据
import { useEffect, useState } from 'react'
import { getArticlesAPI, ListRes } from '@/apis/list'

type Props = {
  channelId: string
}

const HomeList = (props: Props) => {
  const { channelId } = props
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: '' + new Date().getTime()
  })

  // 获取文章数据
  useEffect(() => {
    const getArticlesData = async () => {
      try {
        const res = await getArticlesAPI({
          channel_id: channelId,
          timestamp: '' + new Date().getTime()
        })
        setListRes(res.data.data)
      } catch (error) {
        throw new Error('fetch list error')
      }
    }
    getArticlesData()
  }, [channelId])

  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
    </>
  )
}

export default HomeList