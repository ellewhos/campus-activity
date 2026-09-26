import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useRegistrationStore = defineStore('registration', () => {
    //数据
    const registrations = ref([])
    //读取
    const savedRegistrations = localStorage.getItem('registrations')
    if (savedRegistrations) {
        registrations.value = JSON.parse(savedRegistrations)
    }
    //保存
    const saveRegistrations = () => {
        localStorage.setItem('registrations', JSON.stringify(registrations.value))
    }

    // 添加报名
    const addRegistration = (registration) => {

        registrations.value.push(registration)
        console.log(registrations.value)
        saveRegistrations()
    }
    // 删除报名
    const removeRegistration = (index) => {
        registrations.value.splice(index, 1)
        saveRegistrations()
    }
    //返回
    return {
        registrations,
        addRegistration,
        removeRegistration
    }

})

