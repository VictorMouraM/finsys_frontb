import React, { ReactNode } from "react";
import { Container, Content } from "./styles";
import SideMenu from "../SideMenu";
import { usePathname, useRouter } from "next/navigation";


interface AppTemplateProps {
    children: ReactNode;
}

const AppTemplate = ({children}:AppTemplateProps) => {
  const pathname = usePathname()
  const isAuthPages = pathname == "/signin" || pathname == "/signup";
  return(
    <Container>
      {!isAuthPages && <SideMenu />}
      <Content>{children}</Content>
    </Container>   
  );
}
export default AppTemplate;