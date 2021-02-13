// Elementos HTML
let columns = document.querySelectorAll('.lis');

let parents=document.querySelector("#ul")
function createEl(parentEl,nameEl,attEl,valeuEl){
    let el = document.createElement(nameEl)
    let att = document.createAttribute(attEl)
    att.value=valeuEl
    el.setAttributeNode(att)
    parentEl.appendChild(el)
    return el;
}

function validateCreation(path){
    let val=0
    path.childNodes.forEach(e=>{
        val++
    })
    return val>=6?false:true
}

let jogador = -1;
function toggle(){
    let vetor1 =["circulo"];
    let vetor2 =["circulo-two"];
    if (jogador==-1){
        jogador+=2;
        return vetor1
    }
    else if(jogador==1){
        jogador-=2;
        return vetor2
    }
}

let matrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
function pushMatrix(el) {         
    matrix[el.id-1].push(jogador);
}

function stopGame() {

    // Vertical
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(Math.abs(matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3]) === 4) {
                gameFinished('vertical');
            }
        }
    }

    // Horizontal
    // Diagonal
}

            }
        }
    }
}

function gameFinished(direction) {
    console.log('fim ' + direction)
}

function listener(tag){
    if(tag){
        tag.forEach(el => {
            el.addEventListener("click",e=>{
            validateCreation(e.target)?new Ball(createEl(parents,"div","class",toggle(),pushMatrix(el), stopGame()),e.target,5,.2,"circle"):0
            })
        });
    }
}
listener(document.querySelectorAll(".lis"))