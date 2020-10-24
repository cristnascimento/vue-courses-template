<template>
        <!--? top subjects Area Start -->
        <div class="topic-area section-padding40">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-tittle text-center mb-55">
                            <h2>Explore top subjects</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6" v-for="subject in subjects" :key="subject.name">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img :src="subject.image" alt="">
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">{{subject.name}}</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                        <div class="section-tittle text-center mt-20">
                            <a href="courses.html" class="border-btn">View More Subjects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- top subjects End -->
</template>

<script>

export default {
    data() {
        return {
            subjects: [
                {name: "Programming", image: "/assets/img/gallery/topic1.png"},
                {name: "Java", image: "/assets/img/gallery/topic2.png"},
                {name: "Python", image: "/assets/img/gallery/topic3.png"},
                {name: "Databases", image: "/assets/img/gallery/topic4.png"},
                {name: "React", image: "/assets/img/gallery/topic5.png"},
                {name: "Vue", image: "/assets/img/gallery/topic6.png"},
                {name: "Angular", image: "/assets/img/gallery/topic7.png"},
                {name: "Spring", image: "/assets/img/gallery/topic8.png"},
            ]
        }
    }
}

</script>