const bsModal = () => {
    function close() {
        setTimeout(function() {
            $(".bs-modal").removeClass("show-modal");
            $("body").removeClass("active-modal");
        }, 500);
        $(this).children("content-modal").removeClass("show-modal");
    }
    $("[modal-show='show']").on("click", function() {
        $($(this).attr("modal-data")).addClass("show-modal");
        $($(this).attr("modal-data"))
            .find(".content-modal")
            .addClass("show-modal");
        $("body").addClass("active-modal");
        $(".modal-frame").on("click", function(e) {
            if (!$(".content-modal").is(e.target) &&
                $(".content-modal").has(e.target).length === 0
            ) {
                close();
            }
        });
    });
    $("body").on("click", "[modal-show='close']", function() {
        close();
    });
};
export default bsModal;
