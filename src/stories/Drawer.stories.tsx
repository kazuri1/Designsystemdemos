import React from "react";
import { Drawer } from "../components/organisms/Drawer";

export default {
  title: "Organisms/Drawer",
  component: Drawer,
};

export const Light = () => (
  <div
    style={{
      background: "var(--drawer-background)",
      minHeight: "100vh",
      padding: 0,
    }}
  >
    <Drawer />
  </div>
);

export const Dark = () => (
  <div
    className="dark"
    style={{
      background: "var(--drawer-background)",
      minHeight: "100vh",
      padding: 0,
    }}
  >
    <Drawer />
  </div>
);

export const IconOnly = () => (
  <div
    style={{
      background: "var(--drawer-background)",
      minHeight: "100vh",
      padding: 0,
    }}
  >
    <Drawer variant="icon-only" />
  </div>
);
