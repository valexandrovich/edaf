import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

Vue.use(VueI18n)


export const i18n = new VueI18n({
    silentTranslationWarn: true,
    // locale: document.documentElement.lang.slice(0, 2) || 'en',
    locale: (localStorage.getItem('lang') || 'en'),
    fallbackLocale: 'en',
})

export function loadMessages() {
    const usedLanguage = ['uk', 'en']
    usedLanguage.forEach(lang => {
        axios.get(process.env.VUE_APP_API_BASE + `/api/vocabularies?locale=${lang}`, {
            headers: {
                'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
            }
        }).then(response => {

            let msgs = response.data.data[0].attributes.messages
            i18n.setLocaleMessage(lang, msgs)
        })
    })
}