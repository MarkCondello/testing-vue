 
<template>
    <div>
        <p class="count" v-text="count"></p>
        <button v-show="count > 0" class="decrement" @click="count > 0 && count--">Decrement Count</button>
        <button class="increment" @click="count++">Increment Count</button>
    </div>
</template>    
<script>
export default {
    data() {
        return {
            count: 0,
        }
    }
}   
</script>