import { ReactNode } from 'react';
import Navbar from './components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full  ">
      <Navbar />
      <main >{children}</main>
    </div>
  );
};

export default Layout;
