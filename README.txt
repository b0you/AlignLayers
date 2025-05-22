AlignLayers : README
===========================================================

-------------------
概要
-------------------
After Effects用スクリプト「AlignLayers」は、選択した複数のレイヤーを
タイムライン上に順番に並べることができます。

-------------------
内容
-------------------
- AlignLayers.jsx … レイヤーを選択順に並べます。
- AlignLayers_inv.jsx … 選択順の逆に並べます。
- AlignLayersUI.jsx … UIパネルからボタン操作で整列／逆整列を行います。

-------------------
使い方
-------------------
レイヤーをCtrlまたはShiftクリックで複数選択後、各スクリプトを実行します。
**ドラッグによる範囲選択はできません。**

- AlignLayers.jsx / AlignLayers_inv.jsx
AfterEffects内　ファイル > スクリプト > スクリプトファイルを実行　から実行します。
キーボードショートカットに登録もできます。
メモ帳で開いて３行目「var gapSeconds = 0;」の数値を変更してレイヤー間の重なりを指定できます。（デフォルトは0秒）

- AlignLayersUI.jsx
「▶」で選択順に整列します。
「Gap」で重なりの秒数を指定できます。
「Inv.」にチェックすると選択順と逆に整列させます。

-------------------
導入方法
-------------------
ZIP解凍後、以下のフォルダに入れてください。

【Windows】
- JSXスクリプト：  
  `C:\Program Files\Adobe\After Effects <バージョン>\Support Files\Scripts\`
- UIパネル（UI版）：  
  `C:\Program Files\Adobe\After Effects <バージョン>\Support Files\Scripts\ScriptUI Panels\`

【Mac】
- JSXスクリプト：  
  `/Applications/Adobe After Effects <バージョン>/Scripts/`
- UIパネル（UI版）：  
  `/Applications/Adobe After Effects <バージョン>/Scripts/ScriptUI Panels/`

-------------------
ライセンス
-------------------
MIT License - 本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、制限なくソフトウェアを使用、コピー、修正、統合、出版、配布、サブライセンス、または販売する権利、およびソフトウェアを提供された人に同様のことを許可する権利を無償で許可します。
上記の著作権表示および本許諾表示は、ソフトウェアのすべての複製または重要な部分に記載するものとします。
ソフトウェアは「現状のまま」提供されており、いかなる保証もありません。
MITライセンスの詳細は、本ページ末尾に記載しております。

Copyright (c) 2025 bo-you



AlignLayers : README
===========================================================

-------------------
Overview
-------------------
“AlignLayers” is a set of After Effects scripts that allow you to align selected layers sequentially on the timeline.

-------------------
Contents
-------------------
- AlignLayers.jsx – Aligns layers in selection order
- AlignLayers_inv.jsx – Aligns in reverse selection order
- AlignLayersUI.jsx – Allows interactive alignment via button and UI panel

-------------------
How to Use
-------------------
Select layers using Ctrl (Windows) or Cmd (Mac), or Shift for range selection.
**Note: Drag selection does not preserve order and is not supported.**

- AlignLayers.jsx / AlignLayers_inv.jsx:
Run via After Effects menu:  
  `File > Scripts > Run Script File...`  
You can also assign a keyboard shortcut.
You may edit the line `var gapSeconds = 0;` to set spacing between layers (default: 0 seconds).

- AlignLayersUI.jsx:
Click “▶” to align in order.
Set time gap using “Gap”.
Check “Inv.” to reverse the order.

-------------------
Installation
-------------------
After unzipping, place the files as follows:

   [Windows]
   - JSX scripts:  
     `C:\Program Files\Adobe\After Effects <version>\Support Files\Scripts\`
   - ScriptUI panel:  
     `C:\Program Files\Adobe\After Effects <version>\Support Files\Scripts\ScriptUI Panels\`

   [Mac]
   - JSX scripts:  
     `/Applications/Adobe After Effects <version>/Scripts/`
   - ScriptUI panel:  
     `/Applications/Adobe After Effects <version>/Scripts/ScriptUI Panels/`

-------------------
License
-------------------
MIT License

Copyright (c) 2025 bo-you

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
