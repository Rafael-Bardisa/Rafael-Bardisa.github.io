(async () => {
    const response = await fetch('https://api.github.com/repos/Rafael-Bardisa/Rafael-Bardisa.github.io/contents/pdfs');
    const data = await response.json();
    let htmlString = '<ul>';
    
    for (let file of data) {
      htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
    }

    htmlString += '</ul>';
    document.getElementById('test').innerHTML = htmlString;
    console.log(htmlString);
  })();

console.log("script run");