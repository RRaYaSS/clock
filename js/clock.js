        const horas = document.getElementById('horas')
        const minutos = document.getElementById('minutos')
        const segundos = document.getElementById('segundos')
        const fullTime = document.querySelector("div.date>span")
        const mouth = ["Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
        const day = ["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabádo","Domingo"]

        const relogio = setInterval(function time(){ 
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let dd = now.getDate()
            let mm = now.getMonth()
            let yyyy = now.getFullYear()
            let weekDay= now.getDay()-1

            if (hours >= 6 && hours < 12){
                
                document.body.style.background = "linear-gradient(90deg , #FFFFFF, #87CEEB)"
                
            }else if (hours >= 12 && hours < 18){
                document.body.style.background = "linear-gradient(90deg ,#FFD700,#FFB347,  #FF5733  )"
                
            }else { 
                document.body.style.background ="linear-gradient(90deg ,  #000428, #004e92)"
                
            }
            
            if (hours < 10 ) hours = '0' + hours
            if (minutes < 10 ) minutes = '0' + minutes
            if (seconds < 10 ) seconds = '0' + seconds
            horas.textContent = hours
            minutos.textContent=minutes
            segundos.textContent=seconds
            fullTime.textContent=` ${day[weekDay]}, Dia ${dd} de ${mouth[mm]} de ${yyyy} `
        }) 
