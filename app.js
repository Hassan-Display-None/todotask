let app = new Vue({
    el: '#app',
    data: {
        value: "",
        tasks: [],
        laters: []
    },

    methods: { 
        add: function () {
            if (this.value == "")
            {

            } else {
                this.tasks.push(this.value) ;
            }
        },
        later: function (index) {
            this.laters.push(this.tasks[index])
            this.tasks.splice(index, 1);
            console.log(this.laters);
        },
        unlater: function (index) {
            this.tasks.push(this.laters[index])
            this.laters.splice(index, 1);
            console.log(this.laters);
        },
        delete1: function (index) {
            if(this.tasks[index] != undefined)
            {
                this.tasks.splice(index, 1);
            } else {
                this.laters.splice(index, 1);
            }
        }
    },
});

