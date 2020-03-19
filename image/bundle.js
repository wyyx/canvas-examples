System.register("basic", [], function (exports_1, context_1) {
    "use strict";
    var aaa, WINDOW_WIDTH, WINDOW_HEIGHT;
    var __moduleName = context_1 && context_1.id;
    function render(ctx) {
        ctx.clearRect(0, 0, 1000, 1000);
        // ctx.beginPath()
        ctx.arc(300, 300, 100, 0, 2 * Math.PI, false);
        ctx.arc(300, 300, 200, 0, 2 * Math.PI, true);
        ctx.shadowColor = 'blue';
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        // ctx.closePath()
        ctx.fill();
    }
    exports_1("render", render);
    return {
        setters: [],
        execute: function () {
            exports_1("aaa", aaa = 'szergh');
            WINDOW_WIDTH = 1024;
            WINDOW_HEIGHT = 768;
            window.onload = function () {
                var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');
                canvas.width = 1000;
                canvas.height = 1000;
                render(context);
            };
        }
    };
});
System.register("main", ["basic"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvYmFzaWMudHMiLCJqcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFlQSxTQUFnQixNQUFNLENBQUMsR0FBNkI7UUFDbEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUUvQixrQkFBa0I7UUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDNUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUE7UUFDeEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkIsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7UUFDdEIsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7UUFDdEIsa0JBQWtCO1FBRWxCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNaLENBQUM7Ozs7O1lBNUJELGlCQUFhLEdBQUcsR0FBRyxRQUFRLEVBQUE7WUFFdkIsWUFBWSxHQUFHLElBQUksQ0FBQTtZQUNuQixhQUFhLEdBQUcsR0FBRyxDQUFBO1lBRXZCLE1BQU0sQ0FBQyxNQUFNLEdBQUc7Z0JBQ2QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUE7Z0JBQ3JFLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRXZDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO2dCQUNuQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFFcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhYWEgPSAnc3plcmdoJ1xuXG5sZXQgV0lORE9XX1dJRFRIID0gMTAyNFxubGV0IFdJTkRPV19IRUlHSFQgPSA3Njhcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgY2FudmFzLndpZHRoID0gMTAwMFxuICBjYW52YXMuaGVpZ2h0ID0gMTAwMFxuXG4gIHJlbmRlcihjb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgMTAwMClcblxuICAvLyBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYygzMDAsIDMwMCwgMTAwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpXG4gIGN0eC5hcmMoMzAwLCAzMDAsIDIwMCwgMCwgMiAqIE1hdGguUEksIHRydWUpXG4gIGN0eC5zaGFkb3dDb2xvciA9ICdibHVlJ1xuICBjdHguc2hhZG93Qmx1ciA9IDMwXG4gIGN0eC5zaGFkb3dPZmZzZXRYID0gMTBcbiAgY3R4LnNoYWRvd09mZnNldFkgPSAxMFxuICAvLyBjdHguY2xvc2VQYXRoKClcblxuICBjdHguZmlsbCgpXG59XG4iLCJpbXBvcnQgJy4vYmFzaWMnXG4iXX0=