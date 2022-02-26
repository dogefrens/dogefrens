<template>
  <div class="faqs">
    <div class="fa-qs-title valign-text-middle">{{ faqsTitle }}</div>
    <div class="frame-10">
      <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item  class="overlap-group-5" name="1">
    <template slot="title">
      <p class="valign-text-middle robotoslab-semi-bold-black-54px">
        WHAT IS DOGELIFE?
      </p>
    </template>
    <div class="valign-text-middle robotoslab-semi-bold-black-54px" style="font-size: 2.25rem;">Dogelife is the first 1k Doge collection minted on March 15th 2021. The creator was inspired by both Cryptopunks and the Dogecoin. Each Dogelife is displayed as 24x24 pixel art, programmatically generated, and scaled up to 336x336 pixels.</div>
  </el-collapse-item>
  <el-collapse-item  class="overlap-group-5" style="margin-top: 30px;" name="2">
    <template slot="title">
      <p class="valign-text-middle robotoslab-semi-bold-black-54px">
        WHY DOGE FRENS
      </p>
    </template>
    <div class="valign-text-middle robotoslab-semi-bold-black-54px" style="font-size: 2.25rem;">Most NFT collections on the market usually have a size of 10k or more NFTs. We need to expand our collection to build a greater community with more members. Doge Frens come in a joyful range of colors, traits, and sizes with a collection size of 6,999.</div>
  </el-collapse-item>

  <el-collapse-item  class="overlap-group-5" style="margin-top: 30px;" name="3">
    <template slot="title">
      <p class="valign-text-middle robotoslab-semi-bold-black-54px">
        WHEN CAN I MINT DOGE FRENS?
      </p>
    </template>
    <div class="valign-text-middle robotoslab-semi-bold-black-54px" style="font-size: 2.25rem;">
      The presale take place on March 10th. <br/>
      Public sale will start on March 13th. <br/>
      All NFTs will be revealed on the birthday of DogeLife, March 15th.</div>
  </el-collapse-item>

  <el-collapse-item  class="overlap-group-5" style="margin-top: 30px;" name="4">
    <template slot="title">
      <p class="valign-text-middle robotoslab-semi-bold-black-54px">
        HOW DO I JOIN THE DOGE FRENS COMMNUITY?
      </p>
    </template>
    <div class="valign-text-middle robotoslab-semi-bold-black-54px" style="font-size: 2.25rem;">
      Join our Dogelife community discord server here: https://discord.gg/mMZQzsBZXX <br/>
      Yes. We are in the same community with DogeLifes. So, be nice.</div>
  </el-collapse-item>


  <el-collapse-item  class="overlap-group-5" style="margin-top: 30px;" name="5">
    <template slot="title">
      <p class="valign-text-middle robotoslab-semi-bold-black-54px">
        WHAT IS $DGOLD?
      </p>
    </template>
    <div class="valign-text-middle robotoslab-semi-bold-black-54px" style="font-size: 2.25rem;">DGOLD is a utility token in the ecosystem of the Dogeverse. You can change the name for your doge NFTs by burning them. It also has voting power for the DAO coming along with it. Many more utilities will be added in the future that may include trading your DGOLD for items and NFTs in the Dogeverse. DGOLD can be yielded by staking your NFTs and can also be granted as a reward from the p2e game. There will be more details about DGOLD and DAO in a litepaper we are about to announce so stay tuned!</div>
  </el-collapse-item>

  <el-collapse-item  class="overlap-group-5" style="margin-top: 30px;" name="6">
    <template slot="title">
      <p class="valign-text-middle robotoslab-semi-bold-black-54px">
        WHY DOGEVERSE?
      </p>
    </template>
    <div class="valign-text-middle robotoslab-semi-bold-black-54px" style="font-size: 2.25rem;">We will build our Dogeverse on both NFT World and the Sandbox Land for our community members to hang out and explore. We will finally make a p2e game upon the Dogeverse to level up the fun and bring you passive incomes. A digital nation where people globally come together with their DogeLifes and Doge Frens to play, earn, and live.</div>
  </el-collapse-item>
  
</el-collapse>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Faqs",
  props: [
    "faqsTitle",
    "whatIsDogeFren1",
    "whatIsDogeFren2",
    "whatIsDogeFren3",
    "whatIsDogeFren4",
    "whatIsDogeFren5",
    "whatIsDogeFren6",
  ],
  data() {
    return {
        boxshow:false
    }
  }
};
</script>

<style>
.faqs {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
  margin-top: 301px;
  min-height: 1469px;
  width: 1501px;
}

.fa-qs-title {
  color: var(--black);
  font-family: var(--font-family-roboto_slab);
  font-size: 96px;
  font-weight: 600;
  height: 127px;
  letter-spacing: 0;
  margin-right: 1px;
  min-width: 250px;
  text-align: center;
}

.frame-10 {
  /* align-items: flex-start; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  margin-right: 1px;
  margin-top: 192px;
  min-height: 1150px;
  width: 1500px;
}

.overlap-group-5 {
  /* align-items: flex-start; */
  /* background-image: url(https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/62081d78ad4cbb51c8d152aa/img/faq1@1x.svg); */
  /* background-size: 100% 100%; */
  /* display: flex; */
  /* height: 162px; */
  margin-left: -6px;
  min-width: 1512px;
  padding: 45px 78px;
  border: 5px solid #000;
  border-radius: 30px;
  background-color: #fff;
}

.what-is-doge-fren {
  height: 71px;
  letter-spacing: 0;
  min-width: 582px;
  text-align: center;
}

.overlap-group1-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  height: 162px;
  margin-left: -6px;
  margin-top: 38px;
  min-width: 1512px;
  padding: 37px 72px;
}

.overlap-group2-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  height: 162px;
  margin-left: -6px;
  margin-top: 38px;
  min-width: 1512px;
  padding: 35px 71px;
}

.overlap-group3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  height: 162px;
  margin-left: -6px;
  margin-top: 38px;
  min-width: 1512px;
  padding: 33px 72px;
}

.overlap-group4 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  height: 162px;
  margin-left: -6px;
  margin-top: 38px;
  min-width: 1512px;
  padding: 31px 71px;
}

.overlap-group5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  height: 162px;
  margin-left: -6px;
  margin-top: 38px;
  min-width: 1512px;
  padding: 29px 72px;
}

.box{
    height:200px;
    width: 200px;
    background-color:black;
}
.draw-enter-active, .draw-leave-active {
    transition: all 1s ease;
}
.draw-enter, .draw-leave-to {
    height: 0;
}
</style>
