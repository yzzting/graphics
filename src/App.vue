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
              <mdl-button colored class="mdl-button--raised" @click="graphics('square')" v-mdl-ripple-effect>Square</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('rectangle')" v-mdl-ripple-effect>Rectangle</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('parallelogram')" v-mdl-ripple-effect>Parallelogram</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('circle')" v-mdl-ripple-effect>Circle</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('oval')" v-mdl-ripple-effect>Oval</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('triangle')" v-mdl-ripple-effect>Triangle</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('starSix')" v-mdl-ripple-effect>Star Six</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('starFive')" v-mdl-ripple-effect>Star Five</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('egg')" v-mdl-ripple-effect>Egg</mdl-button>
              <mdl-button colored class="mdl-button--raised" @click="graphics('diamond')" v-mdl-ripple-effect>Diamond</mdl-button>
          </main>
      </div>
  </div>
</template>

<script>
    import codes from './codes/cssShow.js'
    import covButton from './views/button.vue'
    export default {
        data(){
            return {
                sheet:[],
                codes
            }
        },
        components: {
          covButton
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
