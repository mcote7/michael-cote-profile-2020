export const navBarCollapseTransition = () => {

  const navbar_Collapse = document.getElementById("navbarText");
  const navbar_Main = document.getElementById("myNavbar");
  
  if(navbar_Main !== null && navbar_Collapse !== null && navbar_Collapse.classList.contains("show")) {
    navbar_Main.animate([
      {opacity: 1},
      {opacity: 1, filter: 'blur(0px)'},
      {opacity: 0, filter: 'blur(12px)'},
    ], {
      delay: 500,
      duration: 1000
    });
    setTimeout(() => {
        navbar_Collapse.classList.remove("show");
    }, 1500);
    navbar_Main.animate([
      {opacity: 0, filter: 'blur(12px)'},
      {opacity: 0.5, filter: 'blur(0px)'},
      {opacity: 1},
    ], {
      delay: 1500,
      duration: 1500
    });
  }
};