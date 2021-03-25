import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>
        // TODO: Create Toolbar, Sidebar, and Backdrop components.
      </div>
      <main>
        {children}
      </main>
    </>
  );
};