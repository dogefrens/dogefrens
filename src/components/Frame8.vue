<template>
  <div :class="[`frame-7`, className || ``]">
    <div class="overlap-group-4">
      <div class="coming-soon-1 valign-text-middle robotoslab-normal-black-28px">COMING SOON</div>
    </div>
    <group18 />
  </div>
</template>

<script>
import Group18 from "./Group18";
export default {
  name: "Frame8",
  components: {
    Group18,
  },
  props: ["className"],
};
</script>

<style>
.frame-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 1166px;
  min-height: 203px;
  position: absolute;
  top: 2355px;
  width: 419px;
}

.overlap-group-4 {
  align-items: center;
  background-color: var(--gargoyle-gas);
  border-radius: 25px;
  display: flex;
  height: 85px;
  justify-content: flex-end;
  min-width: 261px;
  padding: 0 32px;
}

.coming-soon-1 {
  height: 37px;
  letter-spacing: 0;
  min-width: 196px;
  text-align: center;
}

.frame-7.frame-6 {
  left: 0;
  top: 1989px;
}

.frame-7.frame-5 {
  top: 1653px;
}
</style>
