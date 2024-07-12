import { http } from "@/utils"

// 1.定义泛型
type ResType<T> = {
  message: string
  data: T
}
// 2.定义具体的接口类型
type ChannelItem = {
  id: number,
  name: string
}

type ChannelRes = {
  channels: ChannelItem[]
}

// 获取-所有频道列表
export const getChannelsAPI = () => http.get<ResType<ChannelRes>>('/v1_0/channels')