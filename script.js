const blocos = document.querySelectorAll(`.bloco`)
const modal = document.getElementById(`modal`)
const textModal = document.getElementById(`text-modal`)
const btnFecharModal = document.getElementById(`btn-fechar-modal`)

var jogadas = 0

btnFecharModal.addEventListener(`click`, (e) => {
    modal.classList.remove(`modal-open`)
    textModal.innerHTML = ``
    btnFecharModal.innerHTML = ``
    blocos.forEach((e) => {
        e.classList.remove(`xis`)
        e.classList.remove(`circulo`)
    })
    jogadas = 0
})

blocos.forEach((e) => {
    e.addEventListener(`click`, () => {
        if(jogadas % 2 == 0){
            if(e.classList == `bloco`){
                e.classList.add(`xis`)
                jogadas++
            }
        }else{
            if(e.classList == `bloco`){
                e.classList.add(`circulo`)
                jogadas++
            }
        }

        console.log(jogadas)

        //horizontais X
        
        if(blocos[0].classList == `bloco xis` && blocos[1].classList == `bloco xis` && blocos[2].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[3].classList == `bloco xis` && blocos[4].classList == `bloco xis` && blocos[5].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[6].classList == `bloco xis` && blocos[7].classList == `bloco xis` && blocos[8].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }

        //verticais X
        
        else if(blocos[0].classList == `bloco xis` && blocos[3].classList == `bloco xis` && blocos[6].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[1].classList == `bloco xis` && blocos[4].classList == `bloco xis` && blocos[7].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[2].classList == `bloco xis` && blocos[5].classList == `bloco xis` && blocos[8].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }

        //diagonais X
        
        else if(blocos[0].classList == `bloco xis` && blocos[4].classList == `bloco xis` && blocos[8].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[2].classList == `bloco xis` && blocos[4].classList == `bloco xis` && blocos[6].classList == `bloco xis`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O X ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }

        //horizontais circulo
        
        else if(blocos[0].classList == `bloco circulo` && blocos[1].classList == `bloco circulo` && blocos[2].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[3].classList == `bloco circulo` && blocos[4].classList == `bloco circulo` && blocos[5].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[6].classList == `bloco circulo` && blocos[7].classList == `bloco circulo` && blocos[8].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }

        //verticais circulo
        
        else if(blocos[0].classList == `bloco circulo` && blocos[3].classList == `bloco circulo` && blocos[6].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[1].classList == `bloco circulo` && blocos[4].classList == `bloco circulo` && blocos[7].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[2].classList == `bloco circulo` && blocos[5].classList == `bloco circulo` && blocos[8].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }

        //diagonais circulo
        
        else if(blocos[0].classList == `bloco circulo` && blocos[4].classList == `bloco circulo` && blocos[8].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
        else if(blocos[2].classList == `bloco circulo` && blocos[4].classList == `bloco circulo` && blocos[6].classList == `bloco circulo`){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `O circulo ganhou!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }

        //velha

        else if(jogadas == 9){
            modal.classList.add(`modal-open`)
            textModal.innerHTML = `Deu velha!`
            btnFecharModal.innerHTML = `Jogar novamente!`
        }
    })
})