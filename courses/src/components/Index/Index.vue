<template>    
    <main>
        <slider-area></slider-area>
        <services-area></services-area>
        <courses-area></courses-area>
        <about-area1></about-area1>
        <top-subjects-area></top-subjects-area>
        <about-area3></about-area3>
        <team></team>
        <!-- Services End -->
        <!--? About Area-2 Start -->
        <section class="about-area2 fix pb-padding">
            <div class="support-wrapper align-items-center">
                <div class="right-content2">
                    <!-- img -->
                    <div class="right-img">
                        <img src="/assets/img/gallery/about2.png" alt="">
                    </div>
                </div>
                <div class="left-content2">
                    <!-- section tittle -->
                    <div class="section-tittle section-tittle2 mb-20">
                        <div class="front-text">
                            <h2 class="">Take the next step
                                toward your personal
                                and professional goals
                            with us.</h2>
                            <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                            <a href="#" class="btn">Join now for Free</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Area End -->
    </main>
</template>

<script>
import SliderArea from './SliderArea'
import ServicesArea from './ServicesArea'
import CoursesArea from './CoursesArea'
import AboutArea1 from './AboutArea1'
import TopSubjectsArea from './TopSubjectsArea'
import AboutArea3 from './AboutArea3'
import Team from './Team'

export default {
    data () {
        return {
            fullYear: new Date().getFullYear()
        }
    },
    components: {
        "slider-area": SliderArea,
        "services-area": ServicesArea,
        "courses-area": CoursesArea,
        "about-area1": AboutArea1,
        "top-subjects-area": TopSubjectsArea,
        "about-area3": AboutArea3,
        "team": Team

    }
}
</script>