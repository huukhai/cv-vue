import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        controlValue: {
            showLayout: false,
            floatLayout: false,
            enableDownload: true,
            previewModal: false,
            paginateElementsByHeight: 1100,
            manualPagination: true,
            filename: 'nhk',
            pdfQuality: 2,
            pdfFormat: 'a4',
            pdfOrientation: 'portrait',
            pdfContentWidth: '800px'
        }
    },

    mutations: {
        updateField
    },

    getters: {
        getField
    },
})
