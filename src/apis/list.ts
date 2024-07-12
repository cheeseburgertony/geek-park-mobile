import { http } from "@/utils"
import type { ResType } from "./shared"


// 2.定义具体的接口类型
// 频道数据类型
export type ChannelItem = {
  id: number,
  name: string
}

type ChannelRes = {
  channels: ChannelItem[]
}

// 获取-所有频道列表
export const getChannelsAPI = () => http.get<ResType<ChannelRes>>('/v1_0/channels')

// 请求参数
type ReqParams = {
  channel_id: string
  timestamp: string
}

// 列表数据类型
export type ListItem = {
  art_id: string
  title: string
  aut_id: string
  comm_count: number
  pubdate: string
  aut_name: string
  is_top: number
  cover: {
    type: number
    images: string[]
  }
}

export type ListRes = {
  results: ListItem[]
  pre_timestamp: string
}

// 获取-文章列表
export const getArticlesAPI = (params: ReqParams) => http.get<ResType<ListRes>>('/v1_0/articles', { params })