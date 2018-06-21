let throttle='';
class PraiseButton{
    constructor(num,element){
        this.num=num;
        this.element=element;
    }
    //函数式函数节流
    throttles(fn,wait){
        var timer;
        return function(...args){
            if(!timer){
                timer = setTimeout(()=>timer=null, wait);
                console.log(timer)
                return fn.apply(this,args)
            }
        }
    }
    // clickAction(){
    //     this.element.click(()=>{
    //         if(throttle){
    //             clearTimeout(throttle)
    //         }
    //         throttle = setTimeout(()=>{
    //             if(this.num<10){
    //                 this.element.css('-webkit-filter','grayscale(0)');
    //                 $('#animation').addClass('num');
    //                 this.num++;
    //                 setTimeout(function(){
    //                     $('#animation').removeClass('num');
    //                 },1000);
    //                 axios.get('/index/update')
    //                     .then(function (res) {
    //                         console.log(res)
    //                     })
    //                     .catch(function (err) {
    //                         console.log(err)
    //                     })
    //             }else{
    //                 this.element.css('-webkit-filter','grayscale(1)');
    //                 this.num=0;
    //             }
    //             console.log(this.num);
    //         },800)
    //     })
    // }
    clickAction(){
        var that=this
        function clicka() {
            if(that.num<10){
                that.element.css('-webkit-filter','grayscale(0)');
                $('#animation').addClass('num');
                that.num++;
                setTimeout(function(){
                    $('#animation').removeClass('num');
                },1000);
                axios.get('/index/update')
                    .then(function (res) {
                        console.log(res)
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }else{
                that.element.css('-webkit-filter','grayscale(1)');
                that.num=0;
            }
            console.log(that.num);
        }
        // const fn  = function(){ console.log("btn clicked")}
        var btn =document.getElementById('thumb')
        btn.onclick= this.throttles(clicka,1000);

    }
}
class Thumb extends PraiseButton{
    constructor(num,element){
        super(num,element);
    }
}
export default Thumb