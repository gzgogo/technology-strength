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
  ballSlide: 1000,
  turnOn: 1000,
  turnOff: 1000,
  scaleOutOverview: 1000,
  scaleOutDetail: 0,
  scaleInDetail: 0,
  slideInText: 1000,
  slideOutText: 1000,
  slideInImage: 1000,
  slideOutImage: 1000,
  remain: 3000,
  scaleOverview: 1000
};

function clone(obj) {
  // return obj;
  return JSON.parse(JSON.stringify(obj));
}


var overviewBg = document.getElementById('overview-bg');
var ball = document.getElementById('ball');
var overview = document.getElementById('pathway');
var light1 = document.getElementById('light1');
var light2 = document.getElementById('light2');
var light3 = document.getElementById('light3');
var light4 = document.getElementById('light4');
var light5 = document.getElementById('light5');
var light6 = document.getElementById('light6');
var title1 = document.getElementById('title1');
var title2 = document.getElementById('title2');
var title3 = document.getElementById('title3');
var title4 = document.getElementById('title4');
var title5 = document.getElementById('title5');
var title6 = document.getElementById('title6');
var detail = document.getElementById('detail');
var stepIntro1 = document.getElementById('step1-intro');
var stepIntro2 = document.getElementById('step2-intro');
var stepIntro3 = document.getElementById('step3-intro');
var stepIntro4 = document.getElementById('step4-intro');
var stepIntro5 = document.getElementById('step5-intro');
var stepIntro6 = document.getElementById('step6-intro');
var stepImage1 = document.getElementById('step1-image');
var stepImage2 = document.getElementById('step2-image');
var stepImage3 = document.getElementById('step3-image');
var stepImage4 = document.getElementById('step4-image');
var stepImage5 = document.getElementById('step5-image');
var stepImage6 = document.getElementById('step6-image');

//region overview
//region 数据采集->数据加工
// 小球滑动
var tweenPath1 = createPathTween(ball, clone(POINTS[0]), clone(POINTS[1]));
// 点灭数据采集
// TODO...
var tweenTurnOffLight1 = createTurnOffImageTween(light1);
var tweenTurnOffTitle1 = createTurnOffTitleTween(title1);
// 点亮数据加工
var tweenTurnOnTitle2 = createTurnOnTitleTween(title2);
var tweenTurnOnLight2 = createTurnOnImageTween(light2);
//endregion

//region 数据加工->数据处理
// 小球滑动
var tweenPath2 = createPathTween(ball, clone(POINTS[2]), clone(POINTS[3]));
// 点灭数据加工
var tweenTurnOffTitle2 = createTurnOffTitleTween(title2);
var tweenTurnOffLight2 = createTurnOffImageTween(light2);
// 点亮数据处理
// 点亮标题
// TODO...
var tweenTurnOnTitle3 = createTurnOnTitleTween(title3);
var tweenTurnOnLight3 = createTurnOnImageTween(light3);
//endregion

//region 数据处理->数据应用
// 小球滑动
var tweenPath3 = createPathTween(ball, clone(POINTS[4]), clone(POINTS[5]));
// 点灭数据处理
var tweenTurnOffTitle3 = createTurnOffTitleTween(title3);
var tweenTurnOffLight3 = createTurnOffImageTween(light3);
// 点亮数据应用
var tweenTurnOnTitle4 = createTurnOnTitleTween(title4);
var tweenTurnOnLight4 = createTurnOnImageTween(light4);
//endregion

//region 数据应用->运营管理;
// 小球滑动
var tweenPath4 = createPathTween(ball, clone(POINTS[6]), clone(POINTS[7]));
// 点灭数据应用
var tweenTurnOffTitle4 = createTurnOffTitleTween(title4);
var tweenTurnOffLight4 = createTurnOffImageTween(light4);
// 点亮运营管理
var tweenTurnOnTitle5 = createTurnOnTitleTween(title5);
var tweenTurnOnLight5 = createTurnOnImageTween(light5);
//endregion

//region 运营管理->统计分析
// 小球滑动
var tweenPath5 = createPathTween(ball, clone(POINTS[8]), clone(POINTS[9]));
// 点灭运营管理
var tweenTurnOffTitle5 = createTurnOffTitleTween(title5);
var tweenTurnOffLight5 = createTurnOffImageTween(light5);
// 点亮统计分析
var tweenTurnOnTitle6 = createTurnOnTitleTween(title6);
var tweenTurnOnLight6 = createTurnOnImageTween(light6);
//endregion

//region 统计分析->数据采集
// 小球滑动
var tweenPath6 = createPathTween(ball, clone(POINTS[10]), clone(POINTS[11]));
// 点灭统计分析
var tweenTurnOffTitle6 = createTurnOffTitleTween(title6);
var tweenTurnOffLight6 = createTurnOffImageTween(light6);
// 点亮数据采集
var tweenTurnOnTitle1 = createTurnOnImageTween(title1);
var tweenTurnOnLight1 = createTurnOnImageTween(light1);
//endregion
//endregion

//region 放大概览背景
var tweenScaleOutOverview = new TWEEN.Tween({ x: 1 })
  .to({ x: 3 }, DURATION.scaleOutOverview)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onStart(function () {
    overviewBg.style.opacity = 0;
    light1.style.opacity = 0;
    light2.style.opacity = 0;
    light3.style.opacity = 0;
    light4.style.opacity = 0;
    light5.style.opacity = 0;
    light6.style.opacity = 0;
  })
  .onUpdate(function() {
    overview.style.webkitTransform = 'scale(' + this.x + ', ' + this.x + ')';
  })
  .onComplete(function () {
    overview.style.opacity = 0;
  });
//endregion

//region 缩小概览背景
var tweenScaleInOverview = new TWEEN.Tween({ x: 3 })
  .to({ x: 1 }, DURATION.scaleInOverview)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onStart(function () {
    overview.style.opacity = 1;
  })
  .onUpdate(function() {
    overview.style.webkitTransform = 'scale(' + this.x + ', ' + this.x + ')';
  })
  .onComplete(function () {
    overviewBg.style.opacity = 1;
  });
//endregion

//region 放大详情背景
var tweenScaleOutDetail = new TWEEN.Tween({ x: 0, opacity: 0 })
  .to({ x: 1, opacity: 0.7 }, DURATION.scaleOutDetail)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onStart(function () {
    // overview.style.opacity = 0;
  })
  .onUpdate(function() {
    detail.style.opacity = this.opacity;
    detail.style.webkitTransform = 'scale(' + this.x + ', ' + this.x + ')';
  });
//endregion

//region detail
//region 显示详情1
// 滑入
var tweenIntroSlideIn1 = createIntroSlideInTween(stepIntro1);
var tweenImageSlideIn1 = createImageSlideInTween(stepImage1);
// 滑出
var tweenIntroSlideOut1 = createIntroSlideOutTween(stepIntro1);
var tweenImageSlideOut1 = createImageSlideOutTween(stepImage1);
//endregion

//region 显示详情2
// 滑入
var tweenIntroSlideIn2 = createIntroSlideInTween(stepIntro2);
var tweenImageSlideIn2 = createImageSlideInTween(stepImage2);
// 滑出
var tweenIntroSlideOut2 = createIntroSlideOutTween(stepIntro2);
var tweenImageSlideOut2 = createImageSlideOutTween(stepImage2);
//endregion

//region 显示详情3
// 滑入
var tweenIntroSlideIn3 = createIntroSlideInTween(stepIntro3);
var tweenImageSlideIn3 = createImageSlideInTween(stepImage3);
// 滑出
var tweenIntroSlideOut3 = createIntroSlideOutTween(stepIntro3);
var tweenImageSlideOut3 = createImageSlideOutTween(stepImage3);
//endregion

//region 显示详情4
// 滑入
var tweenIntroSlideIn4 = createIntroSlideInTween(stepIntro4);
var tweenImageSlideIn4 = createImageSlideInTween(stepImage4);
// 滑出
var tweenIntroSlideOut4 = createIntroSlideOutTween(stepIntro4);
var tweenImageSlideOut4 = createImageSlideOutTween(stepImage4);
//endregion

//region 显示详情5
// 滑入
var tweenIntroSlideIn5 = createIntroSlideInTween(stepIntro5);
var tweenImageSlideIn5 = createImageSlideInTween(stepImage5);
// 滑出
var tweenIntroSlideOut5 = createIntroSlideOutTween(stepIntro5);
var tweenImageSlideOut5 = createImageSlideOutTween(stepImage5);
//endregion

//region 显示详情6
// 滑入
var tweenIntroSlideIn6 = createIntroSlideInTween(stepIntro6);
var tweenImageSlideIn6 = createImageSlideInTween(stepImage6);
// 滑出
var tweenIntroSlideOut6 = createIntroSlideOutTween(stepIntro6);
var tweenImageSlideOut6 = createImageSlideOutTween(stepImage6);
//endregion
//endregion

//region 缩小详情背景
var tweenScaleInDetail = new TWEEN.Tween({ x: 3 })
  .to({ x: 0 }, DURATION.scaleInDetail)
  // .easing(TWEEN.Easing.Elastic.InOut)
  .onStart(function () {
  })
  .onUpdate(function() {
    detail.style.webkitTransform = 'scale(' + this.x + ', ' + this.x + ')';
  })
  .onComplete(function () {
  });
//endregion

tweenPath1.chain(tweenTurnOffLight1, tweenTurnOffTitle1, tweenTurnOnTitle2, tweenTurnOnLight2);
tweenTurnOnLight2.chain(tweenPath2);
tweenPath2.chain(tweenTurnOffLight2, tweenTurnOffTitle2, tweenTurnOnTitle3, tweenTurnOnLight3);
tweenTurnOnLight3.chain(tweenPath3);
tweenPath3.chain(tweenTurnOffLight3, tweenTurnOffTitle3, tweenTurnOnTitle4, tweenTurnOnLight4);
tweenTurnOnLight4.chain(tweenPath4);
tweenPath4.chain(tweenTurnOffLight4, tweenTurnOffTitle4, tweenTurnOnTitle5, tweenTurnOnLight5);
tweenTurnOnLight5.chain(tweenPath5);
tweenPath5.chain(tweenTurnOffLight5, tweenTurnOffTitle5, tweenTurnOnTitle6, tweenTurnOnLight6);
tweenTurnOnLight6.chain(tweenPath6);
tweenPath6.chain(tweenScaleOutOverview, tweenScaleOutDetail);
tweenScaleOutDetail.chain(tweenIntroSlideIn1, tweenImageSlideIn1);
tweenImageSlideIn1.chain(tweenIntroSlideOut1, tweenImageSlideOut1);
tweenImageSlideOut1.chain(tweenIntroSlideIn2, tweenImageSlideIn2);
tweenImageSlideIn2.chain(tweenIntroSlideOut2, tweenImageSlideOut2);
tweenImageSlideOut2.chain(tweenIntroSlideIn3, tweenImageSlideIn3);
tweenImageSlideIn3.chain(tweenIntroSlideOut3, tweenImageSlideOut3);

tweenImageSlideOut3.chain(tweenIntroSlideIn4, tweenImageSlideIn4);
tweenImageSlideIn4.chain(tweenIntroSlideOut4, tweenImageSlideOut4);

tweenImageSlideOut4.chain(tweenIntroSlideIn5, tweenImageSlideIn5);
tweenImageSlideIn5.chain(tweenIntroSlideOut5, tweenImageSlideOut5);

tweenImageSlideOut5.chain(tweenIntroSlideIn6, tweenImageSlideIn6);
tweenImageSlideIn6.chain(tweenIntroSlideOut6, tweenImageSlideOut6);
tweenImageSlideOut6.chain(tweenScaleInDetail, tweenScaleInOverview);
tweenScaleInOverview.chain(tweenPath1);



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

function createTurnOnImageTween(element) {
  return createLightenTween(element, 0, 1, DURATION.turnOn);
}

function createTurnOffImageTween(element) {
  return createLightenTween(element, 1, 0, DURATION.turnOff);
}

function createTurnOnTitleTween(element) {
  return createLightenTween(element, 0.2, 1, DURATION.turnOn);
}

function createTurnOffTitleTween(element) {
  return createLightenTween(element, 1, 0.2, DURATION.turnOff);
}

function createIntroSlideInTween(element) {
  return new TWEEN.Tween({ x: 0 })
    .to({ x: 100 }, DURATION.slideInText)
    // .easing(TWEEN.Easing.Elastic.InOut)
    .onStart(function () {
      element.style.opacity = 1;
    })
    .onUpdate(function() {
      element.style.webkitTransform = 'translateX(' + this.x + 'px)';
    });
}

function createIntroSlideOutTween(element) {
  return new TWEEN.Tween({ x: 100 })
    .to({ x: -800 }, DURATION.slideOutText)
    // .easing(TWEEN.Easing.Elastic.InOut)
    .delay(DURATION.remain)
    .onUpdate(function() {
      element.style.webkitTransform = 'translateX(' + this.x + 'px)';
    });
}

function createImageSlideInTween(element) {
  return new TWEEN.Tween({ x: -200 })
    .to({ x: 0 }, DURATION.slideInImage)
    // .easing(TWEEN.Easing.Elastic.InOut)
    .onStart(function () {
      element.style.opacity = 1;
    })
    .onUpdate(function() {
      element.style.webkitTransform = 'translateY(' + this.x + 'px)';
    });
}

function createImageSlideOutTween(element) {
  return new TWEEN.Tween({ x: 100 })
    .to({ x: -1000 }, DURATION.slideOutImage)
    // .easing(TWEEN.Easing.Elastic.InOut)
    .delay(DURATION.remain)
    .onUpdate(function() {
      element.style.webkitTransform = 'translateY(' + this.x + 'px)';
    });
}