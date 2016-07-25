<style>
#app > .mdl-layout__header{
    background: #ee6e73;
}
</style>

<template>

<div id="app">
    <header class="mdl-layout__header mdl-layout__header--accent">
        <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Graphics</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation -->
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="https://github.com/yzzting/graphics">Github</a>
            </nav>
        </div>
    </header>
    <div class="site-main">
        <div class="left-show">
            <div id="show" :class="s"></div>
            <div class="showCode">
                <pre><code>{{sheet}}</code></pre>
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
            <mdl-button colored class="mdl-button--raised" @click="graphics('cross')" v-mdl-ripple-effect>Cross</mdl-button>
        </main>
    </div>
</div>

</template>

<script>

import codes from './codes/cssShow.js'
export default {
    data() {
            return {
                sheet: [],
                codes,
                s: null
            }
        },
        methods: {
            graphics: function(idx) {
              this.s = idx
              this.sheet = codes[idx]
            }
        }
      }

</script>
