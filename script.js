function clockOG() {
    const clock = document.querySelector('.clock');
    let segundos = 0;
    let timer;
    
    function createSeconds(segundos) { 
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12:false,
            timeZone: 'UTC'
        });
    }
    
    function startClock() {
         timer = setInterval(function() {
            segundos++;
            clock.innerHTML = createSeconds(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function (e) {
        const el = e.target;
    
        if(el.classList.contains('reset')) {
            clearTimeout(timer)
            clock.innerHTML = '00:00:00';
            segundos = 0; 
        }
    
        if(el.classList.contains('pause')) {
            clearInterval(timer)
        }
    
        if(el.classList.contains('start')){
            clearInterval(timer)
            startClock()
        }
    });
}
clockOG()