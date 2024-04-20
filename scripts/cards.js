document.getElementById("downloads").onmousemove = e => {
    for (const download of document.getElementsByClassName("download")) {
      const rect = download.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
      
        download.style.setProperty("--mouse-x", `${x}px`);
        download.style.setProperty("--mouse-y", `${y}px`);
    }
  }