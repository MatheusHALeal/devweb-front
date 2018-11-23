import App from '../views/main.jsx'

var mainRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "",
    component: App
  },
  {
    path: "/myEvents",
    name: "Meus Eventos",
    component: App
  }

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }


];

export default mainRoutes;
