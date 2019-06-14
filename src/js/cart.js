require(["config"], () => {
    require(["template", "header", "footer"], (template) => {
        class Cart {
            constructor() {
                this.init();
            }

            init() {
                let cart = localStorage.getItem("cart");
                if (cart) {
                    cart = JSON.parse(cart);
                    $(".empty").hide();
                    $(".result").show();
                    //渲染列表
                    this.render(cart);
                } else {
                    $(".empty").show();
                    $(".result").hide();
                }
            }


        }
        new Cart();
    })
})