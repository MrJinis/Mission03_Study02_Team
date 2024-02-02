$(".main-slide").vegas({
    delay: 5000,
    timer: false,
    overlay: true,
    autoplay: true,
    loop: true,
    cover: true,
    transitionDuration : 1000,
    slides: [
        { src: "master_resource/gwj/images/1911_info_1.jpg" },
        { src: "master_resource/gwj/images/1911_info_2.jpg" },
        { src: "master_resource/gwj/images/1911_info_3.jpg" },
        { src: "master_resource/gwj/images/1911_info_4.jpg" }
    ]
});

console.log($(".main-slide").vegas);