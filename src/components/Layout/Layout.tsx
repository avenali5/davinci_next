import React from "react";
import { LayoutStyle } from "./style";

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <LayoutStyle className='page'>
      <div className='grain-effect' />
      {children}
    </LayoutStyle>
  );
};

export default Layout;
