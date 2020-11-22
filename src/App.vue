<template>
  <div>
    <div class="main">
      <div style="margin-top: 20px;margin-bottom: 50px;">
        <img
          src="https://avatars0.githubusercontent.com/u/42485508?s=460&u=eaa907a9f009fce23d0cd6e8b20d8d1e38f2df5a&v=4"
          class="photo"
        />
        <div style="margin: 5px 0px;">
          <h1 class="cw">Faza aulia<b class="c">.</b></h1>
        </div>
        <div class="desc">
          I'm a <b class="cy">Full Stack</b> Developer and Internet Of Things
          <b class="c">(IoT)</b> enthusiast who living in Malang, Jawa Timur,
          Indonesia.
        </div>
        <!-- <div class="page">
          <div><b>&lt;</b></div>
          <div>About me!</div>
          <div><b>></b></div>
        </div> -->
      </div>
      <div class="card-dark">
        <!-- <strong>Experience</strong> -->
        <div>
          <div style="text-align: center;"><b>Skill</b> <br /></div>
          <div style="margin:10px 5px">
            Full Stack
            <div style="margin-bottom: 8px;" class="progess">
              <div class="percent" style="width:85%;"></div>
            </div>
            Code & Board
            <div style="margin-bottom: 8px;" class="progess">
              <div class="percent" style="width:70%;"></div>
            </div>
            Internet Of Things
            <div class="progess">
              <div class="percent" style="width:75%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-dark">
        <div style="text-align: center;"><b>Language</b> <br /></div>
        <div style="margin: 10px 0px 0px 5px;text-align: center;">
         <font-awesome-icon class="icons c" style="font-size: 45px;" :icon="['fab', 'vuejs']" />
         <font-awesome-icon class="icons" style="font-size: 45px;" :icon="['fab', 'css3']" />
         <font-awesome-icon class="icons c" style="font-size: 45px;" :icon="['fab', 'node']" />
         <font-awesome-icon class="icons" style="font-size: 45px;" :icon="['fab', 'python']" />
         <font-awesome-icon class="icons cy" style="font-size: 45px;" :icon="['fab', 'js']" />
         <font-awesome-icon class="icons" style="font-size: 45px;" :icon="['fab', 'php']" />
        </div>
      </div>
      <div>
        . . .
      </div>
      <div class="card-dark">
        <div style="text-align: center;">
         <font-awesome-icon class="icons" :icon="['fab', 'instagram']" />
         <font-awesome-icon class="icons" :icon="['fab', 'twitter']" />
         <font-awesome-icon class="icons" :icon="['fab', 'facebook']" />
         <font-awesome-icon class="icons" :icon="['fab', 'github']" />
         <font-awesome-icon class="icons" :icon="['fab', 'wordpress']" />
        </div>
      </div>
      <div class="foot">
        <font-awesome-icon style="color: #fe4066" :icon="['fas', 'heart']" /> 2020
      </div>
    </div>
    <particle />
  </div>
</template>

<script>
import particle from "./components/particle.vue";

export default {
  name: "App",
  components: {
    particle,
  },
};
</script>

<style>
@import url(~@/assets/rules.css);
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}
.card-dark {
  text-align: left;
  margin: 8px 0px;
  margin-bottom: 0px;
  padding: 10px;
  border-radius: 3px;
  background-color: #212121;
}
.photo {
  width: 140px;
  height: 140px;
  margin-top: -100px;
  margin-bottom: 20px;
  border-radius: 50%;
}
.desc {
  font-size: 18px;
  padding: 5px;
}
.icons {
  font-size: 28px;
  margin: 5px;
}
.page {
  margin: 0px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 3px;
  background-color: #212121;
  color: #41b883;
  text-align: center;
}
.page :first-child {
  width: min-content;
  background-color: black;
  border-radius: 3px;
}
.page :last-child {
  background-color: black;
  border-radius: 3px;
  width: min-content;
}
.main {
  color: white;
  position: absolute;
  right: 0;
  left: 0;
  margin: 120px auto;
  width: 50%;
  z-index: 2;
  text-align: center;
  padding: 10px;
  background-color: #121212;
  opacity: 0.9;
  border-radius: 5px;
}
.c {
  color: #41b883 !important;
}
.cw {
  color: white;
}
.cy {
  color: yellow;
}

.progess {
  margin: 3px 0px;
  position: relative;
  border-radius: 4px;
  width: 100%;
  height: 8px;
  background: darkgrey;
}

.percent {
  border-radius: 5px;
  position: absolute;
  width: 80px;
  height: 8px;
  background: #1a915b;
}
.foot {
  /* padding: 3px; */
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
  color: whitesmoke;
}
</style>
