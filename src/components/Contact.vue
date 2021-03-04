<template>
  <div class="container">
    <div class="text-center my-5">
      <h1 class>Contact Page</h1>
    </div>
    <div class="text-center para">
      <p class="pt-3 sub-para-1">
        Hello I am software Engineer working in both frontend and backend.
        Also lerning new tech is my main hobby. This project is mainly focus on lerning about Vue JS.
      </p>
      <p class="my-4 sub-para-2 text-primary">Hey you can contact me using below methods.</p>
    </div>

    <div class="container text-center mt-5">
      <div class="container custom">
        <a href="https://twitter.com/thenukaMaxwell" class="social-container twitter">
          <div class="social-cube">
            <div class="front">Twitter</div>
            <div class="bottom">@thenukaMaxwell</div>
          </div>
        </a>

        <a href="https://facebook.com/thenuka98" class="social-container facebook">
          <div class="social-cube">
            <div class="front">Facebook</div>
            <div class="bottom">thenuka98</div>
          </div>
        </a>

        <a href="https://youtube.com" class="social-container youtube">
          <div class="social-cube">
            <div class="front">YouTube</div>
            <div class="bottom">Username</div>
          </div>
        </a>

        <a href="https://github.com/ThenukaDinu" class="social-container github">
          <div class="social-cube">
            <div class="front">GitHub</div>
            <div class="bottom">ThenukaDinu</div>
          </div>
        </a>

        <a href="#" class="social-container dribbble">
          <div class="social-cube">
            <div class="front">Dribbble</div>
            <div class="bottom">Username</div>
          </div>
        </a>

        <a href="https://codepen.io/thenukamaxwell" class="social-container codepen">
          <div class="social-cube">
            <div class="front">CodePen</div>
            <div class="bottom">thenukaMaxwell</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      images: {
        instaImg: require("../assets/instagram.jpg")
      }
    };
  }
};
</script>

<style scoped>
.para {
  line-height: 2;
  font-size: 19px;
  letter-spacing: 1.1px;
}
/* .sub-para-1 {
}

.sub-para-2 {
} */

body {
  font-family: "Dosis";
  background: #fcee85;
  display: flex;
  height: 100vh;
  margin: 0;
  justify-content: center;
  align-items: center;
}
body .container.custom {
  text-align: center;
  max-width: 700px;
}

.social-container {
  position: relative;
  display: inline-block;
  width: 164px;
  height: 36px;
  perspective: 300px;
  font-size: 24px;
  margin: 8px;
}
.social-container .social-cube {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.333s;
  transform: translateZ(-18px);
}
.social-container .social-cube .front,
.social-container .social-cube .bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: background 0.333s;
}
.social-container .social-cube .front {
  transform: rotateX(0deg) translateZ(18px);
}
.social-container .social-cube .bottom {
  transform: rotateX(-90deg) translateZ(18px);
}
.social-container:hover .social-cube {
  transform: translateZ(-18px) rotateX(90deg);
}

.social-container.twitter .social-cube .front,
.social-container.twitter .social-cube .back {
  background: #4099ff;
}
.social-container.twitter .social-cube .bottom {
  background: #0d7eff;
}
.social-container.twitter:hover .social-cube .bottom {
  background: #4099ff;
}
.social-container.twitter:hover .social-cube .front {
  background: #73b4ff;
}
.social-container.facebook .social-cube .front,
.social-container.facebook .social-cube .back {
  background: #3b5998;
}
.social-container.facebook .social-cube .bottom {
  background: #2d4373;
}
.social-container.facebook:hover .social-cube .bottom {
  background: #3b5998;
}
.social-container.facebook:hover .social-cube .front {
  background: #4c70ba;
}
.social-container.youtube .social-cube .front,
.social-container.youtube .social-cube .back {
  background: #cc181e;
}
.social-container.youtube .social-cube .bottom {
  background: #9e1317;
}
.social-container.youtube:hover .social-cube .bottom {
  background: #cc181e;
}
.social-container.youtube:hover .social-cube .front {
  background: #e73036;
}
.social-container.github .social-cube .front,
.social-container.github .social-cube .back {
  background: #767676;
}
.social-container.github .social-cube .bottom {
  background: #5d5d5d;
}
.social-container.github:hover .social-cube .bottom {
  background: #767676;
}
.social-container.github:hover .social-cube .front {
  background: #909090;
}
.social-container.dribbble .social-cube .front,
.social-container.dribbble .social-cube .back {
  background: #ea4c89;
}
.social-container.dribbble .social-cube .bottom {
  background: #e51e6b;
}
.social-container.dribbble:hover .social-cube .bottom {
  background: #ea4c89;
}
.social-container.dribbble:hover .social-cube .front {
  background: #ef7aa7;
}
.social-container.codepen .social-cube .front,
.social-container.codepen .social-cube .back {
  background: #191919;
}
.social-container.codepen .social-cube .bottom {
  background: black;
}
.social-container.codepen:hover .social-cube .bottom {
  background: #191919;
}
.social-container.codepen:hover .social-cube .front {
  background: #333333;
}

.bottom {
  font-size: 15px;
}
</style>
