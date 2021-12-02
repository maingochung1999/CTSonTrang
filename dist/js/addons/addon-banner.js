const addonBanner = () => {
    $(".addon__banner").slick({
        arrows: false,
        dots: false,
        autoplay: true,
        adaptiveHeight: true,
        lazyLoad: "ondemand",
        pauseOnDotsHover: true,
    });
};
export default addonBanner;