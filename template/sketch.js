// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// Two.jsの動作をカスタマイズするパラメータをこのオブジェクトで
// 指定する。
const parameters = {
    fullscreen: false, // 全画面表示？
    autostart: true, // アニメーションは自動再生？
    type: Two.Types.svg // どの様にレンダリングするか？ここで使える値は：Two.Types.svg, Two.Types.canvas, Two.Types.webgl
};

// スケッチをどのHTML要素の中に表示するか。
const parentElement = document.getElementById('container');

// 新しいスケッチを用意して、HTMLドキュメントに追加（append）する。
const two = new Two(parameters).appendTo(parentElement);

// ここでキャンバスのサイズを指定する。
two.width = 500;
two.height = 500;

// ============================================================
// これからスケッチの本文を書く。

// 背景色を指定するために、画面を覆う長方形を描く。
const background = two.makeRectangle(two.width * 0.5, two.height * 0.5, two.width, two.height);

// 正円を描くためのパラメータ。
const radius = 20; // 半径
const x = two.width * 0.5;
const y = two.height * 0.5;

// 正円を指定のパラメータで生成する。
const circle = two.makeCircle(x, y, radius);

// 生成したオブジェクトをカスタマイズする。
circle.fill = '#588B8B'; // HEXで色を指定することができる。
circle.stroke = 'rgb(200, 85, 61)'; // RGBも使える。
circle.linewidth = 8; // 線幅

background.fill = '#FFD5C2';
background.noStroke(); // 線を描かないことをこの呼び出しで指定する。

// 最後に必ずこの呼び出しで画面の更新して、描画を実行する。
two.update();