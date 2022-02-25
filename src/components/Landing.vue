<template>
  <div class="landing animate-enter4" show-on-scroll>
    <div class="overlap-group7" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
      <div class="flex-col">
        <div class="title valign-text-middle">ABOUT DOGELIFE</div>
        <div class="mint-or-migrate-your valign-text-middle" style="line-height:">{{ mintOrMigrateYour }}</div>
        <!-- <div class="mint-price-0069-eth valign-text-middle robotoslab-semi-bold-white-30px">{{ mintPrice0069Eth }}</div>
        <div class="x6471000-left valign-text-middle robotoslab-semi-bold-white-30px">{{ x6471000Left }}</div> -->
        <div class="flex-row-1">
          <div class="mint">
            <!-- <div class="overlap-group1" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
              <div class="mint-1 valign-text-middle">{{ mint }}</div>
            </div> -->
            <div class="overlap-group1" style="background-color: #d4d4d4;border-radius: 15px;">
              <div class="mint-1 valign-text-middle">MIGRATE</div>
            </div>
          </div>
          <div class="os">
            <div class="overlap-group-1" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
              <a href="https://opensea.io/collection/dogelife">
                <div class="buy-on-os valign-text-middle">{{ buyOnOs }}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="group-25 animate-enter3">
        <div class="overlap-group2">
          <img class="doge_avatar22-1" :src="doge_Avatar221" /><img class="landing_image2-1" :src="landing_Image21" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: [
    "overlapGroup7",
    "title",
    "mintOrMigrateYour",
    "mintPrice0069Eth",
    "x6471000Left",
    "overlapGroup1",
    "mint",
    "overlapGroup",
    "buyOnOs",
    "doge_Avatar221",
    "landing_Image21",
  ],
};
</script>

<style>
.landing {
  height: 823px;
  margin-right: 62px;
  margin-top: 29px;
  opacity: 0;
  transform: translate(0, 25px);
  width: 1622px;
}

.landing.animate-enter4 {
  animation: animate-enter4-frames 0.5s ease-in-out 0s 1 normal forwards;
  opacity: 0;
  transform: translate(0, 25px);
}

.overlap-group7 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 1604px;
  left: -118px;
  min-width: 1920px;
  padding: 215.3px 113px;
  position: relative;
  top: -136px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 59px;
  min-height: 595px;
  width: 747px;
}

.title {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: 96px;
  font-weight: 700;
  height: 127px;
  letter-spacing: 0;
  min-width: 982px;
  text-align: left;
}

.mint-or-migrate-your {
  align-self: flex-end;
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: var(--font-size-m);
  font-weight: 400;
  height: 235px;
  letter-spacing: 0;
  margin-top: 18px;
  width: 742px;
  line-height: 44px;
}

.mint-price-0069-eth {
  height: 40px;
  letter-spacing: 0;
  margin-left: 5px;
  margin-top: 2px;
  min-width: 311px;
  text-align: center;
}

.x6471000-left {
  height: 40px;
  letter-spacing: 0;
  margin-left: 4px;
  margin-top: 9px;
  min-width: 190px;
  text-align: center;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  margin-left: 5px;
  margin-top: 53px;
  min-width: 503px;
}

.mint {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  min-width: 212px;
  transition: all 0.2s ease;
}

.mint:hover,
.os:hover {
  transform: scale(1.1);
}

.overlap-group1 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 71px;
  justify-content: flex-end;
  min-width: 210px;
  padding: 10px 51px;
}

.mint-1 {
  color: var(--black);
  font-family: var(--font-family-roboto_slab);
  font-size: 38px;
  font-weight: 600;
  height: 50px;
  letter-spacing: 0;
  min-width: 107px;
  text-align: center;
}

.os {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 79px;
  min-width: 212px;
  transition: all 0.2s ease;
}

.overlap-group-1 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 71px;
  justify-content: flex-end;
  min-width: 210px;
  padding: 15px 23px;
}

.buy-on-os {
  color: var(--black);
  font-family: var(--font-family-roboto_slab);
  font-size: var(--font-size-m);
  font-weight: 600;
  height: 40px;
  letter-spacing: 0;
  min-width: 163px;
  text-align: center;
}

.group-25 {
  height: 666px;
  margin-left: 291px;
  opacity: 0;
  width: 618px;
}

.group-25.animate-enter3 {
  animation: animate-enter3-frames 0.2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.overlap-group2 {
  height: 666px;
  position: relative;
}

.doge_avatar22-1 {
  height: 400px;
  left: 218px;
  position: absolute;
  top: 0;
  width: 400px;
}

.landing_image2-1 {
  height: 400px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 266px;
  width: 400px;
}

@keyframes animate-enter4-frames {
  from {
    opacity: 0;
    transform: translate(0, 25px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter3-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
