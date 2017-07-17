<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
            <div class="box">
                <p>
                    <slot></slot>
                </p>
            </div>
        </div>
        <button class="modal-close is-large" @click="$emit('close')"></button>
    </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
    }
  }
}
</script>

new Vue({
  el: "#app"
})
