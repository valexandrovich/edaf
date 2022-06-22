import eventService from "@/service/eventService"

export const events = {
    namespaced: true,
    state: {
        events: []
    },
    getters: {
        EVENTS: state => { return state.events.filter(evnt => evnt.attributes.isActive == true) },
        eventsByType: (state) => (type) => {
            return state.events
                .filter(evnt => evnt.attributes.isActive == true)
                .filter(evnt => evnt.attributes.eventType == type)
        }
    },
    mutations: {
        setEvents(state, events) {
            state.events = events
        }
    },
    actions: {
        getEventsByType({ state }, eventType) {
            eventService.getEventsByType(eventType).then(resp => {
                state.events = resp.data.data
            })
        },
        getAllEvents({ commit }) {
            eventService.getAllEvents().then(resp => {
                // console.log(resp);
                commit('setEvents', resp.data.data)

            })
        }
    }

}