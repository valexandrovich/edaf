import axios from 'axios'
import { i18n } from '../plugins/i18n'

// http: //localhost:1337/api/products?filters[productType][$eq]=artistTalks

const API_URL = process.env.VUE_APP_API_BASE + '/api/'

class EventService {
    getAllEvents() {
            let locale = i18n.locale
            return axios.get(API_URL + 'events?populate=*&locale=' + locale, {
                headers: {
                    'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
                }
            })
        }
        // getEventsByType(type) {
        //     // console.log(API_URL + '?filters[eventType][$eq]=' + type)
        //     return axios.get(API_URL + 'events?filters[eventType][$eq]=' + type, {
        //         headers: {
        //             'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
        //         }
        //     })
        // }

    // async getEventDetails(id) {
    //     // console.log(API_URL + '/' + id + '?populate=speakers')
    //     let result = await axios.get(API_URL + 'events/' + id + '?populate=speakers', {
    //         headers: {
    //             'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
    //         }
    //     })

    //     let event = result.data.data
    //     let speakers = []
    //         // console.log()
    //     event.attributes.speakers.data.forEach(speaker => {
    //         let speakerDetails = await axios.get(API_URL + 'speakers/' + speaker.id + '?populate=*', {
    //             headers: {
    //                 'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
    //             }
    //         })
    //         speakers.push(speakerDetails)
    //     });
    //     console.log(speakers)
    //     return event
    // }

    getSpeakerDetails(id) {
        let locale = i18n.locale
        return axios.get(API_URL + 'speakers/' + id + '?populate=img&locale=' + locale, {
            headers: {
                'Authorization': 'bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0'
            }
        })
    }


    // login(user) {
    //     return axios
    //         .post(API_URL, { login: user.login, password: user.password })
    //         .then(resp => {
    //             if (resp.data.jwtToken) {
    //                 localStorage.setItem('user', JSON.stringify(resp.data))
    //             }
    //             return resp.data
    //         })
    //     }
    //     logout(){
    //         localStorage.removeItem('user')
    //         router.push('/login')
    //     }


}

export default new EventService()