import Vue from 'vue'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh_cn',
    // locale: 'en_us',
    messages: {
        'zh_cn': require('./languages/zh_cn.json'),
        'en_us': require('./languages/en_us.json')
    }
})

export default i18n
