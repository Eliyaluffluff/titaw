let header = document.getElementById("header-comp") 
header.innerHTML = 

`    
<center>
<div id="div1">
<div align = "left">
<h1 id="Welcome"> Welcome to titaw! </h1>
</div>

<svg id="hamb" onclick="showMenu()" height="60px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>


<header>
<div align = "right" id="clickers">
<button onclick="clicky1()"; class="buttons" id="home" >home</button>
<button onclick="clicky2()"; class="buttons" id="about" >about me</button>
<button onclick="clicky3()"; class="buttons" id="chart" >chart</button>
</div>
</header>

</div>
</center>

<style>
.buttons{
    color: #1F3F5F;
    margin: auto;
    background-color: #91C8FF;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #1F3F5F;
}

.buttons:hover {
    color: #91C8FF;
    background-color: #1F3F5F;
    border: 3px solid #91C8FF;
    }

#div1{
    background-color: #badcff7e;
    width: 1500px;
    height: 130px;
  }

a{
    font-size: 30px;
    color: rgb(255, 102, 102);
}

a:link {
    color:white;
}



#hamb {
    display: none;
}

@media screen and (max-width:800px){
    #hamb {
        display: block;
    }
    #clickers{
        position: absolute;
        weight: 50%;
        height: 100%;
        top: 10%;
        background-color: #FFDBDB;
        flex-direction: column;
        flex-wrap: wrap;
        right: 0;
        border-radius: 5px;  
    }
    .link{
        display: block;
    }
    #clickers.responsive{
        display: block;
    }

    #clickers {
        display: none;
    }
    }
}

<style/>`

function showMenu(){
    let = header = document.getElementById("clickers")
    header.classList.toggle("responsive")
}

function clicky1(){
    window.location.href="../index.html";
}
    
function clicky2(){
    window.location.href="../about/aboutme.html";
}

function clicky3(){
    window.location.href="../chart/chart.html";
}
