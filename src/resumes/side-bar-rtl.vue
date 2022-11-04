<template>
  <div id="resume2" class="resume"> </div>
</template>

<script>
import Vue from 'vue'
import { getVueOptions } from './options'

const name = 'side-bar-rtl'
export default Vue.component(name, getVueOptions(name))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {
  font-family: 'Raleway', sans-serif;
  padding-bottom: 50px;
  text-align: right;
  direction: rtl;
  a,
  a:focus,
  a:hover,
  a:visited {
    text-decoration: none;
  }
  h3 {
    text-transform: uppercase;
    padding-top: 0;
    margin-top: 0;
    letter-spacing: 5px;
    font-weight: 400;
  }
  .top-row {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    span {
      width: 100%;
      display: block;
      text-align: center;
      font-weight: normal;
    }
    span.person-name {
      text-transform: uppercase;
      font-size: 50px;
      letter-spacing: 10px;
    }
    span.person-position {
      letter-spacing: 5px;
    }
  }
  .right-col {
    width: 26%;
    float: right;
    padding-right: 8%;
    padding-left: 4%;
    .person-image .image-centerer {
      display: flex;
      justify-content: center;
      height: auto;
      overflow: hidden;
      .img {
        flex: none;
        background: url('../../resume/id.jpg');
        background-position: center;
        background-size: cover;
        height: 250px;
        width: 100%;
      }
    }
    .contact h3 {
      text-align: center;
      margin-top: 20px;
    }
    .contact .contact-row {
      text-align: center;
      letter-spacing: 2px;
      margin-bottom: 3px;
      direction: ltr;
      a {
        color: black;
      }
    }
    .contact .contact-row:first-of-type {
      margin-top: 50px;
    }
    .contact .contact-row.dots {
      margin-top: 20px;
      margin-bottom: 15px;
      font-size: 10px;
      color: rgba(153, 153, 153, 0.6);
    }
  }
  .left-col {
    width: 50%;
    float: left;
    padding-right: 4%;
    padding-left: 8%;
    .experience-block {
      margin-bottom: 10px;
      .row:first-child {
        margin-bottom: 3px;
      }
      .row .company {
        text-transform: uppercase;
        font-size: 19px;
      }
      .row .job-title {
        font-size: 19px;
      }
    }
    .education {
      margin-top: 50px;
      .education-block {
        margin-bottom: 10px;
        .degree {
          font-size: 19px;
          text-transform: uppercase;
          margin-bottom: 3px;
        }
      }
    }
    .skills-block {
      margin-top: 50px;
      position: relative;
      .skills {
        margin-bottom: 10px;
        margin-bottom: 20px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        .skill {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: relative;
          border: #333333 1px solid;
          margin: 3px;
          float: right;
          font-size: 13px;
          .skill-name {
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
          }
        }
        .skills-other {
          display: inline-block;
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
