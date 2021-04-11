 
<template>
    <div>
        <p class="count" v-text="count"></p>
        <button @click="count++">Increment Count</button>
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