const POINTS = [
  // {x: 232, y: 226},
  {x: 440, y: 120},
  {x: [580, 742], y: [40, 130]},
  {x: 940, y: 226},
  {x: [1094, 1240], y: [312, 230]},
  {x: 1402, y: 222},
  {x: [1576, 1320], y: [312, 456]},
  {x: 1142, y: 566},
  {x: [988, 810], y: [648, 554]},
  {x: 646, y: 450},
  {x: [488, 320], y: [362, 456]},
  {x: 138, y: 454},
  {x: [-26, 232], y: [362, 226]}
];

// const POINTS = [
//   // {x: 232, y: 226},
//   {x: 336, y: 173},
//   {x: [580, 841], y: [40, 178]},
//   {x: 841, y: 178},
//   {x: [1094, 1321], y: [312, 178]},
//   {x: 1321, y: 178},
//   {x: [1576, 1231], y: [312, 511]},
//   {x: 1231, y: 511},
//   {x: [988, 728], y: [648, 511]},
//   {x: 728, y: 511},
//   {x: [488, 229], y: [362, 511]},
//   {x: 229, y: 511},
//   {x: [-26, 336], y: [362, 173]}
// ];

// const temp = POINTS.map(function (point) {
//   if (Array.isArray(point.x)) {
//     return {
//       x: [point.x[0] - 126, point.x[1] - 126],
//       y: [point.y[0] - 212, point.y[1] - 212]
//     }
//   } else {
//     return {
//       x: point.x - 126,
//       y: point.y - 212
//     }
//   }
// });

const DURATION = {
  ballSlide: 1500,
  turnOn: 1000,
  turnOff: 1000,
  enlarge: 1000,
  textSlideIn: 1000,
  textSlideOut: 1000
};

function clone(obj) {
  // return obj;
  return JSON.parse(JSON.stringify(obj));
}


var ball = document.getElementById('ball');
var light1 = document.getElementById('light1');
var light2 = document.getElementById('light2');
var light3 = document.getElementById('light3');
var light4 = document.getElementById('light4');
var light5 = document.getElementById('light5');
var light6 = document.getElementById('light6');
var detail = document.getElementById('detail');
var stepBg1 = document.getElementById('step1-bg');
var stepIntro1 = document.getElementById('step1-intro');

//region 数据采集->数据加工
// 小球滑动
var tweenPath1 = createPathTween(ball, clone(POINTS[0]), clone(POINTS[1]));
// 点灭数据采集
// TODO...
var tweenTurnOffLight1 = createTurnOffTween(light1);
// 点亮数据加工
// 点亮标题
// TODO...
var tweenTurnOnLight2 = createTurnOnTween(light2);
//endregion

//region 数据加工->数据处理
// 小球滑动
var tweenPath2 = createPathTween(ball, clone(POINTS[2]), clone(POINTS[3]));
// 点灭数据加工
// 点灭标题
// TODO...
var tweenTurnOffLight2 = createTurnOffTween(light2);
// 点亮数据处理
// 点亮标题
// TODO...
var tweenTurnOnLight3 = createTurnOnTween(light3);
//endregion

//region 数据处理->数据应用
// 小球滑动
var tweenPath3 = createPathTween(ball, clone(POINTS[4]), clone(POINTS[5]));
// 点灭数据处理
// 点灭标题
// TODO...
var tweenTurnOffLight3 = createTurnOffTween(light3);
// 点亮数据应用
// 点亮标题
// TODO...
var tweenTurnOnLight4 = createTurnOnTween(light4);
//endregion

//region 数据应用->运营管理;
// 小球滑动
var tweenPath4 = createPathTween(ball, clone(POINTS[6]), clone(POINTS[7]));
// 点灭数据应用
// 点灭标题
// TODO...
var tweenTurnOffLight4 = createTurnOffTween(light4);
// 点亮运营管理
// 点亮标题
// TODO...
var tweenTurnOnLight5 = createTurnOnTween(light5);
//endregion

//region 运营管理->统计分析
// 小球滑动
var tweenPath5 = createPathTween(ball, clone(POINTS[8]), clone(POINTS[9]));
// 点灭运营管理
// 点灭标题
// TODO...
var tweenTurnOffLight5 = createTurnOffTween(light5);
// 点亮统计分析
// 点亮标题
// TODO...
var tweenTurnOnLight6 = createTurnOnTween(light6);
//endregion

//region 统计分析->数据采集
// 小球滑动
var tweenPath6 = createPathTween(ball, clone(POINTS[10]), clone(POINTS[11]));
// 点灭统计分析
// 点灭标题
// TODO...
var tweenTurnOffLight6 = createTurnOffTween(light6);
// 点亮数据采集
// 点亮标题
// TODO...
var tweenTurnOnLight1 = createTurnOnTween(light1);
//endregion

//region 放大背景（以左上角为中心）
// TODO...
//endregion

//region 显示详情背景
// TODO...
//endregion

//region 点亮数据采集详情
// 点亮文本
// TODO...
// 点亮图片
// TODO...
//endregion

// 移动背景到数据加工

//region 显示详情
var tweenDetailBg = new TWEEN.Tween({ x: 0, opacity: 0.8 })
  .to({ x: 1, opacity: 1 }, 1000)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onUpdate(function() {
    detail.style.opacity = this.opacity;
    detail.style.webkitTransform = 'scale(' + this.x + ', ' + this.x + ')';
  });

var tweenShowStepIntro1 = new TWEEN.Tween({ x: -100 })
  .to({ x: 100 }, 1000)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onUpdate(function() {
    stepIntro1.style.webkitTransform = 'translateX(' + this.x + 'px)';
  });

var tweenHideStepBg1 = new TWEEN.Tween({ x: 0 })
  .to({ x: -2000 }, 600)
  .delay(3000)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onUpdate(function() {
    stepBg1.style.webkitTransform = 'translateX(' + this.x + 'px)';
  });

var tweenHideStepIntro1 = new TWEEN.Tween({ x: 100 })
  .to({ x: -1000 }, 400)
  .delay(3300)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onUpdate(function() {
    stepIntro1.style.webkitTransform = 'translateX(' + this.x + 'px)';
  });

var tweenHideDetailBg = new TWEEN.Tween({ x: 1, opacity: 1 })
  .to({ x: 0, opacity: 0.8 }, 1000)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onUpdate(function() {
    detail.style.opacity = this.opacity;
    detail.style.webkitTransform = 'scale(' + this.x + ', ' + this.x + ')';
  });
//endregion

tweenPath1.chain(tweenTurnOffLight1, tweenTurnOnLight2);
tweenTurnOnLight2.chain(tweenPath2);
tweenPath2.chain(tweenTurnOffLight2, tweenTurnOnLight3);
tweenTurnOnLight3.chain(tweenPath3);
tweenPath3.chain(tweenTurnOffLight3, tweenTurnOnLight4);
tweenTurnOnLight4.chain(tweenPath4);
tweenPath4.chain(tweenTurnOffLight4, tweenTurnOnLight5);
tweenTurnOnLight5.chain(tweenPath5);
tweenPath5.chain(tweenTurnOffLight5, tweenTurnOnLight6);
tweenTurnOnLight6.chain(tweenPath6);
tweenPath6.chain(tweenTurnOffLight6, tweenTurnOnLight1);
tweenTurnOnLight1.chain(tweenPath1);

// tweenPath1.chain(tweenLighten1);
// tweenLighten1.chain(tweenPath2);
// tweenPath2.chain(tweenDetailBg);
// tweenDetailBg.chain(tweenShowStepIntro1);
// tweenShowStepIntro1.chain(tweenHideStepBg1, tweenHideStepIntro1);

tweenPath1.start();

animate();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

function createPathTween(element, start, end, duration) {
  const origin = {
    x: start.x,
    y: start.y
  };

  return new TWEEN.Tween(start)
    .to(end, duration || DURATION.ballSlide)
    // .easing(TWEEN.Easing.Elastic.InOut)
    .onStart(function () {
      element.style.opacity = 1;
    })
    .onUpdate(function() {
      element.style.webkitTransform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
    })
    .onComplete(function () {
      element.style.opacity = 0;
      this.x = origin.x;
      this.y = origin.y;
    });
}

function createLightenTween(element, start, end, duration) {
  return new TWEEN.Tween({ opacity: start })
    .to({ opacity: end }, duration)
    // .easing(TWEEN.Easing.Elastic.InOut)
    .onUpdate(function() {
      // console.log(this);
      element.style.opacity = this.opacity;
    });
}

function createTurnOnTween(element) {
  return createLightenTween(element, 0, 1, DURATION.turnOn);
}

function createTurnOffTween(element) {
  return createLightenTween(element, 1, 0, DURATION.turnOff);
}