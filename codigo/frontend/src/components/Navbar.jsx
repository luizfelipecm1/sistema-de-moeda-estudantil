import { Menubar } from 'primereact/menubar';

const Navbar = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-home', command: () => (window.location.href = '/') },
    { label: 'Login', icon: 'pi pi-sign-in', command: () => (window.location.href = '/login') },
  ];

  return <Menubar model={items} />;
};

export default Navbar;