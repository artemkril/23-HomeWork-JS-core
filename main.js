$(document).ready(() => {
    $('.arrow_home, .arrow_par1, .arrow_par2, .arrow_eng1, .arrow_eng2, .arrow_about').click(function () {
        const ID = $(this).attr('href');
        const OFFSET = $(ID).offset().top;
        $('html').animate({
            scrollTop: OFFSET
        }, 1000)
    })
    $('.item').on({
        click: function () {
            const HREF = $(this).attr('href');
            const HEADSET = $(HREF).offset().top;
            $('html').animate({
                scrollTop: HEADSET
            }, 2000)
        }

    })
    $('.it1').on({
        mouseover: function () {
            $('.green_img').css('display', 'block')
        },
        mouseout: function () {
            $('.green_img').css('display', 'none')
        }
    })
    $('.it2').on({
        mouseover: function () {
            $('.green_img1').css('display', 'block')
        },
        mouseout: function () {
            $('.green_img1').css('display', 'none')
        }
    })
    $('.it3').on({
        mouseover: function () {
            $('.green_img2').css('display', 'block')
        },
        mouseout: function () {
            $('.green_img2').css('display', 'none')
        }
    })
    $('.it4').on({
        mouseover: function () {
            $('.green_img3').css('display', 'block')
        },
        mouseout: function () {
            $('.green_img3').css('display', 'none')
        }
    })

})