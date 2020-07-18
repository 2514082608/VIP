let inp_phone = document.querySelector('.inp_phone')
let inp_pass = document.querySelector('.inp_pass')
let inp_same = document.querySelector('.inp_same')
let ensure = document.querySelector('.ensure')
let btn_submit = document.querySelector('.btn_submit')

    var flag = false
    ensure.addEventListener('change',function(){
        if(ensure.checked){
            btn_submit.style.opacity=1
            btn_submit.disabled=false
            flag = true
        }else{
            btn_submit.style.opacity=0.5
            btn_submit.disabled='disabled'
            flag = false
        }
    })

    btn_submit.addEventListener('click',function(e){
            e = e || window.event
            e.preventDefault()
           let phone = inp_phone.value
           let pass = inp_pass.value

           let xhr = new XMLHttpRequest()
           xhr.open('POST','/dq')
           xhr.onload=function(){
                let res = JSON.parse(xhr.responseText)
                if(res.code==1){
                    window.location.href="./login.html"
                }else{
                    return alert('注册失败')
                }

            }
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(`user=${phone}&pass=${pass}`)
    })