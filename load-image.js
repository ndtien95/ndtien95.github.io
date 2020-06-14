document.addEventListener("DOMContentLoaded",function(){
	var imgs=document.querySelectorAll('.muchItem .oneItem'),
    links=document.querySelectorAll('.link'),
    black=document.querySelector('.black'),
    close=document.querySelector('.close'),
    infoImg=document.querySelector('.infoImg'),
    listImg=document.querySelectorAll('.blockImg ul li'),
    leftBtn=document.querySelector('.left'),
    rightBtn=document.querySelector('.right');



        //khi click nen den
        black.addEventListener('click',function(){
        	black.classList.remove('show');
        	infoImg.classList.remove('show');
    	//phai khai bao o trong vi khi click den moi co active
    	var anhactive=document.querySelector('li.active');
        anhactive.classList.remove('active');
    })
        //dung chung cho anh
        thutucuaactive=0;

        for (var i = 0; i < imgs.length; i++) {
        	imgs[i].addEventListener('click',function(){
        		black.classList.add('show');
        		infoImg.classList.add('show');
        		var anhduocclick=this;

        		for (var chiso= 0; anhduocclick=anhduocclick.previousElementSibling; chiso++) {}

					//in ra phan tu duoc active
				thutucuaactive=chiso;
				listImg[chiso].classList.add('active');
				

			})

        }
        // Prevent show image
        for (var i = 0; i <links.length ; i++) {
            links[i].addEventListener('click',function(e){
                e.stopPropagation();
            })
        }
        
        
        var hientai2=thutucuaactive;
        rightBtn.addEventListener('click',function(){
        	
        	var soluonganh=listImg.length-1;
        	
        	hientai2=(hientai2<soluonganh)?(hientai2+1):0;
        	var phantutieptheo=listImg[hientai2];

        	document.querySelector('li.active').classList.remove('active');
        	phantutieptheo.classList.add('active');
        })


        leftBtn.addEventListener('click',function(){
            var soluonganh=listImg.length-1;
            
            hientai2=(hientai2>0)?(hientai2-1):(soluonganh-1);
            var phantutieptheo=listImg[hientai2];

            document.querySelector('li.active').classList.remove('active');
            phantutieptheo.classList.add('active');
        })

        // text typing

        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

},false)