<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
            <div class="box">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique fugiat magnam maiores quia rerum illum quidem quod temporibus eaque nam veritatis eius eos officia, nobis repellendus aspernatur. Quia, esse, qui!
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
