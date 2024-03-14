// const url = location.href;
const url = "https://pablomonteserin.com/res/diapos_theme/code-pen/index.php?url=/res/javascript-es6/ex/location-href/index.html&queTiene=4";
const lastSlashPos = url.lastIndexOf('/')
const page = url.substring(lastSlashPos + 1);

console.log(page);