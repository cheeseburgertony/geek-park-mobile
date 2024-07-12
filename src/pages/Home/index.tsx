import { Tabs } from "antd-mobile"
import { useTabs } from "./useTabs"
import HomeList from "./HomeList"
import './style.css'

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
              <div className="listContainer">
                <HomeList channelId={'' + item.id} />
              </div>
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>

  )
}

export default Home