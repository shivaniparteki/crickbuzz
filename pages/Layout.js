
import Menu from "./menu/Menu";




export default function Layout({ children }) {
  return (
    <>
      
      <Menu/>
      


      {
        children
      }
    

    </>
  )
}