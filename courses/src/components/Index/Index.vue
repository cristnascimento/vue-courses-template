<template>    
    <main>
        <slider-area></slider-area>
        <services-area></services-area>
        <courses-area></courses-area>
        <about-area-1></about-area-1>
        <top-subjects-area></top-subjects-area>
        <about-area-3></about-area-3>
        <team></team>
        <about-area-2></about-area-2>
        <!-- Services End -->
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
import AboutArea2 from './AboutArea2'

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
        "about-area-1": AboutArea1,
        "top-subjects-area": TopSubjectsArea,
        "about-area-3": AboutArea3,
        "team": Team,
        "about-area-2": AboutArea2
    }
}
</script>