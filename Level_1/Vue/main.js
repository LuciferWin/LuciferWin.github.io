const app = Vue.createApp({
    data() {
        return {
            id: 1,
            name: "Ye Win Tun",
            age: 21,
            occupation: "Backend Developer",
            profile: "images/profile.jpg",
            para: '<span style="color: red;">This is a text.</span>',
            seen: true,
            mark: 30,
            students: [
                { name: "mg mg", age: 15, gender: "male" },
                { name: "su su", age: 17, gender: "female" },
                { name: "Alex", age: 18, gender: "male" },
            ],
            username: "",
            money: 150.15455,
        }
    },
    methods: {
        reverse() {
            this.name = this.name.split('').reverse('').join('')
        }
    },
    computed: {
        girls() {
            return this.students.filter(row => row.gender == "female")
        },
        boys() {
            return this.students.filter(row => row.gender == "male")
        },
    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2)
        }
    }
})