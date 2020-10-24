<template>    
    <main>
        <slider-area></slider-area>
        <services-area></services-area>
        <courses-area></courses-area>
        <about-area1></about-area1>
        <top-subjects-area></top-subjects-area>
        <!--? About Area-3 Start -->
        <section class="about-area3 fix">
            <div class="support-wrapper align-items-center">
                <div class="right-content3">
                    <!-- img -->
                    <div class="right-img">
                        <img src="/assets/img/gallery/about3.png" alt="">
                    </div>
                </div>
                <div class="left-content3">
                    <!-- section tittle -->
                    <div class="section-tittle section-tittle2 mb-20">
                        <div class="front-text">
                            <h2 class="">Learner outcomes on courses you will take</h2>
                        </div>
                    </div>
                    <div class="single-features">
                        <div class="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="">
                        </div>
                        <div class="features-caption">
                            <p>Techniques to engage effectively with vulnerable children and young people.</p>
                        </div>
                    </div>
                    <div class="single-features">
                        <div class="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="">
                        </div>
                        <div class="features-caption">
                            <p>Join millions of people from around the world
                            learning together.</p>
                        </div>
                    </div>
                    <div class="single-features">
                        <div class="features-icon">
                            <img src="/assets/img/icon/right-icon.svg" alt="">
                        </div>
                        <div class="features-caption">
                            <p>Join millions of people from around the world learning together.
                            Online learning is as easy and natural.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Area End -->
        <!--? Team -->
        <section class="team-area section-padding40 fix">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-tittle text-center mb-55">
                            <h2>Community experts</h2>
                        </div>
                    </div>
                </div>
                <div class="team-active">
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img src="/assets/img/gallery/team1.png" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Mr. Urela</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img src="/assets/img/gallery/team2.png" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Mr. Uttom</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img src="/assets/img/gallery/team3.png" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Mr. Shakil</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img src="/assets/img/gallery/team4.png" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Mr. Arafat</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img src="/assets/img/gallery/team3.png" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Mr. saiful</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        "top-subjects-area": TopSubjectsArea
    }
}
</script>