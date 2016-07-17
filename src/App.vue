<template>
  <div id="app">
      <header>
          <md-nav>
            <md-nav-logo href="#" pos="center">Graphics</md-nav-logo>
            <md-nav-links>
                <a href="https://github.com/yzzting/graphics">Github</a>
            </md-nav-links>
        </md-nav>
      </header>
      <div class="site-main">
          <div class="left-show">
              <div id="show"></div>
              <div class="showCode">
                  <md-card>
                      <md-card-content>
                          <pre><code>{{sheet}}</code></pre>
                      </md-card-content>
                  </md-card>
              </div>
          </div>
          <main>
              <md-btn class="green" @click="graphics('square')">Square</md-btn>
              <md-btn class="green" @click="graphics('rectangle')">Rectangle</md-btn>
              <md-btn class="green" @click="graphics('parallelogram')">Parallelogram</md-btn>
              <md-btn class="green" @click="graphics('circle')">Circle</md-btn>
              <md-btn class="green" @click="graphics('oval')">Oval</md-btn>
              <md-btn class="green" @click="graphics('triangle')">Triangle</md-btn>
              <md-btn class="green" @click="graphics('starSix')">Star Six</md-btn>
              <md-btn class="green" @click="graphics('starFive')">Star Five</md-btn>
              <md-btn class="green" @click="graphics('egg')">Egg</md-btn>
              <md-btn class="green" @click="graphics('diamond')">Diamond</md-btn>
          </main>
      </div>
  </div>
</template>

<script>
    import codes from './codes/cssShow.js'
    export default {
        data(){
            return {
                sheet:[],
                codes
            }
        },
        methods:{
            graphics:function(idx){
                document.getElementById('show').className = idx
                this.sheet = codes[idx]
            }
        }
    }
</script>

<style>
</style>
