<template>
  <div class="faqs">
    <div class="fa-qs-title valign-text-middle">{{ faqsTitle }}</div>
    <div class="frame-10">
      <div class="overlap-group-5">
        <div @click="boxshow = !boxshow" class="what-is-doge-fren valign-text-middle robotoslab-semi-bold-black-54px">WHAT IS DOGELIFE?</div>
        <!--这里的name 和 css 类名第一个字段要一样-->
        <!-- <transition name="draw">   
            <div class="box"  v-show="boxshow">
              Dogelife is the first 1k Doge collection minted on March 15th 2021. The creator was inspired by both Cryptopunks and the Dogecoin. Each Dogelife is displayed as 24x24 pixel art, programmatically generated, and scaled up to 336x336 pixels.
            </div>
        </transition> -->
      </div>
      <div class="overlap-group1-2 border-6px-black">
        <div class="what-is-doge-fren valign-text-middle robotoslab-semi-bold-black-54px">WHY DOGE FRENS</div>
      </div>
      <div class="overlap-group2-1 border-6px-black">
        <div class="what-is-doge-fren valign-text-middle robotoslab-semi-bold-black-54px">WHEN CAN I MINT DOGE FRENS?</div>
      </div>
      <div class="overlap-group3 border-6px-black">
        <div class="what-is-doge-fren valign-text-middle robotoslab-semi-bold-black-54px">HOW DO I JOIN THE DOGE FRENS COMMNUITY?</div>
      </div>
      <div class="overlap-group4 border-6px-black">
        <div class="what-is-doge-fren valign-text-middle robotoslab-semi-bold-black-54px">WHAT IS $DGOLD?</div>
      </div>
      <div class="overlap-group5 border-6px-black">
        <div class="what-is-doge-fren valign-text-middle robotoslab-semi-bold-black-54px">WHY DOGEVERSE</div>
      </div>
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
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1px;
  margin-top: 192px;
  min-height: 1150px;
  width: 1500px;
}

.overlap-group-5 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/62081d78ad4cbb51c8d152aa/img/faq1@1x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 162px;
  margin-left: -6px;
  min-width: 1512px;
  padding: 45px 78px;
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
