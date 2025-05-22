import { About, Projects, Home} from "./container"
import Navbar from "./components/Navbar/Navbar"

function App() {
    return <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    </>
}
export default App