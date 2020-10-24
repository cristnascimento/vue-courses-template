<template>
    <preloader></preloader>
    <my-header></my-header>
    <slot></slot>
    <my-footer></my-footer>
    <scrollup></scrollup>
</template>

<script>

export default {
    data () {
        return {
            fullYear: new Date().getFullYear()
        }
    },
    created: function() {
        console.log("mounted");
        /*
        let ckeditor = document.createElement('script');
        ckeditor.setAttribute('src',"./assets/js/main.js");
        document.head.appendChild(ckeditor);*/

        let x = [
            "./assets/js/vendor/modernizr-3.5.0.min.js",
            "./assets/js/vendor/jquery-1.12.4.min.js",
            "./assets/js/popper.min.js",
            "./assets/js/bootstrap.min.js",
            "./assets/js/jquery.slicknav.min.js",
            "./assets/js/owl.carousel.min.js",
            "./assets/js/slick.min.js",
            "./assets/js/wow.min.js",
            "./assets/js/animated.headline.js",
            "./assets/js/jquery.magnific-popup.js",
            "./assets/js/gijgo.min.js",
            "./assets/js/jquery.nice-select.min.js",
            "./assets/js/jquery.sticky.js",
            "./assets/js/jquery.barfiller.js",
            "./assets/js/jquery.counterup.min.js",
            "./assets/js/waypoints.min.js",
            "./assets/js/jquery.countdown.min.js",
            "./assets/js/hover-direction-snake.min.js",
            "./assets/js/contact.js",
            "./assets/js/jquery.form.js",
            "./assets/js/jquery.validate.min.js",
            "./assets/js/mail-script.js",
            "./assets/js/jquery.ajaxchimp.min.js",
            "./assets/js/plugins.js",
            "./assets/js/main.js"
        ]

        x.forEach(element => {
            let ckeditor = document.createElement('script');
            ckeditor.setAttribute('src', element);
            document.getElementById('scriptContainer').appendChild(ckeditor);
        });
        
    }
    
}
</script>