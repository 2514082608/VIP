        //��ɱ����ʱ
            function getTime(a){
                var new_date = new Date('2020-7-12 11:50:10')
                    var time = Math.abs(a.getTime()-new_date.getTime())
                    var hour = parseInt(time%(1000*60*60*24)/(1000*60*60))
                    var mintue = parseInt(time%(1000*60*60)/(1000*60))
                    var second = parseInt(time%(1000*60)/1000)
                    var obj = {hour,mintue,second}
                    return obj
            }
            setInterval(function(){
                var x = new Date()
                var res = getTime(x)
                $('.txt1').html(`${res.hour}`)
                $('.txt2').html(`${res.mintue}`)
                $('.txt3').html(`${res.second}`)
            }, 1000);

        var mySwiper = new Swiper('#bannerBox', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'fade',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        })
        var mySwiper = new Swiper('#bannerBox2', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        })
        var mySwiper = new Swiper('#bannerBox3', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        })
        var mySwiper = new Swiper('#bannerBox4', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        })
        var mySwiper = new Swiper('#bannerBox5', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        })  
        var mySwiper = new Swiper('#bannerBox6', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        }) 
         var mySwiper = new Swiper('#bannerBox7', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        }) 
         var mySwiper = new Swiper('#bannerBox8', {
          direction: 'horizontal', // ��ֱ�л�ѡ��
          loop: true, // ѭ��ģʽѡ��
          autoplay: {
            disableOnInteraction: false,
            delay: 500 // �೤ʱ���л�һ��ͼƬ
          },
          speed: 800, // ����ͼƬ���л��ٶ�
          effect: 'flip',
          // ��ҳ��
          pagination: {
            // el: '.swiper-scrollbar',
            type : 'progressbar',
          },
         navigation: {
              // ��һ��ʹ����һ��Ԫ��
              nextEl: '.swiper-button-next',
              // ��һ��ʹ����һ��Ԫ��
              prevEl: '.swiper-button-prev',
            },
            scrollbar: {
              // el ʹ����һ��Ԫ��
              el: '.swiper-scrollbar',
            },
        })

        //动态生成选项卡
        //按钮菜单消失
        function btnNone(){
          $('.select_btn').css({display:'none'})
          $('.select_block').css({display:'none'})
          $(' .show_box').css({display:'none'})
        }
        //按钮菜单显示
        function btnBlock(){
          $('.select_btn').css({display:'block'})
          $('.select_block').css({display:'block'})
         
          $(' .show_box').css({display:'block'})
        }

        //移入
        $('.header-list>.show').mouseover(()=>{
          btnBlock()
          
        })

        
        //移出
        $('.header-list>.show').mouseout(()=>{
          btnNone()
        })

        //移入自己的身上
        $('.select_btn').mouseover(()=>{
          btnBlock()
        
        })
        $('.select_btn').mouseout(()=>{
          btnNone()
        })

        $('.select_block').mouseover(()=>{
          btnBlock()
        
        })
        $('.select_block').mouseout(()=>{
          btnNone()
        })
       
        // $('.header-list>.show').click(() => {
        //   // 在这里让 div 进行显示隐藏的切换
        //   $(".select_btn").slideToggle(1000, 'linear', () => console.log('切换动画结束了'))
        // })

        //切换案例
      
        let btn2 = document.querySelectorAll('.select_btn>li')
        let  txt = document.querySelectorAll('.select_block>li')
        for(let i = 0;i < btn2.length;i++){
           btn2[i].addEventListener('mouseover',function(){
                for(let j = 0;j < txt.length;j++){
                    btn2[j].className=''
                    txt[j].className=''
                }
                btn2[i].className = 'active'
                txt[i].className = 'xianshi'
           })
        }


        var btn3 = document.querySelectorAll('.btn li')
        
        //�ֲ��л�
        for(let i = 0;i<btn3.length;i++){
                btn3[i].index=i+1
          btn3[i].addEventListener('mouseover',function(){
             for(let i = 0;i<btn3.length;i++){
                btn3[i].className=''
             }
             this.className='btn-active'
            })
        }


    
      


        var a = {"code":200,"msg":"success","data":{"items":["100653971","100602683","100676234","100600528","100698811","100654440","100693799","100614257","100657471","100683764","100657122","100681754","100658081","100602571","100693679","100683707","100602572","100683161","100698034","100700006","100678455","100650522","100696603","100691750","100698769","100694267","100702750","100702752","100602679","100701570","100602678","100678605","100676283","100602875","100677846","100615041","100694087","100676369","100687500","100696435","100600265","100699759","100694103","100672034","100698875","100694915","100696836","100696604","100695808","100657070","100698140","100698754","100654298","100654514","100666797","100683412","100666820","100683752","100684084","100701074","100655580","100698860","100663197","100699651","100686850","100667810","100686673","100654219","100586760","100677218","100667472","100663538","100666839","100657051","100631754","100657033","100631753","100698498","100696623","100657386"],"brandInfo":{"100653971":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100653971","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/138\/ias_9dc927a3-555c-4aa5-89f1-01fdb8cbe8ea_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/138\/ias_9dc927a3-555c-4aa5-89f1-01fdb8cbe8ea_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/138\/ias_9dc927a3-555c-4aa5-89f1-01fdb8cbe8ea.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"GXG\u5185\u8863\u978b\u670d\u4e13\u573a","brandStoreSn":"10001160","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100653971.html","showTimeFrom":1587980286,"topFiveCountTime":1594519200},"100602683":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100602683","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/30\/ias_159279276557863_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/30\/ias_159279276557863_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/30\/ias_159279276557863.jpg","agio":"<span class=\"salebg2\">0.2<\/span>\u6298\u8d77","salesName":"\u8bd7\u7bc7PSALTER\u5973\u88c5-\u5e74\u4e2d\u7279\u5356\u4e13\u573a","brandStoreSn":"10000955","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100602683.html","showTimeFrom":1583805600,"topFiveCountTime":1594519200},"100676234":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100676234","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/09\/89\/ias_159426148970572_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/09\/89\/ias_159426148970572_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/09\/89\/ias_159426148970572.jpg","agio":"<span class=\"salebg2\">0.9<\/span>\u6298\u8d77","salesName":"\u592a\u5e73\u9e1f\u5973\u88c5-\u65f6\u5c1a\u98ce\u66b4","brandStoreSn":"10001155","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100676234.html","showTimeFrom":1593828000,"topFiveCountTime":1594519200},"100600528":{"activeIndexTips":"","displayEndtime":1598752799,"salesNo":"100600528","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/103\/ias_159011337571809_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/103\/ias_159011337571809_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/103\/ias_159011337571809.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u8d77","salesName":"\u8fea\u5965Dior\u4eca\u65e5\u5927\u724c-\u5316\u5986\u54c1\u4e13\u573a","brandStoreSn":"10000359","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100600528.html","showTimeFrom":1584237600,"topFiveCountTime":1594519200},"100698811":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698811","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/76\/ias_159011758192087_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/76\/ias_159011758192087_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/76\/ias_159011758192087.jpg","agio":"<span class=\"salebg2\">4.8<\/span>\u6298\u5c01\u9876","salesName":"\u5b89\u5fb7\u739bUNDER ARMOUR-\u8fd0\u52a8\u978b\u670d\u4e13\u573a","brandStoreSn":"10021213","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698811.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100654440":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100654440","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/21\/145\/ias_75d4c12f-a100-41a8-b7ca-08b36743328f_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/21\/145\/ias_75d4c12f-a100-41a8-b7ca-08b36743328f_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/21\/145\/ias_75d4c12f-a100-41a8-b7ca-08b36743328f.jpg","agio":"<span class=\"salebg2\">1.8<\/span>\u6298\u8d77","salesName":"adidas\u8fd0\u52a8\u6237\u5916\u4e13\u573a","brandStoreSn":"10000223","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100654440.html","showTimeFrom":1587980370,"topFiveCountTime":1594519200},"100693799":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100693799","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/03\/172\/ias_159374221992040_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/03\/172\/ias_159374221992040_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/03\/172\/ias_159374221992040.jpg","agio":"<span class=\"salebg2\">2.3<\/span>\u6298\u8d77","salesName":"\u65af\u51ef\u5947SKECHERS\u8212\u9002\u4f11\u95f2\u7537\u5973\u978b\u4e13\u573a","brandStoreSn":"10000721","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100693799.html","showTimeFrom":1593482400,"topFiveCountTime":1594519200},"100614257":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100614257","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/10\/64\/ias_159437007186649_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/10\/64\/ias_159437007186649_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/10\/64\/ias_159437007186649.jpg","agio":"<span class=\"salebg2\">3.5<\/span>\u6298\u8d77","salesName":"HLA\u6d77\u6f9c\u4e4b\u5bb6-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10020427","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100614257.html","showTimeFrom":1585101600,"topFiveCountTime":1594519200},"100657471":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100657471","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/27\/77\/ias_64bf9ecc-0164-460f-9115-4889e598a146_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/27\/77\/ias_64bf9ecc-0164-460f-9115-4889e598a146_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/27\/77\/ias_64bf9ecc-0164-460f-9115-4889e598a146.jpg","agio":"<span class=\"salebg2\">2<\/span>\u6298\u8d77","salesName":"\u4e38\u7f8e\u7f8e\u5bb9\u62a4\u80a4\u4e13\u573a","brandStoreSn":"10000750","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100657471.html","showTimeFrom":1588153152,"topFiveCountTime":1594519200},"100683764":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100683764","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/19\/131\/ias_33769ad6-91a0-4c53-897a-81ed3f355038_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/19\/131\/ias_33769ad6-91a0-4c53-897a-81ed3f355038_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/19\/131\/ias_33769ad6-91a0-4c53-897a-81ed3f355038.jpg","agio":"<span class=\"salebg2\">0.9<\/span>\u6298\u8d77","salesName":"\u5bff\u5168\u658b\u98df\u54c1\u996e\u6599\u4e13\u573a","brandStoreSn":"10011878","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100683764.html","showTimeFrom":1590205163,"topFiveCountTime":1594519200},"100657122":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100657122","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/04\/149\/ias_5ff684ef-a972-4112-a01d-11796371647c_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/04\/149\/ias_5ff684ef-a972-4112-a01d-11796371647c_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/04\/149\/ias_5ff684ef-a972-4112-a01d-11796371647c.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u4e3d\u4e3d\u5973\u88c5\u4e13\u573a","brandStoreSn":"10000547","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100657122.html","showTimeFrom":1588153087,"topFiveCountTime":1594519200},"100681754":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100681754","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/25\/51\/ias_159308119790220_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/25\/51\/ias_159308119790220_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/25\/51\/ias_159308119790220.jpg","agio":"<span class=\"salebg2\">1.4<\/span>\u6298\u8d77","salesName":"\u5df4\u62c9\u5df4\u62c9\u7ae5\u88c5\u7ae5\u978b\u4e13\u573a","brandStoreSn":"10004119","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100681754.html","showTimeFrom":1590122373,"topFiveCountTime":1594519200},"100658081":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100658081","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/24\/ias_6be0ca7d-3351-476f-899f-39691cee0320_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/24\/ias_6be0ca7d-3351-476f-899f-39691cee0320_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/24\/ias_6be0ca7d-3351-476f-899f-39691cee0320.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u7231\u6155\u6587\u80f8\/\u80f8\u7f69\u4e13\u573a","brandStoreSn":"10000256","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100658081.html","showTimeFrom":1588214285,"topFiveCountTime":1594519200},"100602571":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100602571","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/69\/ias_159011251688234_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/69\/ias_159011251688234_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/69\/ias_159011251688234.jpg","agio":"<span class=\"salebg2\">1.4<\/span>\u6298\u8d77","salesName":"\u6b27\u65f6\u529bochirly\u5973\u88c5-\u590f\u88c5\u7279\u5356\u4e13\u573a","brandStoreSn":"10000646","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100602571.html","showTimeFrom":1585706400,"topFiveCountTime":1594519200},"100693679":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100693679","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/28\/39\/ias_159332587526938_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/28\/39\/ias_159332587526938_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/28\/39\/ias_159332587526938.jpg","agio":"<span class=\"salebg2\">0.4<\/span>\u6298\u8d77","salesName":"\u888b\u9f20\u5988\u5988\u5b55\u5988\u7528\u54c1\u4eca\u65e5\u5927\u724c","brandStoreSn":"10015807","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100693679.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100683707":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100683707","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/23\/187\/ias_6f1f2adb-e69e-4a70-a94e-bb2f14ca6904_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/23\/187\/ias_6f1f2adb-e69e-4a70-a94e-bb2f14ca6904_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/23\/187\/ias_6f1f2adb-e69e-4a70-a94e-bb2f14ca6904.jpg","agio":"<span class=\"salebg2\">1.9<\/span>\u6298\u8d77","salesName":"\u6d77\u5e95\u635e HI\u98df\u6750\u8c03\u5473\u4e13\u573a","brandStoreSn":"10030275","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100683707.html","showTimeFrom":1590205081,"topFiveCountTime":1594519200},"100602572":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100602572","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/95\/ias_159011249273432_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/95\/ias_159011249273432_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/95\/ias_159011249273432.jpg","agio":"<span class=\"salebg2\">0.7<\/span>\u6298\u8d77","salesName":"FIVE PLUS\u5973\u88c5-\u590f\u88c5\u7279\u5356\u4e13\u573a","brandStoreSn":"10011895","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100602572.html","showTimeFrom":1585706400,"topFiveCountTime":1594519200},"100683161":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100683161","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/23\/99\/ias_6d60228b-714c-4835-80f1-f88332322c87_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/23\/99\/ias_6d60228b-714c-4835-80f1-f88332322c87_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/23\/99\/ias_6d60228b-714c-4835-80f1-f88332322c87.jpg","agio":"<span class=\"salebg2\">1.1<\/span>\u6298\u8d77","salesName":"\u74f7\u808c\u9762\u90e8\u62a4\u7406\u4e13\u573a","brandStoreSn":"10011914","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100683161.html","showTimeFrom":1590165480,"topFiveCountTime":1594519200},"100698034":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698034","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/11\/76\/ias_159445416461728_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/11\/76\/ias_159445416461728_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/11\/76\/ias_159445416461728.jpg","agio":"<span class=\"salebg2\">4<\/span>\u6298\u5c01\u9876","salesName":"HAVVA\u5973\u88c5\u7206\u6b3e\u72c2\u6b22\u4e13\u573a","brandStoreSn":"10029139","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698034.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100700006":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100700006","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/122\/ias_159349868318656_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/122\/ias_159349868318656_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/122\/ias_159349868318656.jpg","agio":"<span class=\"salebg2\">1.1<\/span>\u6298\u8d77","salesName":"\u72ee\u738bLION\u4eca\u65e5\u5927\u724c-\u53e3\u8154\u62a4\u7406\u4e13\u573a","brandStoreSn":"10004648","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100700006.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100678455":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100678455","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/10\/ias_159357031149916_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/10\/ias_159357031149916_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/10\/ias_159357031149916.jpg","agio":"<span class=\"salebg2\">1<\/span>\u6298\u8d77","salesName":"\u7396\u59ffJUZUI\u5973\u88c5\u4e13\u573a","brandStoreSn":"10000474","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100678455.html","showTimeFrom":1590976800,"topFiveCountTime":1594519200},"100650522":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100650522","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/26\/ias_159011309393180_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/26\/ias_159011309393180_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/26\/ias_159011309393180.jpg","agio":"<span class=\"salebg2\">0.9<\/span>\u6298\u8d77","salesName":"\u590f\u65e5\u60ca\u559c\u2014\u767e\u4e3dBeLLE\u7537\u5973\u978b\u4e13\u573a","brandStoreSn":"10026338","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100650522.html","showTimeFrom":1588298400,"topFiveCountTime":1594519200},"100696603":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100696603","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/177\/ias_159437248168685_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/177\/ias_159437248168685_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/177\/ias_159437248168685.jpg","agio":"<span class=\"salebg2\">2.1<\/span>\u6298\u8d77","salesName":"\u5b89\u8e0fANTA\u70ed\u9500\u7206\u6b3e\u7537\u5973\u8fd0\u52a8&\u513f\u7ae5\u978b\u670d\u4e13\u573a","brandStoreSn":"10000269","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100696603.html","showTimeFrom":1593914400,"topFiveCountTime":1594519200},"100691750":{"activeIndexTips":"","displayEndtime":1596160800,"salesNo":"100691750","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/03\/44\/ias_159374287787790_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/03\/44\/ias_159374287787790_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/03\/44\/ias_159374287787790.jpg","agio":"<span class=\"salebg2\">1.2<\/span>\u6298\u8d77","salesName":"\u5f6a\u9a6cPUMA\u7537\u5973\u8fd0\u52a8&\u513f\u7ae5\u4e13\u573a","brandStoreSn":"10000329","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100691750.html","showTimeFrom":1592791200,"topFiveCountTime":1594519200},"100698769":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698769","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/06\/35\/ias_159400414412069_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/06\/35\/ias_159400414412069_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/06\/35\/ias_159400414412069.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u5361\u5bbeCABBEEN\u7537\u88c5\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10000477","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698769.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100694267":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100694267","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/41\/ias_159351331873825_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/41\/ias_159351331873825_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/41\/ias_159351331873825.jpg","agio":"<span class=\"salebg2\">4.5<\/span>\u6298\u5c01\u9876","salesName":"La Chapelle SPORT\u5973\u88c5-\u76db\u590f\u4e0a\u65b0\u4e13\u573a","brandStoreSn":"10007326","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100694267.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100702750":{"activeIndexTips":"","displayEndtime":1594692000,"salesNo":"100702750","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/06\/140\/ias_159402721539666_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/06\/140\/ias_159402721539666_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/06\/140\/ias_159402721539666.jpg","agio":"<span class=\"salebg2\">1.1<\/span>\u6298\u8d77","salesName":"\u4ed6\u5979TATA\u7537\u5973\u978b\u4e13\u573a-\u767e\u4e3d\u96c6\u56e2\u5927\u724c\u65e5","brandStoreSn":"10000731","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100702750.html","showTimeFrom":1594432800,"topFiveCountTime":1594519200},"100702752":{"activeIndexTips":"","displayEndtime":1594692000,"salesNo":"100702752","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/130\/ias_159419757366184_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/130\/ias_159419757366184_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/130\/ias_159419757366184.jpg","agio":"<span class=\"salebg2\">1.2<\/span>\u6298\u8d77","salesName":"\u5929\u7f8e\u610fteenmix\u7537\u5973\u978b\u4e13\u573a-\u767e\u4e3d\u96c6\u56e2\u5927\u724c\u65e5","brandStoreSn":"10026339","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100702752.html","showTimeFrom":1594432800,"topFiveCountTime":1594519200},"100602679":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100602679","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/03\/160\/ias_159376459304894_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/03\/160\/ias_159376459304894_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/03\/160\/ias_159376459304894.jpg","agio":"<span class=\"salebg2\">0.8<\/span>\u6298\u8d77","salesName":"\u6069\u88f3INSUN\u5973\u88c5-\u65f6\u5c1a\u98ce\u66b4","brandStoreSn":"10000957","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100602679.html","showTimeFrom":1583805600,"topFiveCountTime":1594519200},"100701570":{"activeIndexTips":"","displayEndtime":1594951200,"salesNo":"100701570","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/14\/ias_159434672977453_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/14\/ias_159434672977453_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/14\/ias_159434672977453.jpg","agio":"<span class=\"salebg2\">0.5<\/span>\u6298\u8d77","salesName":"\u6717\u59ff\u96c6\u56e2-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100701570.html","showTimeFrom":1594260000,"topFiveCountTime":1594519200},"100602678":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100602678","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/28\/168\/ias_159333476416853_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/28\/168\/ias_159333476416853_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/28\/168\/ias_159333476416853.jpg","agio":"<span class=\"salebg2\">0.8<\/span>\u6298\u8d77","salesName":"\u97f3\u513fYINER\u5973\u88c5-\u5e74\u4e2d\u7279\u5356\u4e13\u573a","brandStoreSn":"10000956","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100602678.html","showTimeFrom":1583805600,"topFiveCountTime":1594519200},"100678605":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100678605","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/70\/ias_159253919066632_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/70\/ias_159253919066632_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/70\/ias_159253919066632.jpg","agio":"<span class=\"salebg2\">1.8<\/span>\u6298\u8d77","salesName":"\u5b8c\u7f8e\u65e5\u8bb0PERFECT DIARY\u4eca\u65e5\u5927\u724c-\u5f69\u5986\u4e13\u573a","brandStoreSn":"10032004","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100678605.html","showTimeFrom":1590976800,"topFiveCountTime":1594519200},"100676283":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100676283","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/103\/ias_159358206778171_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/103\/ias_159358206778171_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/103\/ias_159358206778171.jpg","agio":"<span class=\"salebg2\">4.8<\/span>\u6298\u5c01\u9876","salesName":"IHIMI\u5973\u88c5--\u65f6\u5c1a\u98ce\u66b4","brandStoreSn":"10028906","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100676283.html","showTimeFrom":1590976800,"topFiveCountTime":1594519200},"100602875":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100602875","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/163\/ias_159012002819703_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/163\/ias_159012002819703_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/163\/ias_159012002819703.jpg","agio":"<span class=\"salebg2\">4.7<\/span>\u6298\u8d77","salesName":"\u5c0f\u7c73MI\u624b\u673a\u6570\u7801\u5bb6\u7535\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100602875.html","showTimeFrom":1583805600,"topFiveCountTime":1594519200},"100677846":{"activeIndexTips":"","displayEndtime":1596247200,"salesNo":"100677846","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/28\/142\/ias_159331725156951_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/28\/142\/ias_159331725156951_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/28\/142\/ias_159331725156951.jpg","agio":"<span class=\"salebg2\">1<\/span>\u6298\u8d77","salesName":"\u9edb\u5b89\u82acTriumph\u5185\u8863\u4e13\u573a","brandStoreSn":"10000346","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100677846.html","showTimeFrom":1590631200,"topFiveCountTime":1594519200},"100615041":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100615041","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/189\/ias_159358592428743_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/189\/ias_159358592428743_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/189\/ias_159358592428743.jpg","agio":"<span class=\"salebg2\">2<\/span>\u6298\u8d77","salesName":"\u534e\u4e3a\u624b\u673a\u6570\u7801\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100615041.html","showTimeFrom":1584064800,"topFiveCountTime":1594519200},"100694087":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100694087","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/1\/ias_159359229000390_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/1\/ias_159359229000390_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/1\/ias_159359229000390.jpg","agio":"<span class=\"salebg2\">5.8<\/span>\u6298\u8d77","salesName":"\u82f9\u679cAPPLE\u5e73\u677f\u7535\u8111\u4e13\u573a","brandStoreSn":"10005612","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100694087.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100676369":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100676369","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/10\/64\/ias_159437677926363_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/10\/64\/ias_159437677926363_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/10\/64\/ias_159437677926363.jpg","agio":"<span class=\"salebg2\">4.5<\/span>\u6298\u5c01\u9876","salesName":"\u6c99\u53d1SOFA\u5973\u88c5-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10004582","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100676369.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100687500":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100687500","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/95\/ias_159255142065234_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/95\/ias_159255142065234_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/95\/ias_159255142065234.jpg","agio":"<span class=\"salebg2\">3.6<\/span>\u6298\u5c01\u9876","salesName":"\u7f57\u8863Roeyshouse\u5973\u88c5\u4e13\u573a","brandStoreSn":"10037567","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100687500.html","showTimeFrom":1592791200,"topFiveCountTime":1594519200},"100696435":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100696435","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/123\/ias_159419753667493_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/123\/ias_159419753667493_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/123\/ias_159419753667493.jpg","agio":"<span class=\"salebg2\">2.2<\/span>\u6298\u8d77","salesName":"\u5df4\u62c9\u5df4\u62c9balabala\u7ae5\u88c5\u7ae5\u978b-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10004119","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100696435.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100600265":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100600265","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/136\/ias_159012024318274_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/136\/ias_159012024318274_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/136\/ias_159012024318274.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u7231\u6155AIMER\u5185\u8863&\u5bb6\u5c45\u670d\u4e13\u573a","brandStoreSn":"10000256","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100600265.html","showTimeFrom":1583719200,"topFiveCountTime":1594519200},"100699759":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100699759","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/99\/ias_159352280027758_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/99\/ias_159352280027758_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/99\/ias_159352280027758.jpg","agio":"<span class=\"salebg2\">6.6<\/span>\u6298\u8d77","salesName":"\u8363\u8000HONOR\u624b\u673a\u4e13\u573a","brandStoreSn":"10015575","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100699759.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100694103":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100694103","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/29\/110\/ias_159342353559155_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/29\/110\/ias_159342353559155_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/29\/110\/ias_159342353559155.jpg","agio":"<span class=\"salebg2\">2.2<\/span>\u6298\u5c01\u9876","salesName":"\u5b9d\u5a1c\u65afBONAS\u889c\u5b50\u6625\u4e0a\u65b0\u7279\u5356\u4e13\u573a","brandStoreSn":"10000307","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100694103.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100672034":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100672034","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/63\/ias_159013355168083_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/63\/ias_159013355168083_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/22\/63\/ias_159013355168083.jpg","agio":"<span class=\"salebg2\">3<\/span>\u6298\u5c01\u9876","salesName":"\u5357\u6781\u4eba\u889c\u5b50\u5185\u8863\u4e13\u573a","brandStoreSn":"10004554","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100672034.html","showTimeFrom":1590976800,"topFiveCountTime":1594519200},"100698875":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698875","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/20\/ias_159437510072167_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/20\/ias_159437510072167_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/10\/20\/ias_159437510072167.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u68ee\u9a6cSemir\u8fd0\u52a8-\u65f6\u5c1a\u98ce\u66b4","brandStoreSn":"10004116","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698875.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100694915":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100694915","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/30\/180\/ias_159351085756923_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/30\/180\/ias_159351085756923_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/30\/180\/ias_159351085756923.jpg","agio":"<span class=\"salebg2\">3.5<\/span>\u6298\u5c01\u9876","salesName":"\u8fdc\u9633\u8fd0\u52a8\u5957\u88c5&\u745c\u4f3d-\u7279\u5356\u4e13\u573a","brandStoreSn":"10004098","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100694915.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100696836":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100696836","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/29\/132\/ias_159341300777076_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/29\/132\/ias_159341300777076_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/29\/132\/ias_159341300777076.jpg","agio":"<span class=\"salebg2\">3.3<\/span>\u6298\u5c01\u9876","salesName":"\u7cbe\u5178\u6cf0\u8feaClassic Teddy\u5a74\u7ae5\u670d\u9970\u4eca\u65e5\u5927\u724c","brandStoreSn":"10006741","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100696836.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100696604":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100696604","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/06\/12\/ias_159399898357993_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/06\/12\/ias_159399898357993_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/06\/12\/ias_159399898357993.jpg","agio":"<span class=\"salebg2\">2.2<\/span>\u6298\u8d77","salesName":"\u5b89\u8e0f\u513f\u7ae5\u590f\u65e5\u65b0\u54c1\u978b\u670d\u6f6e\u642d\u4e13\u573a","brandStoreSn":"10000269","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100696604.html","showTimeFrom":1593914400,"topFiveCountTime":1594519200},"100695808":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100695808","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/95\/ias_159350940135788_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/95\/ias_159350940135788_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/95\/ias_159350940135788.jpg","agio":"<span class=\"salebg2\">4<\/span>\u6298\u5c01\u9876","salesName":"GXG\u7537\u978b\u4e13\u573a","brandStoreSn":"10001160","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100695808.html","showTimeFrom":1593568740,"topFiveCountTime":1594519200},"100657070":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100657070","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/175\/ias_37564100-85b9-4827-b54f-55e3907ce476_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/175\/ias_37564100-85b9-4827-b54f-55e3907ce476_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/01\/175\/ias_37564100-85b9-4827-b54f-55e3907ce476.jpg","agio":"<span class=\"salebg2\">0.7<\/span>\u6298\u8d77","salesName":"\u592a\u5e73\u9e1f\u7537\u88c5\u4e13\u573a","brandStoreSn":"10001155","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100657070.html","showTimeFrom":1588153083,"topFiveCountTime":1594519200},"100698140":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698140","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/58\/ias_159358351985884_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/58\/ias_159358351985884_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/58\/ias_159358351985884.jpg","agio":"<span class=\"salebg2\">3.4<\/span>\u6298\u5c01\u9876","salesName":"VING\u5973\u88c5-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10021742","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698140.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100698754":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698754","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/103\/ias_159350241216123_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/103\/ias_159350241216123_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/103\/ias_159350241216123.jpg","agio":"<span class=\"salebg2\">2<\/span>\u6298\u8d77","salesName":"\u65af\u51ef\u5947\u76db\u590f\u6f6e\u7ae5\u978b\u670d\u4e13\u573a","brandStoreSn":"10000721","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698754.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100654298":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100654298","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/07\/131\/ias_8d9a136c-e7cf-49aa-84a3-eefb7afaa0a5_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/07\/131\/ias_8d9a136c-e7cf-49aa-84a3-eefb7afaa0a5_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/07\/131\/ias_8d9a136c-e7cf-49aa-84a3-eefb7afaa0a5.jpg","agio":"<span class=\"salebg2\">0.7<\/span>\u6298\u8d77","salesName":"FIVE PLUS\u5973\u88c5\u4e13\u573a","brandStoreSn":"10011895","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100654298.html","showTimeFrom":1587980353,"topFiveCountTime":1594519200},"100654514":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100654514","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/11\/130\/ias_159445331623940_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/11\/130\/ias_159445331623940_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/11\/130\/ias_159445331623940.jpg","agio":"<span class=\"salebg2\">4<\/span>\u6298\u5c01\u9876","salesName":"Havva\u5973\u88c5\u4e13\u573a","brandStoreSn":"10029139","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100654514.html","showTimeFrom":1587980379,"topFiveCountTime":1594519200},"100666797":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100666797","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/96\/ias_01b112b6-7fb5-454f-95b2-5ebfe769793e_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/96\/ias_01b112b6-7fb5-454f-95b2-5ebfe769793e_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/96\/ias_01b112b6-7fb5-454f-95b2-5ebfe769793e.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u53cc\u80a9\u5305\u83b1\u592b\/\u9ad8\u5c14\u592b\/\u6731\u5c14\/\u67cf\u96c5\u56fe\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100666797.html","showTimeFrom":1589189884,"topFiveCountTime":1594519200},"100683412":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100683412","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/09\/133\/ias_85b9c9c0-988d-4dd0-a7a2-a5a919c3b39e_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/09\/133\/ias_85b9c9c0-988d-4dd0-a7a2-a5a919c3b39e_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/09\/133\/ias_85b9c9c0-988d-4dd0-a7a2-a5a919c3b39e.jpg","agio":"<span class=\"salebg2\">1.1<\/span>\u6298\u8d77","salesName":"\u5c0f\u718a\u5bb6\u7528\u7535\u5668\u4e13\u573a","brandStoreSn":"10000780","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100683412.html","showTimeFrom":1590165580,"topFiveCountTime":1594519200},"100666820":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100666820","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/4\/ias_e6325ffb-66c6-4100-9b79-183133b8a251_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/4\/ias_e6325ffb-66c6-4100-9b79-183133b8a251_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/4\/ias_e6325ffb-66c6-4100-9b79-183133b8a251.jpg","agio":"<span class=\"salebg2\">0.8<\/span>\u6298\u8d77","salesName":"\u868a\u5e10\u89c9\u5148\u751f\/\u4f18\u96c5100,\/\u5927\u7ea2\u5927\u7d2b\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100666820.html","showTimeFrom":1589189888,"topFiveCountTime":1594519200},"100683752":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100683752","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/90\/ias_ae3f6677-d790-472b-93f3-e2c298ed5982_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/90\/ias_ae3f6677-d790-472b-93f3-e2c298ed5982_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/90\/ias_ae3f6677-d790-472b-93f3-e2c298ed5982.jpg","agio":"<span class=\"salebg2\">1.7<\/span>\u6298\u8d77","salesName":"\u91d1\u5510\u4e13\u573a","brandStoreSn":"10025263","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100683752.html","showTimeFrom":1590205153,"topFiveCountTime":1594519200},"100684084":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100684084","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/25\/128\/ias_5f1a7e6c-b851-41bb-a2a7-a460b33b0e2e_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/25\/128\/ias_5f1a7e6c-b851-41bb-a2a7-a460b33b0e2e_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/25\/128\/ias_5f1a7e6c-b851-41bb-a2a7-a460b33b0e2e.jpg","agio":"<span class=\"salebg2\">5.5<\/span>\u6298\u8d77","salesName":"\u5473\u6ecb\u6e90\u4f11\u95f2\u96f6\u98df\u4e13\u573a","brandStoreSn":"10032976","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100684084.html","showTimeFrom":1590334683,"topFiveCountTime":1594519200},"100701074":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100701074","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/125\/ias_6123fafe-3422-4936-877a-29c8d8d3fe49_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/125\/ias_6123fafe-3422-4936-877a-29c8d8d3fe49_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/125\/ias_6123fafe-3422-4936-877a-29c8d8d3fe49.jpg","agio":"<span class=\"salebg2\">0.6<\/span>\u6298\u8d77","salesName":"\u5e8a\u4e0a\u7528\u54c1LOVO\/\u7f57\u83b1\/\u7f57\u83b1\u513f\u7ae5\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100701074.html","showTimeFrom":1593607185,"topFiveCountTime":1594519200},"100655580":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100655580","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/151\/ias_239517b5-00c9-4e6f-b2ac-ea7532ae9c31_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/151\/ias_239517b5-00c9-4e6f-b2ac-ea7532ae9c31_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/19\/151\/ias_239517b5-00c9-4e6f-b2ac-ea7532ae9c31.jpg","agio":"<span class=\"salebg2\">0.7<\/span>\u6298\u8d77","salesName":"\u73a9\u5177\u8fea\u58eb\u5c3c\/\u4e50\u9ad8\/Hape\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100655580.html","showTimeFrom":1588063100,"topFiveCountTime":1594519200},"100698860":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100698860","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/29\/62\/ias_159343778979164_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/29\/62\/ias_159343778979164_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/29\/62\/ias_159343778979164.jpg","agio":"<span class=\"salebg2\">2.5<\/span>\u6298\u5c01\u9876","salesName":"\u6d01\u4e3d\u96c5\u6bdb\u5dfe\u6d74\u5dfe-\u4eca\u65e5\u5927\u724c","brandStoreSn":"10010067","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698860.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100663197":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100663197","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/26\/27\/ias_9167eda7-3e03-4101-82cd-062efd92c71c_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/26\/27\/ias_9167eda7-3e03-4101-82cd-062efd92c71c_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/26\/27\/ias_9167eda7-3e03-4101-82cd-062efd92c71c.jpg","agio":"<span class=\"salebg2\">1.2<\/span>\u6298\u8d77","salesName":"adidas\u7ae5\u88c5\u7ae5\u978b\u4e13\u573a","brandStoreSn":"10000223","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100663197.html","showTimeFrom":1588761567,"topFiveCountTime":1594519200},"100699651":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100699651","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/198\/ias_159350839427727_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/198\/ias_159350839427727_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/30\/198\/ias_159350839427727.jpg","agio":"<span class=\"salebg2\">2.4<\/span>\u6298\u8d77","salesName":"\u82cf\u83f2SOFY\u4eca\u65e5\u5927\u724c-\u4e2a\u4eba\u62a4\u7406\u4e13\u573a","brandStoreSn":"10015133","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100699651.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100686850":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100686850","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/21\/82\/ias_c65aaa7f-5fe4-4e5c-acfd-68e955b54c53_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/21\/82\/ias_c65aaa7f-5fe4-4e5c-acfd-68e955b54c53_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/21\/82\/ias_c65aaa7f-5fe4-4e5c-acfd-68e955b54c53.jpg","agio":"<span class=\"salebg2\">3<\/span>\u6298\u8d77","salesName":"\u7537\u58eb\u62a4\u7406\u6b27\u83b1\u96c5\/\u78a7\u6b27\u6cc9\/NIVEA\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100686850.html","showTimeFrom":1590979214,"topFiveCountTime":1594519200},"100667810":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100667810","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/75\/ias_c1533937-cb8f-418b-89df-ff19184c81af_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/75\/ias_c1533937-cb8f-418b-89df-ff19184c81af_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/75\/ias_c1533937-cb8f-418b-89df-ff19184c81af.jpg","agio":"<span class=\"salebg2\">0.8<\/span>\u6298\u8d77","salesName":"Candy Moyo\u5316\u5986\u54c1\u4e13\u573a","brandStoreSn":"10007808","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100667810.html","showTimeFrom":1589269092,"topFiveCountTime":1594519200},"100686673":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100686673","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/47\/ias_ea379622-b3fd-42c5-a750-44f5678797a3_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/47\/ias_ea379622-b3fd-42c5-a750-44f5678797a3_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/47\/ias_ea379622-b3fd-42c5-a750-44f5678797a3.jpg","agio":"<span class=\"salebg2\">1.9<\/span>\u6298\u8d77","salesName":"\u53e3\u8154\u62a4\u7406DARLIE\/\u8212\u5ba2\/\u4e91\u5357\u767d\u836f\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100686673.html","showTimeFrom":1590979148,"topFiveCountTime":1594519200},"100654219":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100654219","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/96\/ias_89d03a79-c830-4b68-a6c1-b3d7e4656f8e_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/96\/ias_89d03a79-c830-4b68-a6c1-b3d7e4656f8e_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/96\/ias_89d03a79-c830-4b68-a6c1-b3d7e4656f8e.jpg","agio":"<span class=\"salebg2\">1.4<\/span>\u6298\u8d77","salesName":"\u6b27\u65f6\u529b\u5973\u88c5\u4e13\u573a","brandStoreSn":"10000646","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100654219.html","showTimeFrom":1587980317,"topFiveCountTime":1594519200},"100586760":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100586760","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/06\/36\/ias_159399938949415_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/06\/36\/ias_159399938949415_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/06\/36\/ias_159399938949415.jpg","agio":"<span class=\"salebg2\">4.7<\/span>\u6298\u5c01\u9876","salesName":"viishow\u7537\u5973\u6df7\u5408\u88c5-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10013796","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100586760.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100677218":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100677218","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/08\/143\/ias_159417348075050_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/08\/143\/ias_159417348075050_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/08\/143\/ias_159417348075050.jpg","agio":"<span class=\"salebg2\">4.9<\/span>\u6298\u5c01\u9876","salesName":"\u63a5\u543b\u732bKISSCAT\u54c1\u8d28\u5973\u5305-\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10000456","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100677218.html","showTimeFrom":1590976800,"topFiveCountTime":1594519200},"100667472":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100667472","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/07\/08\/72\/ias_d06f4f4b-392c-491a-a963-7ac18b425d64_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/07\/08\/72\/ias_d06f4f4b-392c-491a-a963-7ac18b425d64_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/07\/08\/72\/ias_d06f4f4b-392c-491a-a963-7ac18b425d64.jpg","agio":"<span class=\"salebg2\">0.8<\/span>\u6298\u8d77","salesName":"\u7537\u88c5\u6d77\u6f9c\u4e4b\u5bb6\/FAIRY-FOX\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100667472.html","showTimeFrom":1589207956,"topFiveCountTime":1594519200},"100663538":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100663538","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/96\/ias_01e2f5a5-3295-4184-9171-38d465632400_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/96\/ias_01e2f5a5-3295-4184-9171-38d465632400_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/22\/96\/ias_01e2f5a5-3295-4184-9171-38d465632400.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"Chrisdien Deny\u7bb1\u5305\u978b\u5c65\u4e13\u573a","brandStoreSn":"10003218","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100663538.html","showTimeFrom":1588761714,"topFiveCountTime":1594519200},"100666839":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100666839","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/107\/ias_67fa8cf9-e1c6-484a-bfb4-cd3005afff03_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/107\/ias_67fa8cf9-e1c6-484a-bfb4-cd3005afff03_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/22\/107\/ias_67fa8cf9-e1c6-484a-bfb4-cd3005afff03.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u624b\u63d0\u5305\u6731\u5c14\/viney\/\u91d1\u72d0\u72f8\/\u853b\u4e00\u7b49\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100666839.html","showTimeFrom":1589189889,"topFiveCountTime":1594519200},"100657051":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100657051","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/06\/21\/37\/ias_1dc5dafe-4a1f-41e7-9c05-e9e0e0437287_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/06\/21\/37\/ias_1dc5dafe-4a1f-41e7-9c05-e9e0e0437287_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/06\/21\/37\/ias_1dc5dafe-4a1f-41e7-9c05-e9e0e0437287.jpg","agio":"<span class=\"salebg2\">1<\/span>\u6298\u8d77","salesName":"\u8bd7\u7bc7\u5973\u88c5\u4e13\u573a","brandStoreSn":"10000955","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100657051.html","showTimeFrom":1588153082,"topFiveCountTime":1594519200},"100631754":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100631754","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/06\/29\/147\/ias_159341484137411_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/06\/29\/147\/ias_159341484137411_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/06\/29\/147\/ias_159341484137411.jpg","agio":"<span class=\"salebg2\">4.9<\/span>\u6298\u5c01\u9876","salesName":"NO1DARA\u7537\u5973\u88c5\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10010793","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100631754.html","showTimeFrom":1585792800,"topFiveCountTime":1594519200},"100657033":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100657033","brandImage":{"size1":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/52\/ias_9d36aca2-c502-459d-981f-01f3754f8701_570x273_90.jpg","size2":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/52\/ias_9d36aca2-c502-459d-981f-01f3754f8701_320x153_90.jpg"},"mobileImageOne":"\/\/d.vpimg1.com\/upcb\/2020\/05\/21\/52\/ias_9d36aca2-c502-459d-981f-01f3754f8701.jpg","agio":"<span class=\"salebg2\">2.1<\/span>\u6298\u8d77","salesName":"\u5b89\u8e0f\u8fd0\u52a8\u978b\u4e13\u573a","brandStoreSn":"10000269","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100657033.html","showTimeFrom":1588153080,"topFiveCountTime":1594519200},"100631753":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100631753","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/80\/ias_159011922447060_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/80\/ias_159011922447060_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/22\/80\/ias_159011922447060.jpg","agio":"<span class=\"salebg2\">4.9<\/span>\u6298\u5c01\u9876","salesName":"\u62d3\u8def\u8005Pioneer Camp\u7537\u5973\u88c5\u4eca\u65e5\u5927\u724c\u4e13\u573a","brandStoreSn":"10016250","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100631753.html","showTimeFrom":1585706400,"topFiveCountTime":1594519200},"100698498":{"activeIndexTips":"\u7206\u6b3e\u70ed\u5356 \u4f4e\u81f329\u5143","displayEndtime":1594656000,"salesNo":"100698498","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/1\/ias_159419387243560_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/1\/ias_159419387243560_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/08\/1\/ias_159419387243560.jpg","agio":"<span class=\"salebg2\">5<\/span>\u6298\u5c01\u9876","salesName":"\u68ee\u9a6c\u7537\u5973\u88c5\u7206\u6b3e\u7279\u60e0\u4e13\u573a","brandStoreSn":"10004116","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100698498.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100696623":{"activeIndexTips":"","displayEndtime":1594656000,"salesNo":"100696623","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/159\/ias_159356948632044_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/159\/ias_159356948632044_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/07\/01\/159\/ias_159356948632044.jpg","agio":"<span class=\"salebg2\">3.8<\/span>\u6298\u5c01\u9876","salesName":"\u7a3b\u8349\u4eba\u978b\u5305\u7279\u60e0\u4e13\u573a","brandStoreSn":"","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":0,"iconInfo":[],"link":"\/\/list.vip.com\/100696623.html","showTimeFrom":1593568800,"topFiveCountTime":1594519200},"100657386":{"activeIndexTips":"","displayEndtime":2145887938,"salesNo":"100657386","brandImage":{"size1":"\/\/c.vpimg1.com\/upcb\/2020\/05\/21\/59\/ias_c0c15716-b8e9-4a57-b261-73d3c63ddf32_570x273_90.jpg","size2":"\/\/c.vpimg1.com\/upcb\/2020\/05\/21\/59\/ias_c0c15716-b8e9-4a57-b261-73d3c63ddf32_320x153_90.jpg"},"mobileImageOne":"\/\/c.vpimg1.com\/upcb\/2020\/05\/21\/59\/ias_c0c15716-b8e9-4a57-b261-73d3c63ddf32.jpg","agio":"<span class=\"salebg2\">4.5<\/span>\u6298\u5c01\u9876","salesName":"\u771f\u7ef4\u65af\u7537\u88c5\u4e13\u573a","brandStoreSn":"10011476","vendorSaleMessage":"","isSpecialBanner":"0","hiddenEndTime":1,"iconInfo":[],"link":"\/\/list.vip.com\/100657386.html","showTimeFrom":1588153112,"topFiveCountTime":1594519200}}}}
     console.log(a)  
        //数据渲染
const ulArr = document.querySelectorAll('.waterfall ul')
          // console.log(a.data.items)
      
        var goodsModule = [];
        
        a.data.items.forEach((item,index)=>{
          var obj = {};
          obj.agio = a.data.brandInfo[item].agio
          obj.url = a.data.brandInfo[item].brandImage.size1
          obj.salesName = a.data.brandInfo[item].salesName
          // console.log(a.data.brandInfo[item])
          goodsModule.push(obj)
        })

        goodsModule.forEach((item,index)=>{
          let str = ` <li>
         <a href="./shopList.html">
         <img src="https:${item.url}" alt="">
         </a>
          <h2>${item.salesName}</h2>
          ${item.agio}
      </li>`
          ulArr[0].innerHTML += str
        })

  
       
  //接收登陆的数据 渲染用户的名字

    function getCookie(key){
      let str = ''
      let cok = document.cookie.split('=') 
      if(cok[0]===key){
          str = cok[1]
      }
      return str
      }
      let client = document.querySelector('#client')
      var cok = getCookie('nickname')
      if(cok){
        client.innerHTML = cok
      }else{
        
      }
      



//顶部通栏
    let header_list = document.querySelector('.header-list')
    window.onscroll=function(){
      var top = document.documentElement.scrollTop || document.body.scrollTop
      if(top>200){
        header_list.style.position='fixed'
        header_list.style.top = 0
        header_list.style.left = 50+'%'
        header_list.style.marginLeft = 585 * -1 +'px'
        header_list.style.width = 100+'%'
       
      }else{
        header_list.style.width = 1170+'px'
        header_list.style.position='relative'
      }
    }



