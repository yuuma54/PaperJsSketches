// ここにスケッチ名を指定することができる。
let sketchName = 'スタイル';

// Paper.jsのスタイルについては：http://paperjs.org/reference/style/

// ここでいくつかの描画スタイルを定義して、全体のデフォルトや
// 各々の図形のスタイルとして適用する。
let basicStyle = {
    fillColor: null,
    strokeColor: 'black',
    strokeWidth: 1,
};

let thickLineStyle = {
    fillColor: null,
    strokeColor: 'black',
    strokeWidth: 5,
};

let redFillStyle = {
    fillColor: 'rgb(255,0,0)',
    strokeColor: null
};

let backgroundStyle = {
    fillColor: '#66CCFF',
    strokeColor: null
}

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.onload = function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    // デフォルトのスタイルを指定する。
    project.currentStyle = basicStyle;

    // 背景となる長方形を描く
    let background = Path.Rectangle([0,0], view.viewSize);
    background.style = backgroundStyle;

    // いくつか異なるスタイルの図形を描く。
    Path.Circle([200, 200], 50);

    // 長方形を追加して、スタイルを指定する。
    let rect = Path.Rectangle([300, 300], [100, 50]);
    rect.style = thickLineStyle;

    // このような形でもスタイルを指定することができる。
    Path.Star([100, 300], 7, 50, 75).style = redFillStyle;

    // 画面を描く。
    view.draw();
};