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
        axios.get(`/api/vocabularies?locale=${lang}`, {
            headers: {
                'Authorization': 'bearer 734b7752accc11960c0e2d24ed48a4f90df376f9aee549e2c21123594452441d49109c425b0dc75686de3a78042d11dec4362b673292af2e4f725e64ba5279d0b43603a60d43147bea13670c2d0ce47645028f6e56d97422db06a81f911f2a6df20d83ce49da3b03101f3cec6170481c31714d93b731a75bda719808921afd35'
            }
        }).then(response => {

            let msgs = response.data.data[0].attributes.messages
            i18n.setLocaleMessage(lang, msgs)
        })
    })
}