// let box=document.querySelector(".box");
// let dragarea=document.querySelector(".drag-area");

// let id;
// box.ondragstart=()=>{
//     id=document.getElementById("drag").getAttribute("id");
// };

// dragarea.ondragcenter=()=>{};

// dragarea.ondragleave=()=>{};

// dragarea.ondragover=(e)=>{
//     e.preventDefault();
// };

// dragarea.ondrop=function(){
//     let dragElement=document.getElementById(id);
//     dragarea.appendChild(dragElement);
    
//     var x=e.pageX;
//     var y=e.pageY;

//     dragElement.style.left=x+"px";
//     dragElement.style.top=y+"px";
// }

(function dragDrop(){

    let coordX;
    let coordY;

    const dragEl=document.querySelector(".drag_el");
    const dragZone=document.querySelector(".drap-zone");

    dragZone.addEventListener('dragenter',(e)=>{
        
    });
    dragZone.addEventListener('dragleave',(e)=>{
        
    });
    dragZone.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    dragZone.addEventListener('drop',(e)=>{
        dragEl.style.position='absolute';
        dragEl.style.top=(e.pageY-coordY)+'px';
        dragEl.style.left=(e.pageX-coordX)+'px';
    });

    dragEl.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/html','dragstart');
        coordX=e.offsetX;
        coordY=e.offsetY;
    });

    dragEl.addEventListener('dragend',(e)=>{
        // dragEl.style.position='absolute';
        // dragEl.style.top=(e.pageY-coordY)+'px';
        // dragEl.style.left=(e.pageX-coordX)+'px';
        
    });
})();




