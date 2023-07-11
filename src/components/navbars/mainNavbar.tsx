import NavbarLayout from "./navbarLayout";
import NavbarItems from "./navbarItems";

function NavbarLinks() {
  return (
    <NavbarLayout>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavbarItems />
    </NavbarLayout>
  );
}

export default NavbarLinks;