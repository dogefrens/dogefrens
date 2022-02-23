<template>
  <div class="roadmap animate-enter" show-on-scroll>
    <div class="frame-4">
      <div class="overlap-group-2">
        <div class="accomplished valign-text-middle robotoslab-normal-black-28px">{{ accomplished }}</div>
      </div>
      <div class="group-16">
        <div class="february-20th valign-text-middle robotoslab-normal-white-54px">{{ february20Th }}</div>
        <div class="doge-frens-launch-day valign-text-middle robotoslab-normal-white-36px">
          {{ dogeFrensLaunchDay }}
        </div>
      </div>
    </div>
    <div class="overlap-group1-1">
      <img class="group-13" :src="group13" /><img class="roadmap_gold" :src="roadmap_Gold" />
    </div>
    <div class="frame-3">
      <div class="overlap-group-3" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
        <div class="coming-soon valign-text-middle robotoslab-normal-black-28px">{{ comingSoon }}</div>
      </div>
      <group15 />
    </div>
    <frame6 />
    <frame6 :className="frame61Props.className" />
    <frame6 :className="frame62Props.className" />
    <img class="roadmap_dig" :src="roadmap_Dig" />
    <h1 class="title-1 valign-text-middle">{{ title }}</h1>
    <img class="roadmap_banner" :src="roadmap_Banner" />
  </div>
</template>

<script>
import Group15 from "./Group15";
import Frame6 from "./Frame6";
export default {
  name: "Roadmap",
  components: {
    Group15,
    Frame6,
  },
  props: [
    "accomplished",
    "february20Th",
    "dogeFrensLaunchDay",
    "group13",
    "roadmap_Gold",
    "overlapGroup2",
    "comingSoon",
    "roadmap_Dig",
    "title",
    "roadmap_Banner",
    "frame61Props",
    "frame62Props",
  ],
};
</script>

<style>
.roadmap {
  height: 3132px;
  margin-right: 65px;
  margin-top: 939px;
  opacity: 0;
  position: relative;
  transform: translate(0, 25px);
  width: 1585px;
}

.roadmap.animate-enter {
  animation: animate-enter-frames 0.5s ease-in-out 0s 1 normal forwards;
  opacity: 0;
  transform: translate(0, 25px);
}

.frame-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 1166px;
  min-height: 211px;
  position: absolute;
  top: 943px;
  width: 419px;
}

.overlap-group-2 {
  align-items: flex-end;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/62081d78ad4cbb51c8d152aa/img/roadmap-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 85px;
  min-width: 261px;
  padding: 23px 21px;
}

.accomplished {
  height: 37px;
  letter-spacing: 0;
  min-width: 219px;
  text-align: center;
}

.group-16 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 126px;
  width: 423px;
}

.february-20th {
  height: 71px;
  letter-spacing: 0;
  min-width: 419px;
  text-align: center;
}

.doge-frens-launch-day {
  height: 47px;
  letter-spacing: 0;
  margin-top: 8px;
  min-width: 409px;
  text-align: center;
}

.overlap-group1-1 {
  height: 2440px;
  left: 523px;
  position: absolute;
  top: 753px;
  width: 606px;
}

.group-13 {
  height: 2379px;
  left: 0;
  position: absolute;
  top: 0;
  width: 606px;
}

.roadmap_gold {
  height: 236px;
  left: 181px;
  position: absolute;
  top: 2204px;
  width: 244px;
}

.frame-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 203px;
  position: absolute;
  top: 1283px;
  width: 419px;
}

.overlap-group-3 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 85px;
  justify-content: flex-end;
  min-width: 261px;
  padding: 0 32px;
}

.coming-soon {
  height: 37px;
  letter-spacing: 0;
  min-width: 196px;
  text-align: center;
}

.roadmap_dig {
  height: 319px;
  left: 421px;
  position: absolute;
  top: 307px;
  width: 809px;
}

.title-1 {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: 144px;
  font-weight: 400;
  height: 190px;
  left: 460px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 0;
}

.roadmap_banner {
  height: 649px;
  left: -134px;
  object-fit: cover;
  position: absolute;
  top: -712px;
  width: 1920px;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
    transform: translate(0, 25px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
