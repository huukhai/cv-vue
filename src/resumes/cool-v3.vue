<template>
  <div class="resume">
    <div class="banner">
      <div class="banner__fullname">{{ person.name.full }}</div>
      <div class="banner__position">{{ person.position }}</div>
      <div v-if="person.birth" class="banner__location"
        >{{ lang.born }} {{ person.birth.year }} {{ lang.bornIn }}
        {{ person.birth.location }}</div
      >
    </div>

    <div class="content">
      <div class="content__left">
        <div class="section">
          <div class="section-headline">
            {{ lang.about }}
          </div>

          <div class="section-content section-content--plain">
            {{ person.about }}
            <br />
            <br />
            <!-- {{ person.knowledge }} -->
            <ul class="section-content__text--light section-content__text--ul">
              <li
                v-for="(knowledge, index2) in Array.isArray(person.knowledge)
                  ? person.knowledge
                  : [person.knowledge]"
                :key="index2"
                class="section-content__text--knowledge"
                >{{ knowledge }}</li
              >
            </ul>
          </div>
        </div>

        <div v-if="person.skills" class="section section-skills">
          <div class="section-headline">
            {{ lang.skills }}
          </div>

          <div class="section-content-grid">
            <a
              v-for="(skill, index) in person.skills"
              :key="index"
              class="grid-item"
              :class="{ link: skill.url !== undefined }"
              :href="skill.url"
            >
              <span class="squarred-grid-item">
                {{ skill.name }}
              </span>
            </a>
          </div>
        </div>

        <div class="section">
          <div class="section-headline">
            {{ lang.contact }}
          </div>

          <div class="section-content section-content--plain">
            <div class="section-link">
              <i class="section-link__icon material-icons">business</i
              >{{ person.contact.street }}
            </div>

            <a class="section-link link" :href="contactLinks.email">
              <i class="section-link__icon material-icons">mail</i
              >{{ person.contact.email }}
            </a>

            <a
              v-if="person.contact.phone"
              class="section-link link"
              :href="contactLinks.phone"
            >
              <i class="section-link__icon material-icons">phone</i
              >{{ person.contact.phone }}
            </a>

            <a
              v-if="person.contact.skype"
              class="section-link link"
              :href="contactLinks.skype"
            >
              <i class="section-link__icon fa fa-skype"></i
              >{{ person.contact.skype }}
            </a>

            <a
              v-if="person.contact.website"
              class="section-link link"
              :href="person.contact.website"
            >
              <i class="section-link__icon fa fa-globe"></i
              >{{ person.contact.website }}
            </a>

            <a
              v-if="person.contact.linkedin"
              class="section-link link"
              :href="contactLinks.linkedin"
            >
              <i class="section-link__icon fa fa-linkedin"></i
              >{{ person.contact.linkedin }}
            </a>

            <a
              v-if="person.contact.github"
              class="section-link link"
              :href="contactLinks.github"
            >
              <i class="section-link__icon fa fa-github"></i
              >{{ person.contact.github }}
            </a>

            <a
              v-if="person.contact.medium"
              class="section-link link"
              :href="contactLinks.medium"
            >
              <i class="section-link__icon fa fa-medium"></i
              >{{ person.contact.medium }}
            </a>
          </div>
        </div>
      </div>

      <div class="content__right">
        <div class="section section-work">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">work</i
            >{{ lang.experience }}
          </div>

          <div class="section-content">
            <div
              v-for="(experience, index) in person.experience"
              :key="index"
              class="section-content__item pdf-item"
              :class="{ 'section-content__highlight': index % 2 === 0 }"
            >
              <div
                class="section-content__title d-flex justify-content-between"
              >
                <div class="flex-shrink-1">
                  <span
                    >{{ experience.company
                    }}<!--<span class="divider-line">/</span>--></span
                  >
                  <!-- <span>{{ experience.company }}</span> -->
                  <br /><span class="text-black-50">{{
                    experience.position
                  }}</span>
                </div>
                <div class="flex-shrink-0 text-end ms-4">
                  <span class="timeperiod">{{ experience.timeperiod }}</span>
                </div>
              </div>

              <!-- <span class="section-content__header">{{ experience.position }}</span>
              <span class="section-content__subheader">
                {{ experience.company }}
                <span class="section-content__plain">{{ experience.location }}</span>
              </span>

              <div class="section-content__text">{{ experience.timeperiod }}</div> -->
              <ul
                class="section-content__text--light section-content__text--ul"
              >
                <li
                  v-for="(desc, index2) in Array.isArray(experience.description)
                    ? experience.description
                    : [experience.description]"
                  :key="index2"
                  class="section-content__text--list"
                  >{{ desc }}</li
                >
              </ul>
            </div>
          </div>
        </div>

        <div class="html2pdf__page-break"></div>

        <div v-if="person.projects" class="section section-project">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">widgets</i
            >{{ lang.projects }}
          </div>

          <div class="section-content">
            <a
              v-for="(project, index) in person.projects"
              :key="index"
              class="section-content__item pdf-item"
              :class="{ link: project.url !== undefined }"
              :href="project.url"
            >
              <div v-if="index === 7" class="pdt-20"></div>
              <div class="section-content-project__title">
                <div class="w-100 d-flex justify-content-between">
                  <div class="flex-shrink-1">
                    <span
                      >{{ project.name }}
                      <!--<span class="divider-line">/</span>-->
                    </span>
                    <!-- <span>{{ project.role }}</span> -->
                    <!-- <br /><span class="text-role">{{ project.role }}</span> -->
                  </div>
                  <div class="flex-shrink-0 text-end ms-4">
                    <span class="timeperiod">{{ project.timeperiod }}</span>
                  </div>
                </div>
                <div class="w-100 description">{{ project.description }}</div>
              </div>
              <div class="section-content-project-info">
                <span class="info-label"
                  >Role: <span class="info-data">{{ project.role }}</span></span
                >
                <br />
                <span class="info-label"
                  >Platforms:
                  <span class="info-data">{{ project.platform }}</span></span
                >
                <br />
                <!-- <span class="info-label"
                  >Members:
                  <span class="info-data">{{ project.members }}</span></span
                >
                <br /> -->
                <!-- <span>Type: {{ project.type }}</span> <br /> -->
              </div>
              <ul
                class="section-content__text--light section-content__text--ul"
              >
                <li
                  v-for="(cont, index2) in Array.isArray(project.contributions)
                    ? project.contributions
                    : [project.contributions]"
                  :key="index2"
                  class="section-content__text--list"
                  >{{ cont }}</li
                >
              </ul>

              <!-- <span class="section-content__header"> {{ project.name }} </span>
              <span class="section-content__subheader">{{
                project.platform
              }}</span>
              <span class="section-content__text">
                {{ project.description }}
              </span> -->
            </a>
          </div>
        </div>

        <div v-if="person.contributions" class="section">
          <div class="section-headline">
            <i class="section-headline__icon fa fa-heart"></i
            >{{ lang.contributions }}
          </div>

          <div class="section-content-grid">
            <a
              v-for="(contribution, index) in person.contributions"
              :key="index"
              class="section-content__item-grid"
              :class="{ link: contribution.url !== undefined }"
              :href="contribution.url"
            >
              <span class="section-content__header">
                {{ contribution.name }}
              </span>
              <span class="section-content__text">
                {{ contribution.description }}
              </span>
              <span
                class="section-content__text--light"
                style="word-break: break-all"
              >
                {{ contribution.url }}
              </span>
            </a>
          </div>
        </div>

        <div class="section pdf-item section-education">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">school</i
            >{{ lang.education }}
          </div>

          <div class="section-content">
            <a
              v-for="(education, index) in person.education"
              :key="index"
              class="section-content__item"
              :class="{ link: education.website !== undefined }"
              :href="education.website"
            >
              <div class="w-100 d-flex justify-content-between">
                <div class="flex-shrink-1">
                  <span
                    >{{ education.degree }}
                    <span v-if="education.school" class="divider-line">/</span>
                  </span>
                  <span>{{ education.school }}</span>
                  <!-- <br /><span class="text-role">{{ project.role }}</span> -->
                </div>
                <div class="flex-shrink-0 text-end ms-4">
                  <span class="timeperiod">{{ education.timeperiod }}</span>
                </div>
              </div>

              <!-- <div class="d-flex w-100 justify-content-between">
                <div class="section-content__header">
                  {{ education.school }}
                </div>
                <div class="section-content__subheader description">{{
                  education.degree
                }}</div>
                <div class="section-content__text">
                  {{ education.timeperiod }}
                </div>
              </div> -->
              <span class="section-content__text--light description">
                {{ education.description }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <img class="picture" src="@resume/nhk.jpeg" />
  </div>
</template>

<script>
import Vue from 'vue'
import { getVueOptions } from './options'

const name = 'cool-v3'

export default Vue.component(name, getVueOptions(name))
</script>

<style lang="less" scoped>
@accent-color: #34495e;
@banner-color: #42b883;
@banner-height: 115px;
@picture-size: 120px;
@picture-offset: 35px;
@base-padding: 30px;
@left-column-width: 220px;

.link {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}

.resume {
  position: relative;
  font-family: 'Roboto' !important;
  font-size: 0.8em;
}

.picture {
  position: absolute;
  top: @banner-height - @picture-offset;
  left: @left-column-width - @picture-size / 2 + @base-padding;
  height: @picture-size;
  width: @picture-size;
  border-radius: 50%;
  border: 5px solid @accent-color;
  // content: url('../../resume/id.jpg');
  z-index: 2;
}

.banner {
  width: 100%;
  height: @banner-height;
  padding: @base-padding - 10;
  background-color: @banner-color;
  /*
    background-image: url('@resume/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
  */
  color: white;

  &__fullname {
    font-size: 32px;
  }

  &__position {
    font-size: 16px;
    margin: 2px 0;
  }

  &__location {
    font-size: 12px;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    // height: 100%;
    padding: @base-padding - 10px;
  }

  &__left {
    width: @left-column-width;
    color: rgba(255, 255, 255, 0.7);
    background-color: @accent-color;
    // height: calc(100% + @banner-height + (@base-padding - 10px) * 2);

    .section-headline {
      color: white;
    }
  }

  &__right {
    flex: 1;
  }
}

.section {
  margin: 30px 0 15px;
}

.section-skills {
  margin: 10px 0 15px;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  color: @accent-color;
  display: inline-block;
  font-size: 1.2em;
  font-weight: 500;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.59) !important;

  &__icon {
    color: white;
  }
}

.section-project {
  margin-top: 20px;
}

.section-content {
  margin-top: 5px;
  // padding-left: 32px;
  font-size: 14px;

  &__item {
    display: block;
    // margin-bottom: 5px;
    // padding: 10px 15px 1px 15px;
    // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &::after {
      display: block;
      position: absolute;
      top: 0;
      width: 50%;
      left: 25%;
      border-top: 1px solid red;
    }
  }

  &__item:hover {
    // box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  }

  .d-flex {
    display: flex !important;
  }

  .w-100 {
    width: 100%;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .divider-line {
    padding: 0 0.2em 0 0.4em;
  }

  .text-black-50 {
    color: #6a6a6a !important;
    // font-weight: 400 !important;
    --bs-text-opacity: 1;
    font-size: 14px;
  }

  .text-end {
    text-align: right !important;
  }

  .ms-4 {
    margin-left: 1.5rem !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .description {
    color: #6a6a6a;
    font-size: 13px;
    font-style: italic;
  }

  .pdt-20 {
    padding-top: 20px;
  }

  &-project {
    &__title {
      // font-size: 1.3em;
      font-weight: 500;
      margin-bottom: 0.4em;
      // display: flex;
      // justify-content: space-between;
      color: #d89216;

      .text-role {
        color: #6a6a6a !important;
        // font-weight: 400 !important;
        --bs-text-opacity: 1;
        font-size: 14px;
      }

      .timeperiod {
        font-size: 12px;
        color: #d89216;
      }
    }

    &-info {
      font-size: 13px;
      color: #d89216;
      padding-bottom: 5px;

      .info-label {
        font-weight: 450;
      }

      .info-data {
        font-style: italic;
        color: #6a6a6a;
      }
    }
  }

  &__title {
    // font-size: 1.3em;
    font-weight: 500;
    margin-bottom: 0.4em;
    display: flex;
    justify-content: space-between;
    color: #81b214;

    .justify-content-between {
      justify-content: space-between !important;
    }

    .d-flex {
      display: flex !important;
    }

    .w-100 {
      width: 100%;
    }

    .flex-shrink-1 {
      flex-shrink: 1 !important;
    }

    .divider-line {
      padding: 0 0.2em 0 0.4em;
    }

    .text-black-50 {
      color: #5a5a5a !important;
      // font-weight: 400 !important;
      --bs-text-opacity: 1;
      font-size: 14px;
    }

    .text-role {
      color: #647e68 !important;
      // font-weight: 400 !important;
      --bs-text-opacity: 1;
      font-size: 14px;
    }

    .timeperiod {
      font-size: 12px;
      color: #81b214;
    }

    .text-end {
      text-align: right !important;
    }

    .ms-4 {
      margin-left: 1.5rem !important;
    }
    .flex-shrink-0 {
      flex-shrink: 0 !important;
    }
  }

  &__highlight {
    // background-color:silver;
  }

  &__header {
    display: block;
    font-size: 1.1em;
    font-weight: 500;
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 13px;

    &--light {
      font-size: 13px;
    }

    &--ul {
      padding-inline-start: 15px;
      margin-block-start: 0;
    }

    &--list {
      list-style-type: disc;
      // font-size: 11px;
      color: #6a6a6a;
      margin-bottom: 5px;
    }

    &--knowledge {
      list-style-type: disc;
      margin-bottom: 5px;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__plain {
    display: inline;
    font-weight: 300;
  }

  &__item-grid {
    flex: 1 1 0;
    margin-bottom: 5px;
    padding-right: 5px;
  }

  &--plain {
    padding: 0;
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item {
  padding-right: 5px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid white;
  color: white;
  margin-top: 5px;
  padding: 5px;
}

.section-hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}

.section-education {
  margin-bottom: 350px;
}
</style>
