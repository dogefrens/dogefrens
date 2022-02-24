<template>
  <div class="functions animate-enter2" show-on-scroll>
    <div class="functions_title valign-text-middle">{{ functions_Title }}</div>
    <div class="frame-8">
      <div class="function1">
        <img class="function1-1" :src="function1" />
        <div class="frens-community valign-text-middle robotoslab-normal-white-45px" v-html="frensCommunity"></div>
      </div>
      <div class="function2">
        <img class="function2-1" :src="function2" />
        <div
          class="community-land-on-sandbox valign-text-middle robotoslab-normal-white-42px"
          v-html="communityLandOnSandbox"
        ></div>
      </div>
      <div class="function3">
        <img class="function3-1" :src="function3" />
        <div
          class="voxel-nft-for-dogeverse valign-text-middle robotoslab-normal-white-42px"
          v-html="voxelNftForDogeverse"
        ></div>
      </div>
      <div class="function4">
        <img class="function4-1" :src="function4" />
        <div
          class="nft-staking-utility-token valign-text-middle robotoslab-normal-white-45px"
          v-html="nftStakingUtilityToken"
        ></div>
      </div>
      <div class="function5">
        <img class="function5-1" :src="function5" />
        <div class="p2-e-game valign-text-middle robotoslab-normal-white-45px">{{ p2EGame }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Functions",
  props: [
    "functions_Title",
    "function1",
    "frensCommunity",
    "function2",
    "communityLandOnSandbox",
    "function3",
    "voxelNftForDogeverse",
    "function4",
    "nftStakingUtilityToken",
    "function5",
    "p2EGame",
  ],
};
</script>

<style>
.functions {
  height: 483px;
  margin-left: 1px;
  margin-top: 318px;
  opacity: 0;
  position: relative;
  width: 1749px;
}

.functions.animate-enter2 {
  animation: animate-enter2-frames 0.5s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.functions_title {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: 96px;
  font-weight: 400;
  height: 127px;
  left: 0;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: -256px;
  width: 1749px;
}

.frame-8 {
  align-items: flex-start;
  display: flex;
  height: 483px;
  left: 0;
  min-width: 1749px;
  position: absolute;
  top: 0;
}

.function1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 437px;
  width: 305px;
}

.function1-1 {
  height: 280px;
  margin-right: 2px;
  width: 303px;
}

.frens-community {
  height: 118px;
  letter-spacing: 0;
  margin-right: 2px;
  margin-top: 39px;
  text-align: center;
  width: 253px;
}

.function2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  min-height: 483px;
  width: 374px;
}

.function2-1 {
  height: 344px;
  margin-right: 29px;
  width: 291px;
}

.community-land-on-sandbox {
  /* height: 108px; */
  letter-spacing: 0;
  margin-right: 2px;
  /* margin-top: 12px; */
  text-align: center;
  width: 372px;
}

.function3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  min-height: 445px;
  width: 291px;
}

.function3-1 {
  height: 280px;
  margin-left: 28.34px;
  width: 232px;
}

.voxel-nft-for-dogeverse {
  height: 110px;
  letter-spacing: 0;
  margin-right: 2px;
  margin-top: 55px;
  min-width: 289px;
  text-align: center;
}

.function4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  min-height: 449px;
  width: 321px;
}

.function4-1 {
  height: 282px;
  margin-left: 0.34px;
  width: 268px;
}

.nft-staking-utility-token {
  height: 118px;
  letter-spacing: 0;
  margin-right: 2px;
  margin-top: 49px;
  min-width: 319px;
  text-align: center;
}

.function5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  min-height: 382px;
  width: 280px;
}

.function5-1 {
  height: 232px;
  margin-right: 2px;
  width: 278px;
}

.p2-e-game {
  height: 59px;
  letter-spacing: 0;
  margin-right: 1px;
  margin-top: 91px;
  min-width: 215px;
  text-align: center;
}

@keyframes animate-enter2-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
