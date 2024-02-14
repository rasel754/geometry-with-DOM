function calculateRectangleArea(){
  // get rectangle width from the rectangle input table
    const getRectangleInput=document.getElementById('rectangle-width').value;
    const width=parseFloat(getRectangleInput);
    console.log(width); 
 
    // get rectangle height from the rectangle input table
    const getRectangleInput2=document.getElementById('rectangle-length').value;
    const length=parseFloat(getRectangleInput2);
    console.log(length);

    // calculate the area of the rectangle
    const area = width*length;
    console.log(area);
    // display the area of the rectangle
    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerText = area;
}