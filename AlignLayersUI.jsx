// AlignLayersUI_checkbox.jsx
(function AlignLayersUI(thisObj) {
    function buildUI(thisObj) {
        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Align Layers", undefined, {resizeable: true});
        myPanel.orientation = "column";
        myPanel.alignChildren = ["fill", "top"];

        var controlGroup = myPanel.add("group");
        controlGroup.orientation = "row";

        var btnAlign = controlGroup.add("button", undefined, "▶︎");
        btnAlign.preferredSize = [65, 24];

        var reverseCheck = controlGroup.add("checkbox", undefined, "Inv.");
        reverseCheck.value = false;

        var gapGroup = myPanel.add("group");
        gapGroup.add("statictext", undefined, "Gap (sec):");
        var gapInput = gapGroup.add("edittext", undefined, "0.0");
        gapInput.characters = 5;

        function alignLayers(isReverseOrder) {
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
            if (isReverseOrder) layers.reverse();

            var gap = parseFloat(gapInput.text) || 0;

            var minStartTime = selectedLayers[0].startTime;
            for (var i = 1; i < selectedLayers.length; i++) {
                if (selectedLayers[i].startTime < minStartTime) {
                    minStartTime = selectedLayers[i].startTime;
                }
            }

            app.beginUndoGroup("Align Layers");

            var currentTime = minStartTime;
            for (var i = 0; i < layers.length; i++) {
                layers[i].startTime = currentTime;
                currentTime = layers[i].outPoint + gap;
            }

            app.endUndoGroup();
        }

        btnAlign.onClick = function () {
            alignLayers(reverseCheck.value);
        };

        myPanel.layout.layout(true);
        return myPanel;
    }

    var panel = buildUI(thisObj);
    if (panel instanceof Window) {
        panel.center();
        panel.show();
    }
})(this);