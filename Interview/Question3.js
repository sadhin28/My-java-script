//Q3: Now would you implement a debounce function?
function debounce(func,delay){
    let timeout;
    return function(){
        const context =this;
        const args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(()=>func.apply(context,args),delay)
    }
}
