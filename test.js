screen.orientation.onchange = function(){
    console.log("Change");
}

if(height >= width){
    /* Apply the transformation from landscape to portrait */
    const kuromicontainer = document.querySelector('#kuromicontainer');
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

