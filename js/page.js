// diplay page data
const page = [
    {
      pageName: "index",
      pageDisplaye: false,
      address: document.querySelector(".index")
    },
    {
      pageName: "mcq",
      pageDisplaye: false,
      address: document.querySelector(".mcq")
    },
    {
      pageName: "timeout",
      pageDisplaye: false,
      address: document.querySelector(".time-out")
    },
    {
      pageName: "result",
      pageDisplaye: false,
      address: document.querySelector(".result")
    }
  ];

  const show = (pName) => {
    page.forEach(activePage => {
      if (pName === activePage.pageName) {
        activePage.pageDisplaye = true;
      }
      else {
        activePage.pageDisplaye = false;
      }
    })
  
  }
  
  // if pageDisplay = true, then the page will be diplayed
  const display = () => {
    page.forEach(p => {
      if (p.pageDisplaye) {
        p.address.style.display = "block";
      }
      else {
        p.address.style.display = "none";
      }
    })
  }

  export { show,display };