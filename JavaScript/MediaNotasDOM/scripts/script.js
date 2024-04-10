function Media() {
    let nota1 = parseInt(document.getElementById('n1').value);
    let nota2 = parseInt(document.getElementById('n2').value);
    let nota3 = parseInt(document.getElementById('n3').value);

    let media = (nota2 + nota1 + nota3) / 3;
    media = media.toFixed(2);
    alert(media);
    return media;

    document.setElementById('med').value = media;
}

document.getElementById('botao').addEventListener("click", Media);