
import Newreact from "./Components/Newreact";
function App(){
  let title="React Course"
  let bgClass="bg-danger"

  let isHeading=true
  let size=24
  return(
   <>
    <div className={isHeading ? "bg-danger":""}>
      <Newreact/>
      {/* <p>{title}</p> */}
     
    
    </div>
    </>
  )
}
export default App