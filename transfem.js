const html = document.querySelector('html');
let width = window.screen.availWidth;
let height = window.screen.availHeight;
console.log("The height is" + height);
console.log(width);

if((width >= 820 && height < 820 || width < 820 && height >= 820) || (width < 820 && height < 820)){
if(width < 820){
    const kuromi = document.querySelector('#kuromi');
    const kuromicontainer = document.querySelector("#kuromicontainer");
    kuromicontainer.removeChild(kuromi);
    const nav = document.querySelector('nav');
    nav.removeChild(kuromicontainer);
    const transflag = document.querySelector('#transflag');
    nav.removeChild(transflag);
};

screen.orientation.onchange = change;

function change(e){
    let width = window.screen.availWidth;
let height = window.screen.availHeight;
    console.log("The width is" + width);
    console.log(height);
    if(width < 820){
        /* Apply the transformation from landscape to portrait */
        const kuromi = document.querySelector('#kuromi');
    const kuromicontainer = document.querySelector("#kuromicontainer");
    kuromicontainer.removeChild(kuromi);
    const nav = document.querySelector('nav');
    nav.removeChild(kuromicontainer);
    const transflag = document.querySelector('#transflag');
    nav.removeChild(transflag);
    }
    else{
        /* Apply the transformation from portrait to landscape */
        const kuromi = document.createElement('img');
        kuromi.src = "kuromi.png";
        kuromi.setAttribute('id', "kuromi");
        const nav = document.querySelector('nav');
        const kuromicontainer = document.createElement('div');
        const diybrasil = document.querySelector('#diybrasil');
        kuromicontainer.setAttribute('id', "kuromicontainer");
        nav.insertBefore(kuromicontainer, diybrasil);
        kuromicontainer.appendChild(kuromi);
        const transflagimg = document.createElement('img');
        transflagimg.src = "trans.png";
        transflagimg.style.cssText = "width: 100%; height: 60%;";
        const transflag = document.createElement('div');
        transflag.setAttribute('id', "transflag");
        nav.appendChild(transflag);
        transflag.appendChild(transflagimg);
    };
}
}