function calculateParallelogramArea(){
    // get parallelogram base from the parallelogram input table
   const getParallelogramBase = document.getElementById('Parallelogram-base');
   const textOfParallelogramBase = getParallelogramBase.value;
   const base=parseFloat(textOfParallelogramBase);
   console.log( base);
   // get parallelogram height from the parallelogram input table
   const getParallelogramHeight = document.getElementById('Parallelogram-height');
   const textOfParallelogramHeight = getParallelogramHeight.value;
   const height=parseFloat(textOfParallelogramHeight);
   console.log( height);
   // calculate the area of the parallelogram
   const area =base*height;
   console.log(area);
   // display the area of the parallelogram
   const displayArea = document.getElementById('Parallelogram-area');
   displayArea.innerText = area;
}