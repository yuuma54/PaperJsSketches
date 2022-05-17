// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#787878');
    let boxColor1 = new Color('#000000');
    let boxColor2 = new Color('#ffffff');

    let width = 20;
    let tall = 20;
    let gap = 20;

    //背景
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (let i = 0; i < view.viewSize.width; i = i + 40){
        for (let j = 0; j < view.viewSize.height; j = j + 40){
            let box1 = Path.Rectangle([i, j], [width, tall]);
            box1.fillColor = boxColor1;
            let box2 = Path.Rectangle([i + gap, j + gap], [width, tall]);
            box2.fillColor = boxColor2;
        }
    }

    // 画面を描く。
    view.draw();
});