const indexModel= require('../models/indexModel')
const indexCon={
    index(){
        return async(ctx, next) => {
            ctx.body=await ctx.render('index')
        }
    },
    update(){
        return async(ctx, next) => {
            const indexM= new indexModel();
            ctx.body=await indexM.updateNum()
        }
    }
}
module.exports=  indexCon;