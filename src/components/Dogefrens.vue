<template>
  <div class="container-center-horizontal">
    <div class="dogefrens screen">
      <div class="header">
        <div class="flex-row">
          <div class="logo valign-text-middle">{{ logo }}</div>
          <div class="right">
            <img
              class="discord"
              src="https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/620b5868bbaf460383ab3dec/img/discord-1@2x.svg"
            />
            <img
              class="right-item"
              src="https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/620b5868bbaf460383ab3dec/img/twitter-1@2x.svg"
            />
            <img
              class="opensea"
              src="https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/620b472ff85eb4260be95a75/img/opensea@2x.svg"
            />
            <img
              class="right-item"
              src="https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/620b5868bbaf460383ab3dec/img/instagram-1@2x.svg"
            />
            <img
              class="right-item"
              src="https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/620b472ff85eb4260be95a75/img/medium@2x.svg"
            />
            <div class="wallet">
              <div class="overlap-group">
                <div class="connect-wallet valign-text-middle">{{ connectWallet }}</div>
              </div>
            </div>
          </div>
        </div>
        <img
          class="header_stroke"
          src="https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/620b50ae8b189800a8456755/img/header-stroke@1x.svg"
        />
      </div>
      <landing v-bind="landingProps" />
      <intro :main_Bg="introProps.main_Bg" :main_Text="introProps.main_Text" :main_Image="introProps.main_Image" />
      <functions v-bind="functionsProps" />
      <roadmap v-bind="roadmapProps" />
      <faqs
        :faqsTitle="faqsProps.faqsTitle"
        :whatIsDogeFren1="faqsProps.whatIsDogeFren1"
        :whatIsDogeFren2="faqsProps.whatIsDogeFren2"
        :whatIsDogeFren3="faqsProps.whatIsDogeFren3"
        :whatIsDogeFren4="faqsProps.whatIsDogeFren4"
        :whatIsDogeFren5="faqsProps.whatIsDogeFren5"
        :whatIsDogeFren6="faqsProps.whatIsDogeFren6"
      />
      <img class="footer" :src="footer" />
    </div>
  </div>
</template>

<script>
import Landing from "./Landing";
import Intro from "./Intro";
import Functions from "./Functions";
import Roadmap from "./Roadmap";
import Faqs from "./Faqs";
export default {
  name: "Dogefrens",
  components: {
    Landing,
    Intro,
    Functions,
    Roadmap,
    Faqs,
  },
  props: [
    "logo",
    "connectWallet",
    "footer",
    "landingProps",
    "introProps",
    "functionsProps",
    "roadmapProps",
    "faqsProps",
  ],
};
</script>

<style>
.dogefrens {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/62081d37ad4cbb51c8d152a9/releases/6215d0fa73258e840df8ccfb/img/dogefrens@1x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  min-height: 10642px;
  overflow-x: hidden;
  position: relative;
  width: 1920px;
}

.header {
  align-items: center;
  background-color: #0b0948;
  display: flex;
  flex-direction: column;
  height: 107px;
  overflow: hidden;
  width: 1920px;
}

.flex-row {
  align-items: flex-end;
  display: flex;
  margin-right: 61px;
  margin-top: 19px;
  min-width: 1623px;
}

.logo {
  color: var(--white);
  font-family: var(--font-family-roboto_slab);
  font-size: 58px;
  font-weight: 700;
  height: 76px;
  letter-spacing: 0;
  min-width: 309px;
  text-align: center;
}

.right {
  align-items: flex-start;
  display: flex;
  height: 69px;
  margin-bottom: 1px;
  margin-left: 703px;
  min-width: 611px;
}

.discord {
  cursor: pointer;
  height: 48px;
  margin-top: 5px;
  transition: all 0.2s ease;
  width: 48px;
}

.discord:hover,
.right-item:hover,
.wallet:hover {
  transform: scale(1.1);
}

.right-item {
  cursor: pointer;
  height: 48px;
  margin-left: 27px;
  margin-top: 5px;
  transition: all 0.2s ease;
  width: 48px;
}

.opensea {
  align-self: flex-end;
  cursor: pointer;
  height: 70px;
  margin-bottom: -3px;
  margin-left: 27px;
  transition: all 0.2s ease;
  width: 64px;
}

.opensea:hover {
  transform: scale(0.9);
}

.wallet {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 55px;
  margin-left: 27px;
  min-width: 222px;
  transition: all 0.2s ease;
}

.overlap-group {
  align-items: flex-start;
  background-color: #f1d649;
  border: 3px solid var(--black);
  border-radius: 20px;
  display: flex;
  height: 61px;
  margin-left: -3px;
  margin-top: -3px;
  min-width: 226px;
  padding: 14px 16px;
}

.connect-wallet {
  color: var(--black);
  font-family: var(--font-family-roboto_slab);
  font-size: 20px;
  font-weight: 600;
  height: 26px;
  letter-spacing: 0;
  min-width: 187px;
  text-align: center;
}

.header_stroke {
  height: 8px;
  margin-top: 14px;
  width: 1920px;
}

.footer {
  align-self: flex-start;
  height: 1059px;
  margin-left: 0;
  margin-top: 584px;
  width: 1958px;
}
</style>
