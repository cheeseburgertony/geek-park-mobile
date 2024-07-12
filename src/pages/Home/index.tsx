import { Tabs } from "antd-mobile"
import { useTabs } from "./useTabs"
import HomeList from "./HomeList"

const Home = () => {
  const { channelList } = useTabs()

  return (
    <div>
      <div className="tabContainer">
        {/* Tab区域 */}
        <Tabs>
          {channelList.map(item => (
            <Tabs.Tab title={item.name} key={item.id}>
              {/* list组件 */}
              <HomeList channelId={'' + item.id} />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>

  )
}

export default Home