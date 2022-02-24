<template>
  <div class="intro animate-enter1" show-on-scroll>
    <div class="overlap-group6">
      <img class="main_bg" :src="main_Bg" />
      <div class="main_-container">
        <div class="main_text valign-text-middle" v-html="main_Text"></div>
        <img class="main_image" :src="main_Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: ["main_Bg", "main_Text", "main_Image"],
};
</script>

<style>
.intro {
  height: 1080px;
  margin-top: 318px;
  opacity: 0;
  transform: translate(25px, 0);
  width: 1920px;
}

.intro.animate-enter1 {
  animation: animate-enter1-frames 0.6s ease-in-out 0s 1 normal forwards;
  opacity: 0;
  transform: translate(25px, 0);
}

.overlap-group6 {
  height: 1035px;
  left: -1px;
  position: relative;
  top: -12px;
}

.main_bg {
  height: 621px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1918px;
}

.main_-container {
  align-items: flex-end;
  background-color: #00217180;
  display: flex;
  height: 430px;
  justify-content: flex-end;
  left: 0;
  min-width: 1920px;
  padding: 13px 51px;
  position: absolute;
  top: 605px;
}

.main_text {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: 42px;
  line-height: 50px;
  font-weight: 400;
  height: 401px;
  letter-spacing: 0;
  width: 1224px;
}

.main_image {
  height: 401px;
  margin-left: 132px;
  width: 461px;
}

@keyframes animate-enter1-frames {
  from {
    opacity: 0;
    transform: translate(25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
