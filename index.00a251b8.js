const e="https://ddragon.leagueoflegends.com/cdn/",i=document.querySelector("button"),d=document.getElementById("cards-grid");i.addEventListener("click",()=>{i.remove(),d.style.visibility="visible",t()});const n=(e,i)=>{d.innerHTML+=`<div class="card">
    <div id="champ-image"><img src="${i}"></div>
    <div id="name">
    ${e}
    </div>
</div>`},t=async()=>{fetch(e+"13.18.1/data/es_ES/champion.json").then(e=>e.json()).then(i=>{for(let d of Object.values(i.data)){let i=`${e}img/champion/loading/${d.id}_0.jpg`;n(d.name,i)}})};
//# sourceMappingURL=index.00a251b8.js.map
