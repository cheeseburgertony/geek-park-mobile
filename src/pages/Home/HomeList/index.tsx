import { Image, InfiniteScroll, List } from 'antd-mobile'
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

  // 是否还有数据
  // 开关 标记当前是否还有新数据
  // 上拉加载触发的必要条件: 1.hasMore = true  2.小于threshold
  const [hasMore, setHasMore] = useState(true)

  // 上拉加载
  const loadMore = async () => {
    console.log('加载');
    try {
      const res = await getArticlesAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp
      })
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp
      })
      // 看还有没有返回的数据 来判断是否加载完毕
      if (res.data.data.results.length === 0) {
        setHasMore(false)
      }
    } catch (error) {
      throw new Error('fetch list error')
    }
  }

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
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
    </>
  )
}

export default HomeList