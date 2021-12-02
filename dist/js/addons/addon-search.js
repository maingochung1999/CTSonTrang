const addonSearch = () => {
    $(".btn__toggle-search").on("click", function () {
        $(".main__search").toggleClass("active");
        $("body").addClass("open__modal");
    });
    $(".main__search").on("click", function (e) {
        if (
            !$(".form__search").is(e.target) &&
            $(".form__search").has(e.target).length === 0
        ) {
            $("body").removeClass("open__modal");
            $(".main__search").removeClass("active");
        }
    });
};
export default addonSearch;
