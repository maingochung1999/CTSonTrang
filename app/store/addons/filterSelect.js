const selectFilter = () => {
    $(".select2").one("select2:open", function (e) {
        $("input.select2-search__field").prop("placeholder", "Tìm kiếm...");
    });
    $(".province").select2({
        placeholder: "Tỉnh / TP",
        width: "100%",
    });
    $(".district").select2({
        placeholder: "Quận / Huyện",
        width: "100%",
    });
    $(".wards").select2({
        placeholder: "Xã / Phường",
        width: "100%",
    });
    $(".price").select2({
        placeholder: "Giá",
        width: "100%",
    });
    $(".category").select2({
        placeholder: "Chủng loại",
        width: "100%",
    });
};
export default selectFilter;
