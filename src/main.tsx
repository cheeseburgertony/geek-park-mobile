import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'
import { getChannelsAPI } from './apis/list.ts'

getChannelsAPI().then((res) => {
  console.log(res.data.data.channels);
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
