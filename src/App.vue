<template>
  <div id="app">

    <modal v-if="showModal" @close="showModal = false">
      <h2>Había una vez...</h2>
      <p>...un puercoespín, un lobo y un zorro</p>
      <p>El puercoespín era muy tímido</p>
      <img src="https://thumbs.dreamstime.com/x/cute-cartoon-hedgehog-child-illustration-53892503.jpg" alt="puercoespin" width="50px">
      <p>El lobo y el zorro querían comerlo</p>
      <img src="http://2.bp.blogspot.com/_hKotJaLktmE/S76i9N-lFaI/AAAAAAAADfk/PqO9n0NEGJk/s1600/fox_and_wolf_01.jpg" alt="lobo y zorro" width="150px">
      <p>el puercoespín se cubrió con sus espinas y el lobo y el zorro se pincharon todos</p>
      <p>y así aprendieron que no tenían que molestar al puercoespín que vivió feliz para siempre</p>
      <img src="https://thumb9.shutterstock.com/display_pic_with_logo/2822515/542956942/stock-vector-set-of-cute-watercolor-hedgehogs-vector-illustration-542956942.jpg" alt="feliz puercoespin">
    </modal>
    <message title="Hello World" body="Lorem ipsum dolor sit amet"></message>
    <message title="Hello Universe" body="bla bla bla"></message>

    <button class="button is-primary is-outlined" @click="showModal = true">Show modal</Button>
  </div>
</template>

<script>
  import message from '@/components/Message'
  import modal from '@/components/Modal'

  export default {
    name: 'app',
    components: {
      message, modal
    },
    data () {
      return {
        showModal: false
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
