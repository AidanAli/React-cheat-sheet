import Card from "./Card"
import Button from "./components/Button"
import ColorPicker from "./components/ColorPicker"
import List from "./components/List"
import MyComponent from "./components/MyComponent"
import Students from "./components/students"
import UserGreeting from "./components/UserGreeting"

function App() {


  return (
  <>
    <Card/>
    <Students name="Bob" isStudent={true}/>
    <UserGreeting isLoggedIn={true}/>
    <List/>
    <Button/>
    <MyComponent/>
    <ColorPicker/>
  </>
  )
}

export default App
