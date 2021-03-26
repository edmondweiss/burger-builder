import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  // TODO: Create Toolbar, Sidebar, and Backdrop components.
  return (
    <>
      <div>
        <div>Toolbar, Sidebar, and Backdrop</div>
      </div>
      <main>
        {children}
      </main>
    </>
  );
};