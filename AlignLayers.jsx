// AlignLayers.jsx
var gapSeconds = 0;

(function () {
    app.beginUndoGroup("Align Layers");

    var comp = app.project.activeItem;
    if (!(comp instanceof CompItem)) {
        alert("アクティブなコンポジションがありません");
        return;
    }

    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length < 2) {
        alert("2つ以上のレイヤーを選択してください");
        return;
    }

    var layers = selectedLayers.slice(); // keep selection order
    var minStartTime = layers[0].startTime;
    for (var i = 1; i < layers.length; i++) {
        if (layers[i].startTime < minStartTime) {
            minStartTime = layers[i].startTime;
        }
    }

    var currentTime = minStartTime;
    for (var i = 0; i < layers.length; i++) {
        layers[i].startTime = currentTime;
        currentTime = layers[i].outPoint + gapSeconds;
    }

    app.endUndoGroup();
})();