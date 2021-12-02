const countDownSale = (clock) => {
    $(clock).each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(
                event.strftime(`<div class="time__item">
            <span>
                %d
            </span>
            <span>
                Ngày
            </span>
        </div>
        <div class="time__item">
            <span>
                %H
            </span>
            <span>
                Giờ
            </span>
        </div>
        <div class="time__item">
            <span>
                %M
            </span>
            <span>
                Phút
            </span>
        </div>`)
            );
        });
    });
};
export default countDownSale;
