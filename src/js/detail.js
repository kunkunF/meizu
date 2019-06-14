require(["config"], () => {
    require(["url", "template", "header", "footer", "zoom"], (url, template, addCart) => {
        class Detail {
            constructor() {
                this.init();
            }

            init() {
                //从url取到id， 携带id请求详情数据，渲染详情页
                let id = Number(location.search.slice(4));

                this.id = id;
                $.get(url.rapBaseUrl + "detail/get", {
                    id
                }, res => {
                    if (res.res_code === 1) {
                        let {
                            data
                        } = res.res_body;

                        data = {
                            ...data,
                            id
                        };

                        this.render(data);

                    }
                })
            }


            render(data) {
                $("#detail-container").html(template("detail-template", {
                    data
                }));
                this.zoom();
                this.isNum();
            }

            zoom() {
                $(".zoom-img").elevateZoom({
                    gallery: 'product-img',
                    cursor: 'pointer',
                    galleryActiveClass: 'active',
                    borderSize: '1',
                    borderColor: '#888'
                });
            }

            isNum() {
                let num = Number($("#num-input").val());
                $("#add-num").on('click', () => {
                    $("#num-input").val(++num);
                });

                $("#cut-num").on('click', () => {
                    if (num <= 1) return;
                    $("#num-input").val(--num);
                });
            }
        }

        new Detail();
    })
})