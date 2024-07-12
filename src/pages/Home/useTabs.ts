import { getChannelsAPI, type ChannelItem } from "@/apis/list"
import { useEffect, useState } from "react"

export const useTabs = () => {
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

  return{
    channelList
  }
}