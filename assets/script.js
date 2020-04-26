function realtimeClock() {
  let rtClock   = new Date();
  
  let hours     = rtClock.getHours();
  let minutes   = rtClock.getMinutes();
  let seconds   = rtClock.getSeconds(); 
  
  document.getElementById('clock').innerHTML =
    hours + ' : ' + minutes + ' : ' + seconds;
  let t = setTimeout(realtimeClock, 500);

}

function dynamicText(){
  let rtClock   = new Date();
  
  let hours = rtClock.getHours();
    let text  = '';
    if(hours <= 3){
      text = ['bobo caaaa', 'udah malem 🙄', 'Good Naiiitee🍯']
    } else if(hours <= 11){
      text = ['Good Miawwning icaaa 🤪', 'yuuu...', 'awali hari dengan senuman indahmu :\)'];
    } else if(hours <= 14){
      text = ['Good Aftyernuun 🍯', 'udah makan kan? 😡'];
    } else if(hours <= 22){
      text = ['Good Eveneeeng hehe', 'jam-jam segini...','emang paling enak rebahan 🤣'];
    } else{
      text = ['bobo caaaa', 'udah malem 🙄', 'Good Naiiitee🍯'];
    }

    // let txt = setTimeout(dynamicText, 500);
    
    var line = document.getElementById("text")
    var txts = text;
    var speed = 100
    
    async function typewriter(txt) {
      for(let i = 0; i < txt.length; i++){
        line.innerHTML += txt.charAt(i);
        await delay(speed) 
      }
    }
    
    async function reverseTypewriter(txt) {
      for(let i = txt.length; i > 0; i--){
        line.innerHTML = line.innerHTML.slice(0,-1)
        await delay(speed)
      }
    }
    
    async function writeLoop(){
      
      for(let i = 0; i < txts.length; i++){
        await typewriter(txts[i])
        await delay(4000)
        await reverseTypewriter(txts[i])
        await delay(1000)
      }
      
      writeLoop()
    }
    
    function delay(ms){
      return new Promise((resolve)=>{setTimeout(()=>{resolve()},ms)})
    }
    
    writeLoop()
}

