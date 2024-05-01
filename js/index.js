document.getElementById('navs').addEventListener('click',function(e){
    const nav = document.querySelectorAll('.nav');
    const img = document.querySelectorAll('.img');
    for(let n of nav){ 
        if(n == e.target){
            n.classList.add('actives');
            for(let im of img){
                im.style.display = 'none';
                if(n.getAttribute('data-target') == im.getAttribute('data-title')){
                    im.style.display = 'block';
                    im.classList.add('f');
                }
                if(n.getAttribute('data-target') == 'all'){
                    im.style.display = 'block';
                    im.classList.add('f'); 
                }
            } 
        }
        else{
            n.classList.remove('actives')
        }
    }
})
document.querySelector('.icons').addEventListener('click',function(){
    const navs = document.querySelector('#navs');
    navs.classList.toggle('lon')
    console.log('clicked')
})