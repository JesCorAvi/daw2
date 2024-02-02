function mostrarArbolDOM() {
    const arbolElement = document.getElementById("arbol");
    const arbolDOM = generarArbolDOM(document.documentElement, 0);
    arbolElement.innerHTML = arbolDOM;
}
function generarArbolDOM(elemento, nivel) {
    let arbol = '';
    for (let i = 0; i < nivel; i++) {
        arbol += `_________|`;
    }
    arbol += `${elemento.tagName.toLowerCase()}<br>`;
    for (let i = 0; i < elemento.children.length; i++) {
        arbol += generarArbolDOM(elemento.children[i], nivel + 1);
    }
    return arbol;
}
mostrarArbolDOM();