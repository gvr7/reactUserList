import './App.css'
import UserProfile from './components/UserProfile/index.jsx'


const data = [
  {
  name : "venkatesh",
  url : "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg&ga=GA1.2.76926633.1664848115",
  des : "Software developer"
},
  {
  name : "Anand",
  url : "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg&ga=GA1.2.76926633.1664848115",
  des : "java developer"
},
  {
  name : "Kiran",
  url : "https://img.freepik.com/free-photo/businessman-making-ok-sign_1368-8495.jpg?size=626&ext=jpg",
  des : "react developer"
},
  {
  name : "Lakshman",
  url : "https://img.freepik.com/premium-psd/young-afro-american-businessman-giving-thumbs-up-gesture-because-something-good-has-happened_1368-31753.jpg?size=338&ext=jpg",
  des : "frontend developer"
}
]
const App  = () =>
  (
    <div>
      <h1 className = "heading">Users List</h1>
      <ul>
        {data.map((item) => <UserProfile userData = {item} />          
        )}
      </ul>
      
    </div>
)

 


export default App