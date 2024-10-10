const imgBanner = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg'
];
// definimos as imagens do banner 

let fotoInicial = 0;
//index inicial da foto da banner 

function slider() {
    //encontrar o banner na pagina 
    const banner = document.getElementById('banner');
    banner.style.backgroundImagem = `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    //mudar para a proxia foto
    if (fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}


setInterval(slider, 2000)