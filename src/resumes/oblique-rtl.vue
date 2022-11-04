<template>
  <div id="resume3" class="resume"> </div>
</template>

<script>
import Vue from 'vue'
import { getVueOptions } from './options'

const name = 'oblique-rtl'
export default Vue.component(name, getVueOptions(name))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume3 {
  font-family: 'Open Sans Condensed', sans-serif;
  padding-bottom: 50px;
  direction: rtl;
  a,
  a:focus,
  a:hover {
    color: black;
    text-decoration: none;
  }
  h3 {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .resume-header .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 600px 1500px 0 0;
    border-color: #006064 transparent transparent transparent;
    position: absolute;
    right: -600px;
    top: 0;
  }
  .resume-header .person-header {
    position: absolute;
    z-index: 20;
    left: 15%;
    top: 200px;
    .person-wrapper {
      overflow: hidden;
      position: relative;
    }
    .img {
      height: 100%;
      width: 100px;
      float: left;
      position: absolute;
      top: 0;
      right: 0;
      background: url('../../resume/id.jpg');
      background-position: center;
      background-size: cover;
    }
    .person {
      float: right;
      color: white;
      margin-right: 120px;
    }
    .name {
      text-transform: uppercase;
      font-size: 50px;
      display: table-caption;
      text-align: right;
      line-height: 1;
      font-weight: bold;
    }
    .position {
      font-size: 20px;
      display: table-caption;
      text-align: right;
      line-height: 1;
      margin-top: 10px;
    }
  }
  .resume-content {
    margin-top: 435px;
    margin-right: 15%;
    width: 70%;
    .experience .experience-block {
      line-height: 1;
      margin-bottom: 10px;
      .row:first-child {
        font-size: 20px;
        text-transform: uppercase;
        i {
          font-size: 17px;
        }
      }
    }
    .experience .experience-block:first-of-type {
      width: 80%;
    }
  }
  .education-block {
    line-height: 1;
    margin-bottom: 10px;
    .row:first-child {
      font-size: 20px;
      text-transform: uppercase;
    }
  }
  .skill-section .skills {
    width: 100%;
    .skill-block {
      width: 50%;
      float: left;
      i {
        font-size: 17px;
        margin-right: 15px;
      }
      .skill {
        font-size: 20px;
      }
    }
  }
  .skills-other {
    display: inline-block;
    font-size: 20px;
    margin-top: 10px;
    line-height: 1;
  }
  .contact {
    margin-top: 50px;
    a,
    span {
      display: inline-block;
      font-size: 20px;
      list-style: none;
      margin-top: 0;
      line-height: 1;
      float: right;
      padding-left: 0;
      margin-left: 0;
    }
  }
}
</style>
