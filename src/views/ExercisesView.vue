<template>
    <div class="container">
        <div v-if="$route.params.name">
            <h1>You were looking for {{ $route.params.name }}. Try <RouterLink class="link" :to="'/exercises/' + exercise">{{ exercise }}</RouterLink></h1>
        </div>
        <div v-else class="exercises">
            <h1>All exercises:</h1>
            <ul>
                <li v-for="exercise in exercises" :key="exercise">{{ exercise }}</li>
            </ul>
            <div>
                <input type="number" v-model="serialNumber" :placeholder="getPlaceholder()" @keyup="updateExerciseName">
            </div>
            <div>
                <input type="text" v-model="exerciseName" placeholder="Name of exercise" @keyup="updateSerialNumber">
            </div>
        </div>
    <p class="timer">Time spent on this site: <a class="time">{{ formattedTime }}</a></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                exercises: ["row", "press", "dips", "squat", "deadlift"],
                exercise: 'dips',
                serialNumber: 0,
                exerciseName: '',
                time: 0 
            }
        },
        mounted() {
            this.getRandomExercise();
            this.setPlaceholder();
            window.setInterval(() => {
                this.time += 1
            }, 1000);
        },
        watch: {
            exerciseName() {
                this.updateSerialNumber();
            },
            
            serialNumber() {
                this.updateExerciseName();
            }
        },
        methods: {
            getRandomExercise() {
                this.exercise = this.exercises[this.getRandomNumber()];
            },

            getRandomNumber() {
                return Math.floor(Math.random() * this.exercises.length);
            },

            setPlaceholder(){
                if(this.serialNumber === 0){
                    this.serialNumber = '';
                }
            },

            getPlaceholder(){
                return this.serialNumber === '' ? 'Serial number of exercise' : this.serialNumber;
            },

            updateSerialNumber() {
                const index = this.exercises.indexOf(this.exerciseName.toLowerCase());
                this.serialNumber = index !== -1 ? index + 1 : '';
            },

            updateExerciseName() {
                if (this.serialNumber > 0 && this.serialNumber <= this.exercises.length) {
                    this.exerciseName = this.exercises[this.serialNumber - 1];
                } 
                else {
                    this.exerciseName = '';
                }
            }
        },
        beforeRouteUpdate(to, from, next) {
            do{
                this.getRandomExercise();
            } while(to.params.name === this.exercise)
            next();
        },
        computed: {
            formattedTime() {
                const minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
                const seconds = (this.time % 60).toString().padStart(2, '0');
                return `${minutes}:${seconds}`;
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 69vw;
    }

    .exercises {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    * {
        font-size: 30px;
        color: navy;
    }

    .link {
        color: deepskyblue;
    }
    
    input {
        margin-top: 40px;
    }

    .timer {
        position: absolute;
        bottom: 0px;
    }

    a {
        background-color: lightgrey;
    }
</style>