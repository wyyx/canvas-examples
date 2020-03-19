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
System.register("image", [], function (exports_2, context_2) {
    "use strict";
    var aaa, windowWidth, windowHeight, maxEdgeSizeOfWindow, widthIsMaxEdgeOfWindow, image, imageIsLoaded, canvas, context;
    var __moduleName = context_2 && context_2.id;
    function updateCanvas(offsetX, offsetY, scale) {
        if (imageIsLoaded) {
            render();
        }
        else {
            image.onload = function () {
                imageIsLoaded = true;
                render();
            };
            image.src = '../images/a.jpg';
        }
    }
    function render() {
        var imageWidth = image.width;
        var imageHeight = image.height;
        var widthIsMaxEdgeOfImage = imageWidth - imageHeight > 0;
        // Rotate 90 degree
        if (widthIsMaxEdgeOfWindow !== widthIsMaxEdgeOfImage) {
            console.log('max edge is in the same direction', false);
            canvas.width = imageHeight;
            canvas.height = imageWidth;
            var maxEdgeSizeOfCanvas = Math.max(canvas.width, canvas.height);
            updateCanvasSize(canvas, maxEdgeSizeOfCanvas);
            context.save();
            context.rotate((90 * Math.PI) / 180);
            context.drawImage(image, 0, -canvas.width, canvas.height, canvas.width);
            context.restore();
        }
        else {
            console.log('max edge is in the same direction', true);
            canvas.width = imageWidth;
            canvas.height = imageHeight;
            var maxEdgeSizeOfCanvas = Math.max(canvas.width, canvas.height);
            updateCanvasSize(canvas, maxEdgeSizeOfCanvas);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    }
    // resize canvas
    function updateCanvasSize(canvas, maxEdgeSizeOfCanvas, scale) {
        // make sure canvas max edge equals window max edge
        var factor = maxEdgeSizeOfWindow / maxEdgeSizeOfCanvas;
        canvas.width = canvas.width * factor;
        canvas.height = canvas.height * factor;
        // make sure another edge in window
        if (widthIsMaxEdgeOfWindow) {
            if (canvas.height > windowHeight) {
                var factor_1 = windowHeight / canvas.height;
                canvas.width = canvas.width * factor_1;
                canvas.height = canvas.height * factor_1;
            }
        }
        else {
            if (canvas.width > windowWidth) {
                var factor_2 = windowWidth / canvas.width;
                canvas.width = canvas.width * factor_2;
                canvas.height = canvas.height * factor_2;
            }
        }
        // scale overall
        if (scale || scale === 0) {
            canvas.width = canvas.width * scale;
            canvas.height = canvas.height * scale;
        }
    }
    return {
        setters: [],
        execute: function () {
            exports_2("aaa", aaa = 'edrhxser');
            // get window data
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            maxEdgeSizeOfWindow = Math.max(windowWidth, windowHeight);
            widthIsMaxEdgeOfWindow = windowWidth - windowHeight > 0;
            image = new Image();
            imageIsLoaded = false;
            canvas = document.getElementById('canvas');
            context = canvas.getContext('2d');
            window.onload = function () {
                window.onresize = function () {
                    // udpate window data
                    windowWidth = window.innerWidth;
                    windowHeight = window.innerHeight;
                    maxEdgeSizeOfWindow = Math.max(windowWidth, windowHeight);
                    widthIsMaxEdgeOfWindow = windowWidth - windowHeight > 0;
                    updateCanvas();
                };
                updateCanvas();
            };
        }
    };
});
System.register("main", ["image"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvYmFzaWMudHMiLCJqcy9pbWFnZS50cyIsImpzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQWVBLFNBQWdCLE1BQU0sQ0FBQyxHQUE2QjtRQUNsRCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRS9CLGtCQUFrQjtRQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1QyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQTtRQUN4QixHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNuQixHQUFHLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixHQUFHLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixrQkFBa0I7UUFFbEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ1osQ0FBQzs7Ozs7WUE1QkQsaUJBQWEsR0FBRyxHQUFHLFFBQVEsRUFBQTtZQUV2QixZQUFZLEdBQUcsSUFBSSxDQUFBO1lBQ25CLGFBQWEsR0FBRyxHQUFHLENBQUE7WUFFdkIsTUFBTSxDQUFDLE1BQU0sR0FBRztnQkFDZCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQTtnQkFDckUsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFdkMsTUFBTSxD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QUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFdkMsTUFBTSxDQUFDLE1BQU0sR0FBRztnQkFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO29CQUNoQixxQkFBcUI7b0JBQ3JCLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO29CQUMvQixZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQTtvQkFDakMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7b0JBQ3pELHNCQUFzQixHQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFBO29CQUV2RCxZQUFZLEVBQUUsQ0FBQTtnQkFDaEIsQ0FBQyxDQUFBO2dCQUVELFlBQVksRUFBRSxDQUFBO1lBQ2hCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhYWEgPSAnc3plcmdoJ1xuXG5sZXQgV0lORE9XX1dJRFRIID0gMTAyNFxubGV0IFdJTkRPV19IRUlHSFQgPSA3Njhcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgY2FudmFzLndpZHRoID0gMTAwMFxuICBjYW52YXMuaGVpZ2h0ID0gMTAwMFxuXG4gIHJlbmRlcihjb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgMTAwMClcblxuICAvLyBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYygzMDAsIDMwMCwgMTAwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpXG4gIGN0eC5hcmMoMzAwLCAzMDAsIDIwMCwgMCwgMiAqIE1hdGguUEksIHRydWUpXG4gIGN0eC5zaGFkb3dDb2xvciA9ICdibHVlJ1xuICBjdHguc2hhZG93Qmx1ciA9IDMwXG4gIGN0eC5zaGFkb3dPZmZzZXRYID0gMTBcbiAgY3R4LnNoYWRvd09mZnNldFkgPSAxMFxuICAvLyBjdHguY2xvc2VQYXRoKClcblxuICBjdHguZmlsbCgpXG59XG4iLCJleHBvcnQgY29uc3QgYWFhID0gJ2Vkcmh4c2VyJ1xuXG4vLyBnZXQgd2luZG93IGRhdGFcbmxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5sZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5sZXQgbWF4RWRnZVNpemVPZldpbmRvdyA9IE1hdGgubWF4KHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpXG5sZXQgd2lkdGhJc01heEVkZ2VPZldpbmRvdyA9IHdpbmRvd1dpZHRoIC0gd2luZG93SGVpZ2h0ID4gMFxuY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxubGV0IGltYWdlSXNMb2FkZWQgPSBmYWxzZVxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB1ZHBhdGUgd2luZG93IGRhdGFcbiAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgbWF4RWRnZVNpemVPZldpbmRvdyA9IE1hdGgubWF4KHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpXG4gICAgd2lkdGhJc01heEVkZ2VPZldpbmRvdyA9IHdpbmRvd1dpZHRoIC0gd2luZG93SGVpZ2h0ID4gMFxuXG4gICAgdXBkYXRlQ2FudmFzKClcbiAgfVxuXG4gIHVwZGF0ZUNhbnZhcygpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbnZhcyhvZmZzZXRYPzogbnVtYmVyLCBvZmZzZXRZPzogbnVtYmVyLCBzY2FsZT86IG51bWJlcikge1xuICBpZiAoaW1hZ2VJc0xvYWRlZCkge1xuICAgIHJlbmRlcigpXG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgaW1hZ2VJc0xvYWRlZCA9IHRydWVcbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICAgIGltYWdlLnNyYyA9ICcuLi9pbWFnZXMvYS5qcGcnXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjb25zdCBpbWFnZVdpZHRoID0gaW1hZ2Uud2lkdGhcbiAgY29uc3QgaW1hZ2VIZWlnaHQgPSBpbWFnZS5oZWlnaHRcbiAgY29uc3Qgd2lkdGhJc01heEVkZ2VPZkltYWdlID0gaW1hZ2VXaWR0aCAtIGltYWdlSGVpZ2h0ID4gMFxuXG4gIC8vIFJvdGF0ZSA5MCBkZWdyZWVcbiAgaWYgKHdpZHRoSXNNYXhFZGdlT2ZXaW5kb3cgIT09IHdpZHRoSXNNYXhFZGdlT2ZJbWFnZSkge1xuICAgIGNvbnNvbGUubG9nKCdtYXggZWRnZSBpcyBpbiB0aGUgc2FtZSBkaXJlY3Rpb24nLCBmYWxzZSlcblxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlSGVpZ2h0XG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlV2lkdGhcbiAgICBjb25zdCBtYXhFZGdlU2l6ZU9mQ2FudmFzID0gTWF0aC5tYXgoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIHVwZGF0ZUNhbnZhc1NpemUoY2FudmFzLCBtYXhFZGdlU2l6ZU9mQ2FudmFzKVxuXG4gICAgY29udGV4dC5zYXZlKClcbiAgICBjb250ZXh0LnJvdGF0ZSgoOTAgKiBNYXRoLlBJKSAvIDE4MClcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgLWNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgY2FudmFzLndpZHRoKVxuICAgIGNvbnRleHQucmVzdG9yZSgpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ21heCBlZGdlIGlzIGluIHRoZSBzYW1lIGRpcmVjdGlvbicsIHRydWUpXG5cbiAgICBjYW52YXMud2lkdGggPSBpbWFnZVdpZHRoXG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlSGVpZ2h0XG4gICAgY29uc3QgbWF4RWRnZVNpemVPZkNhbnZhcyA9IE1hdGgubWF4KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB1cGRhdGVDYW52YXNTaXplKGNhbnZhcywgbWF4RWRnZVNpemVPZkNhbnZhcylcblxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gIH1cbn1cblxuLy8gcmVzaXplIGNhbnZhc1xuZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2l6ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBtYXhFZGdlU2l6ZU9mQ2FudmFzOiBudW1iZXIsIHNjYWxlPzogbnVtYmVyKSB7XG4gIC8vIG1ha2Ugc3VyZSBjYW52YXMgbWF4IGVkZ2UgZXF1YWxzIHdpbmRvdyBtYXggZWRnZVxuICBsZXQgZmFjdG9yID0gbWF4RWRnZVNpemVPZldpbmRvdyAvIG1heEVkZ2VTaXplT2ZDYW52YXNcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoICogZmFjdG9yXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogZmFjdG9yXG5cbiAgLy8gbWFrZSBzdXJlIGFub3RoZXIgZWRnZSBpbiB3aW5kb3dcbiAgaWYgKHdpZHRoSXNNYXhFZGdlT2ZXaW5kb3cpIHtcbiAgICBpZiAoY2FudmFzLmhlaWdodCA+IHdpbmRvd0hlaWdodCkge1xuICAgICAgY29uc3QgZmFjdG9yID0gd2luZG93SGVpZ2h0IC8gY2FudmFzLmhlaWdodFxuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoICogZmFjdG9yXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodCAqIGZhY3RvclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoY2FudmFzLndpZHRoID4gd2luZG93V2lkdGgpIHtcbiAgICAgIGNvbnN0IGZhY3RvciA9IHdpbmRvd1dpZHRoIC8gY2FudmFzLndpZHRoXG4gICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGggKiBmYWN0b3JcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogZmFjdG9yXG4gICAgfVxuICB9XG5cbiAgLy8gc2NhbGUgb3ZlcmFsbFxuICBpZiAoc2NhbGUgfHwgc2NhbGUgPT09IDApIHtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGggKiBzY2FsZVxuICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogc2NhbGVcbiAgfVxufVxuIiwiLy8gaW1wb3J0ICcuL2Jhc2ljJ1xuaW1wb3J0ICcuL2ltYWdlJ1xuIl19