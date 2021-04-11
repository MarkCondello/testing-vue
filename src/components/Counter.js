export default {
    template: `
    <div>
        <p class="count" v-text="count"></p>
        <button @click="count++">Increment Count</button>
    </div>`,

    data() {
        return {
            count: 0,
        }
    }
}