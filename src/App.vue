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
            <div id="show" :class="s" :style="{background:selectColor,width:widthSize + 'px',height:heightSize + 'px'}"></div>
            <div class="show-code">
                <pre><code>{{sheet}}</code></pre>
            </div>
        </div>
        <div class="right-btn">
          <section class="btn-group">
            <mdl-button colored class="mdl-button--raised" @click="graphics('square',0)" v-mdl-ripple-effect>Square</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('rectangle',1)" v-mdl-ripple-effect>Rectangle</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('parallelogram',2)" v-mdl-ripple-effect>Parallelogram</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('circle',3)" v-mdl-ripple-effect>Circle</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('oval',4)" v-mdl-ripple-effect>Oval</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('triangle',5)" v-mdl-ripple-effect>Triangle</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('starFive',6)" v-mdl-ripple-effect>Star Five</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('diamond',7)" v-mdl-ripple-effect>Diamond</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('cross',8)" v-mdl-ripple-effect>Cross</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('pentagon',9)" v-mdl-ripple-effect>Pentagon</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('hexagon',10)" v-mdl-ripple-effect>Hexagon</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('heptagon',11)" v-mdl-ripple-effect>Heptagon</mdl-button>
            <mdl-button colored class="mdl-button--raised" @click="graphics('octagon',12)" v-mdl-ripple-effect>Octagon</mdl-button>
          </section>
          <section class="color-box">
            <input type="color" placeholder="#ee6e73" v-model="selectColor">
            <mdl-textfield floating-label="Color" :value.sync="selectColor"></mdl-textfield>
          </section>
          <section class="size-box">
            <mdl-textfield floating-label="Width" :value.sync="widthSize"></mdl-textfield>
            <mdl-textfield floating-label="Height" :value.sync="heightSize"></mdl-textfield>
          </section>
        </div>
    </div>
</div>

</template>

<script>

import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'
export default {
  data() {
            return {
                sheet: [],
                s: null,
                selectColor: '#ee6e73',
                widthSize: '200',
                heightSize: '200'
            }
        },
        methods: {
            graphics: function(idx,i) {
              this.s = idx
              this.sheet = 'clip-path: ' + document.styleSheets[0].cssRules[i].style.webkitClipPath + '\n' +
                           '-webkit-clip-path: ' + document.styleSheets[0].cssRules[i].style.webkitClipPath
            }
          }
        }
</script>
