const thenAuthor = () => {
    function reset() {
        setTimeout(function() {
            $(".modal__title[modal-title='author']").text("Đăng nhập");
            $("#author__login").slideDown();
            $("#author__actount").slideUp();
            $("#forgot__password").slideUp();
        }, 500);
    }

    $(".author").on("click", function() {
        $(".author__body").slideToggle();
    });
    $(".btn__create").on("click", function() {
         $(".modal__title[modal-title='author']").text("Đăng ký");
        $("#author__login").slideUp();
        $("#author__actount").slideDown();
    });
    $("#authorShow").on("click", function() {
         $(".modal__title[modal-title='author']").text("Đăng ký");
        $("#author__login").slideUp();
        $("#author__actount").slideDown();
    });
    $(".forgot--password").on("click", function() {
         $(".modal__title[modal-title='author']").text("Quên mật khẩu");
        $("#author__login").slideUp();
        $("#author__actount").slideUp();
        $("#forgot__password").slideDown();
    });
    $("body").on("click", "[modal-show='close']", function() {
        reset();
    });
    $(".modal-frame").on("click", function(e) {
        if (!$(".content-modal").is(e.target) &&
            $(".content-modal").has(e.target).length === 0
        ) {
            reset();
        }
    });
};
export default thenAuthor;
