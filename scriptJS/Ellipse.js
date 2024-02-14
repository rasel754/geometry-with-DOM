function calculateEllipseArea() {
    // get ellipse Axis1 from the ellipse input table
    const getEllipseBase = document.getElementById('Ellipse-Axis');
    const textOfEllipseBase = getEllipseBase.value;
    const Axis1 = parseFloat(textOfEllipseBase);
    console.log( Axis1);
    // get ellipse Axis2 from the ellipse input table
    const getEllipseHeight = document.getElementById('Ellipse-Axis2');
    const textOfEllipseHeight = getEllipseHeight.value;
    const Axis2 = parseFloat(textOfEllipseHeight);
    console.log(Axis2);
    // calculate the area of the ellipse
    const area = 3.1416* Axis1 * Axis2;
    console.log(area);
    // display the area of the ellipse
    const displayArea = document.getElementById('Ellipse-area');
    displayArea.innerText = area;
}