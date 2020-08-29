function check(){
    var url = 'https://sv3.choikou.edu.mo/skheck/opac/?page=opacSearch&q='+encodeURIComponent(document.getElementById("searchtext").value );
    window.open(url, '_blank');
}

document.getElementById('q').onclick=check;