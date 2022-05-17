// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 700);

    function pickRandom(array) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 1 // 線の幅
    };

    //let backgroundColor = new Color('#fff1f0');
    let backgroundColor = new Color('#000000');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let a = view.viewSize.width * 0.5;
    let b = view.viewSize.height * 0.5;

    let m = view.viewSize.width * 0.5;
    let n = view.viewSize.height * 0.5;

    let count = 270;
    let angle = Math.PI * 0.05;
    let angle2 = Math.PI * 0.05;
    let angle3 = Math.PI * 0.05;
    let length = 0;
    let length2 = 0;
    let length3 = 0;
    let dl = 0.06;
    let dl2 = 0.12;
    let dl3 = 0.2;
    let randomRange = 30;

    let theta = Math.PI * 0.1;

    // let colors = [
    //     '#fff1f0',
    //     '#f7a099',
    //     '#b84f8c',
    //     '#9e4161',
    // ];
    // let colors2 = [
    //     '#fff1f0',
    //     '#e3d4d1',
    //     '#5e3f5a',
    // ];

    let colors = [
        //'#68ed78'
        '#f7ff87'
    ];

    let sizes = [
        3,
        8,
        10,
        15,
        20
    ];

    for (let p = 0; p < view.viewSize.height; p += 40){
        for (let o = 0; o < view.viewSize.width; o += 40){
            let rand_o = Math.random() * randomRange - randomRange * 0.5;
            let rand_p = Math.random() * randomRange - randomRange * 0.5;

            let star = Path.Star([o + rand_o, p + rand_p], 5, pickRandom(sizes), pickRandom(sizes));
            star.fillColor = pickRandom(colors);
        }
    }

    for (let i = 0; i < count * 0.6; i++) {
        m += Math.cos(theta) * length3;
        n += Math.sin(theta) * length3;

        angle3 += Math.PI * 0.0000001;
        theta += angle3;
        length3 += dl3;

        let circle = Path.Circle([m, n], 20);
        circle.fillColor = pickRandom(colors);

    }

    for (let i = 0; i < count; i++) {
        a += Math.cos(theta) * length2;
        b += Math.sin(theta) * length2;

        angle2 += Math.PI * 0.0000001;
        theta += angle2;
        length2 += dl2;

        let rect = Path.Rectangle([a, b], [20, 20]);
        rect.fillColor = pickRandom(colors);
        rect.rotate(45)
    }

    for (let i = 0; i < count * 1.5; i++) {
        
        x += Math.cos(theta) * length;
        y += Math.sin(theta) * length;

        angle += Math.PI * 0.0000001;
        theta += angle;
        length += dl;

        let circle = Path.Circle([x, y], 3);
        circle.fillColor = pickRandom(colors);
    }


    // 画面を描く。
    view.draw();
});