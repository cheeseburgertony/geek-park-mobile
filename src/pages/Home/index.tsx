import { getChannelsAPI, type ChannelItem } from "@/apis/list"
import { Tabs } from "antd-mobile"
import { useEffect, useState } from "react"

const Home = () => {
  const [channelList, setChannelList] = useState<ChannelItem[]>([])

  useEffect(() => {
    const getChannelsData = async () => {
      try {
        const res = await getChannelsAPI()
        setChannelList(res.data.data.channels)
      } catch (error) {
        throw Error('get channel error')
      }
    }
    getChannelsData()
  }, [])

  return (
    <div>
      <div className="tabContainer">
        {/* Tab区域 */}
        <Tabs>
          {channelList.map(item => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
            </Tabs.Tab>
          ))}


        </Tabs>
      </div>
    </div>

  )
}

export default Home