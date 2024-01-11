import SideMenuDrawer from "@components/SideMenuDrawer/SideMenuDrawer";

function Header() {
  return (
    <header class="navbar">
      <div class="flex-1">Lorem, ipsum dolor</div>
      <div class="flex-none">
        <SideMenuDrawer />
      </div>
    </header>
  );
}

export default Header;
