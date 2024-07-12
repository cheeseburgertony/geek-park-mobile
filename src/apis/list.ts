import { http } from "@/utils"
import type { ResType } from "./shared"


// 2.定义具体的接口类型
export type ChannelItem = {
  id: number,
  name: string
}

type ChannelRes = {
  channels: ChannelItem[]
}

// 获取-所有频道列表
export const getChannelsAPI = () => http.get<ResType<ChannelRes>>('/v1_0/channels')