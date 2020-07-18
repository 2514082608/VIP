//切换按钮
    let btn = document.querySelectorAll('.login_top>div')
        for(let i = 0;i<btn.length;i++){
            btn[i].addEventListener('click',function(){
                for(let j = 0;j < 2;j++){
                    btn[j].className=''
                }
                btn[i].className='switchover'
            })
        }
    let code = document.querySelector('.code')
    let login_box = document.querySelector('.login_box')
    btn[0].addEventListener('click',function(){
        code.style.display='block'
        login_box.style.display='none'
    })  
    btn[1].addEventListener('click',function(){
        login_box.style.display='block'
        code.style.display='none'
    })    

    //登陆判断
    let user = document.querySelector('form>.user')
    let password = document.querySelector('form>.password')
    let _submit = document.querySelector('form>.submit')

    //账号正则
    let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    //密码正则
    


    _submit.addEventListener('click',function(e){
            //阻止默认行为
            e.preventDefault()
            let user_value = user.value
            let password_value = password.value
            if(!reg.test(user_value)){
              return alert('错误')
            }
            let xhr = new XMLHttpRequest()
            xhr.open('POST','/pj')
            xhr.onload=function(){
                let res = xhr.responseText
                let _json = JSON.parse(res)
                if(_json.code==0){
                    alert('登录失败')
                }else{
                    setCookie('nickname',_json.nickname,60*60*60*7)
                    window.location.href='./index.html'
                }
            }
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(`user=${user_value}&pass=${password_value}`)
    })
    //写一个设置cookie的方法
    function setCookie(key,value,expires){
        if(expires){
            var t = new Date()
            t.setTime(new Date().getTime()-1000*30*60*8+1000*expires)
        }
        document.cookie=`${key}=${value};expires=${t}`
    }



