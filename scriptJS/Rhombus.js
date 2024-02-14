function calculateRhombusArea(){
    // get rhombus (Diagonal)1 from the rhombus input table
    const getRhombusBase = document.getElementById('Rhombus-Diagonal1');
    const textOfRhombusBase = getRhombusBase.value;
    const Diagonal1=parseFloat(textOfRhombusBase);
    console.log( Diagonal1);
    // get rhombus (Diagonal)2 from the rhombus input table
    const getRhombusHeight = document.getElementById('Rhombus-Diagonal2');
    const textOfRhombusHeight = getRhombusHeight.value;
    const Diagonal2=parseFloat(textOfRhombusHeight);
    console.log(Diagonal2);
    // calculate the area of the rhombus
    const area = Diagonal1*Diagonal2;
    console.log(area);
    // display the area of the rhombus
    const displayArea = document.getElementById('rhombus-area');
    displayArea.innerText = area;
}