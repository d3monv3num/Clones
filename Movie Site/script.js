const arrows=document.querySelectorAll(".arrow");
const movie_lists=document.querySelectorAll(".movie-list");
const img=document.querySelectorAll(".movie-list-item-image");
for(let movie_list of movie_lists){
    movie_list.style.transition="all 1s ease-in-out";
}
arrows.forEach((arrow,index)=>{
    let clickcount=0;
    arrow.addEventListener('click',()=>{
        const windowwidth=Math.floor(window.innerWidth/270);
        let divisor=4;
        if(windowwidth==0)divisor=8;
        if(windowwidth==1)divisor=7;
        if(windowwidth==2)divisor=6;
        if(windowwidth==3)divisor=5;
        clickcount++;
        if(clickcount%divisor==0){
            movie_lists[index].style.transform="translateX(0)";
        }else{
        movie_lists[index].style.transform=`translateX(${movie_lists[index].computedStyleMap().get("transform")[0].x.value-300}px)`;}
    })
})
const toggle_btn=document.querySelector(".toggle-ball");
toggle_btn.style.transition="all 0.5s ease-in-out";
const items=document.querySelectorAll(".toggle-ball,.toggle,.sidebar,.container,.movie-list-title,.navbar-container,.left-menu-icon");
toggle_btn.addEventListener('click',()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
});
const root=document.querySelector(':root');
hues=[252,52,352,152,202,100,130,300,115,75];
hues.sort();
toggle_btn.addEventListener('click',()=>{
    let i=0;setInterval(
        function (){
            root.style.setProperty('--color-oflogo',hues[i++]);
            if(i>=hues.length)i-=hues.length;
        },800)
})
