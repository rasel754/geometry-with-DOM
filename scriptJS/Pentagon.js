function calculatePentagonArea() {
    // get pentagon base from the pentagon input table
    const getPentagonBase = document.getElementById('pentagon-base');
    const textOfPentagonBase = getPentagonBase.value;
    const base = parseFloat(textOfPentagonBase);
    console.log(base);
    // get pentagon height from the pentagon input table
    const getPentagonHeight = document.getElementById('pentagon-height');
    const textOfPentagonHeight = getPentagonHeight.value;
    const height = parseFloat(textOfPentagonHeight);
    console.log(height);
    // calculate the area of the pentagon
    const area = (base * height) / 2;
    console.log(area);
    // display the area of the pentagon
    const displayArea = document.getElementById('Pentagon-area');
    displayArea.innerText = area;
}