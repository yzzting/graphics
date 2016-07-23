let square = `.square {
  width: 100px;
  height: 100px;
  background: #ee6e73;
}`

let rectangle = `.rectangle {
  width: 100px;
  height: 200px;
  background: #ee6e73;
}`

let parallelogram = `.parallelogram {
        position: relative;
   	display: inline-block;
   	padding: .5em 1em;
   	border: 0;
        margin: .5em;
   	background: transparent;
   	color: white;
   	text-transform: uppercase;
   	text-decoration: none;
   	font: bold 200%/1 sans-serif;
}
.parallelogram::before {
        /*消除字体倾斜*/
        content: '';
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	z-index: -1;
	background: #ee6e73;
	transform: skew(45deg);
}
`

let circle = `.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ee6e73;
}`

let oval = `.oval {
  width: 100px;
  height: 50px;
  border-radius: 50%;
  background: #ee6e73;
}`

let triangle = `.triangle {
  width: 0;
  height: 0;
  border-bottom: 100px solid #ee6e73;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}`

let starSix = `.starSix {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #ee6e73;
    position: relative;
}
.starSix:after {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid #ee6e73;
	position: absolute;
	content: "";
	top: 30px;
	left: -50px;
}`

let starFive = `.starFive {
   margin: 50px 0;
   position: relative;
   display: block;
   color: #ee6e73;
   width: 0px;
   height: 0px;
   border-right:  100px solid transparent;
   border-bottom: 70px  solid #ee6e73;
   border-left:   100px solid transparent;
   -moz-transform:    rotate(35deg);
   -webkit-transform: rotate(35deg);
   -ms-transform:     rotate(35deg);
   -o-transform:      rotate(35deg);
}
.starFive:before {
   border-bottom: 80px solid #ee6e73;
   border-left: 30px solid transparent;
   border-right: 30px solid transparent;
   position: absolute;
   height: 0;
   width: 0;
   top: -45px;
   left: -65px;
   display: block;
   content: '';
   -webkit-transform: rotate(-35deg);
   -moz-transform:    rotate(-35deg);
   -ms-transform:     rotate(-35deg);
   -o-transform:      rotate(-35deg);

}
.starFive:after {
   position: absolute;
   display: block;
   color: #ee6e73;
   top: 3px;
   left: -105px;
   width: 0px;
   height: 0px;
   border-right: 100px solid transparent;
   border-bottom: 70px solid red;
   border-left: 100px solid transparent;
   -webkit-transform: rotate(-70deg);
   -moz-transform:    rotate(-70deg);
   -ms-transform:     rotate(-70deg);
   -o-transform:      rotate(-70deg);
   content: '';
}`

let egg = `.egg{
    display:block;
    width: 126px;
    height: 180px;
    background-color: red;
    -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
    border-radius:50%  50%  50%  50%  / 60%   60%   40%  40%;
}`

let diamond = `.diamond {
    border-style: solid;
    border-color: transparent transparent #ee6e73 transparent;
    border-width: 0 25px 25px 25px;
    height: 0;
    width: 50px;
    position: relative;
    margin: 20px 0 50px 0;
}
.diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #ee6e73 transparent transparent transparent;
    border-width: 70px 50px 0 50px;
}`

let cross = `.cross{
    position: relative;
    height: 100px;
    width: 20px;
    background: #ee6e73;
}
.cross:after {
    background: #ee6e73;
    content: '';
    height: 20px;
    left: -40px;
    position: absolute;
    top: 40px;
    width: 100px;
}`

export default {
  square,
  rectangle,
  parallelogram,
  circle,
  oval,
  triangle,
  starSix,
  starFive,
  egg,
  diamond,
  cross
}
