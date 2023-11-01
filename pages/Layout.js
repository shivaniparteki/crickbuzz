
import Menu from "./menu/Menu";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  // Check if the current pathname contains '/login' or '/signup'
  const shouldDisplayMenu = !pathname.includes("/login") && !pathname.includes("/signup");

  return (
    <>
      {shouldDisplayMenu && <Menu />}
      {children}
    </>
  )
}