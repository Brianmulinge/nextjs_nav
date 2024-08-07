export type SideNavItem = {
  title: string;
  path: string;
  icons?: JSX.Element;
  sub_menu?: boolean;
  sub_menu_items?: SideNavItem[];
};
