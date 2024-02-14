function calculateTriangleArea(){
    // get triangle base from the triangle input table
   const getTriangleBase = document.getElementById('triangle-base');
   const textOfTriangleBase = getTriangleBase.value;
   const base=parseFloat(textOfTriangleBase);
   console.log( base);
   // get triangle height from the triangle input table
   const getTriangleHeight = document.getElementById('triangle-height');
   const textOfTriangleHeight = getTriangleHeight.value;
   const height=parseFloat(textOfTriangleHeight);
   console.log( height);
   // calculate the area of the triangle
   const area = (base*height)/2;
   console.log( area);
   // display the area of the triangle
   const displayArea = document.getElementById('display-area');
   displayArea.innerText = area;
}