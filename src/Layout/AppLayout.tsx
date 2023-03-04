import React from "react";
import { Outlet } from "react-router-dom";
type Props = {};

function AppLayout({}: Props) {
  return (
    <>
      <Outlet />
    </>
  );
}

export default AppLayout;
