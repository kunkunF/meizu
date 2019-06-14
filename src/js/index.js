require(["config"], () => {
    require(["url", "template", "swiper", "header", "footer", "chart", "jquery"], (url, template, swiper) => {
        class Index {
            constructor() {
                this.bindEvents();
                this.getType();
                this.banner();
            }

            bindEvents() {
                //使用事件委托给登录按钮绑事件
                $("header").on('click', "#login-btn", () => {})
            }

            //获取分类数据
            getType() {
                //ajax请求
                $.get(url.rapBaseUrl + 'index/type', data => {
                    if (data.res_code === 1) {
                        this.renderType(data.res_body.list, data.res_body.sideview, data.res_body.column, data.res_body.menu);
                    }
                })
            }

            // 首页轮播图
            banner() {
                var mySwiper = new swiper('.swiper-container', {
                    speed: 600,
                    autoplay: true,
                    parallax: true,
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    autoplay: {
                        delay: 3000,
                    },

                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },

                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                })
            }

            

            //渲染template内容
            renderType(list, img, menu) {
                let list_html = template("list-template", {
                    img,
                    list
                });
                $("#list-container").html(list_html);

                let menu_html = template("menu-template", {
                    menu
                });
                $("#menu-container").html(menu_html);

                this.switching();
            }
        }
        new Index();
    })
})