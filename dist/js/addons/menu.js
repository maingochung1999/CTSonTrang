const addonMenu = () => {
    $(".toggle__menu").on("click", function() {
        let has = $(".menu .menu__list:has(ul)");
        if (has) {
            has.append(
                '<button type="button" class="btn__childrens"></button>'
            );
        }
        $(".addon__menu").toggleClass("active");
        $("body").toggleClass("open__modal");
        $(".btn__childrens").on("click", function() {
            let _notMenu = $(this).parents(".menu__list").children("ul");
            $(".btn__childrens").not($(this)).removeClass("active");
            $(this).toggleClass("active");
            $(".menu .menu__list ul").not(_notMenu).slideUp();
            _notMenu.slideToggle();
        });

        $(".addon__menu").on("click", function(e) {
            if (!$(".menu").is(e.target) &&
                $(".menu").has(e.target).length == 0
            ) {
                $("body").removeClass("open__modal");
                $(".addon__menu").removeClass("active");
                $(".btn__childrens").remove();
            }
        });
    });
};
export default addonMenu;