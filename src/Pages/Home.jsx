import Content from "../Components/DashboardContent/Content"
import SideContent from "../Components/Sidebar/SideContent"

const Home = () => {
  return (
    <div style={{display:'flex',backgroundColor:'#F5F6F8'}}>
        <SideContent/>
        <Content/>
    </div>
  )
}

export default Home