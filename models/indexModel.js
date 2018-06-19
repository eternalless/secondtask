const rp =require('request-promise')

class indexModel {
    updateNum(){
        const options={
            url:'http://localhost/secondtask/db/db.php',
            method:'get'
        }
        return new Promise((resolve,reject)=>{
            rp(options).then(function (res) {
                const info = JSON.parse(res);
                if(info){
                    resolve({data:info})
                }else{
                    reject({})
                }
            })
        })
    }
}
module.exports= indexModel;
