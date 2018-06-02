///SSS
function DonutGraph(x, y, radius, thickness = radius / 3 * 2) {
    this.PIGraph = document.getElementById("PIGraph");
    this.centerX = PIGraph.width / 2;
    this.centerY = PIGraph.height / 2;
    this.x = x + this.centerX;
    this.y = -y + this.centerY;
    this.outerRadius = radius;
    this.innerRadius = radius - thickness;
    this.start = -1 / 3 * Math.PI;
    this.end = (parseInt)(localStorage.duration) * 2.0 * Math.PI / 30.0;
    console.log(this.end);
    this.animationDuration = 1;
    this.fillColor = "#000000";
    this.strokeColor = "#000000";
    this.setStrokeColor = function (Color = this.strokeColor) {
        context = PIGraph.getContext("2d");
        context.strokeStyle = Color;
    }
    this.setFillColor = function (Color = this.fillColor) {
        context = PIGraph.getContext("2d");
        context.fillStyle = Color;
    }
    this.setFont = function (Font) {
        context = PIGraph.getContext("2d");
        context.font = Font;
    }
    this.caption = function (String, x, y) {
        context = PIGraph.getContext("2d");
        context.fillText(String, x, y);
    }
    /*
    this.animate = function (end = this.end) {
        this.velocity = Math.PI / 150;

        function animation() {
            if (momentAngle >= end) {
                draw();
                stroke();
                clearInterval("loop");
            }
            else {
                momentAngle += velocity;
                draw(momentAngle);
                stroke();
            }
        }

        var loop = setInterval(animation(), 1);

    }
    */
    this.stroke = function () {
        var context = PIGraph.getContext("2d");
        //moveTo(outerRadius * Math.cos(- 1 * this.start), outerRadius * Math.sin(-1 * this.start));

        moveTo(0, 0);
        context.arc(this.x, this.y, this.outerRadius, this.start, 2 * Math.PI);
        moveTo(0, 0);
        context.arc(this.x, this.y, this.innerRadius, this.start, 2 * Math.PI);
        context.stroke();
        context.save();
    }
    this.moveTo = function (x, y) {
        moveTO(x + centerX, y + centerY);
    }
    this.draw = function (end = this.end) {
        if (PIGraph) {
            var context = PIGraph.getContext("2d");
            //moveTo(outerRadius * Math.cos(- 1 * this.start), outerRadius * Math.sin(-1 * this.start));
            moveTo(0, 0);
            context.clearRect(0, 0, 1600, 900);
            context.arc(this.x, this.y, this.outerRadius, this.start, end + this.start, false);
            context.arc(this.x, this.y, this.innerRadius, end + this.start, this.start, true);
            context.closePath();
            context.fill();
        }
    }
}
function showPIGraph() {
    var currentData = new DonutGraph(0, 0, 350);
    currentData.setFillColor("lightskyblue");
    currentData.draw();

    currentData.setStrokeColor("#0000FF");
    currentData.stroke();
    currentData.setFont("60px Gothic");
    currentData.setFillColor("black");
    currentData.caption(localStorage.duration + " / 30", currentData.x - 95, currentData.y + 25);

}
function BarGraph(x, y, value, rate) {
    this.Graph = document.getElementById("BarGraph");
    this.x = x;
    this.y = y;
    this.value = 600 * value / rate;
    console.log(rate);
    this.thickness = 20;
    this.barColor = "blue";
    this.fontColor = "black";
    this.caption = function (num) {
        var caption = title(num);
        var context = this.Graph.getContext("2d");
        context.fillStyle = this.fontColor;
        context.font ="20px Gothic"
        context.fillText(caption, this.x, this.y);
    }
    this.draw = function () {
        var context = this.Graph.getContext("2d");
        context.fillStyle = this.barColor;
        context.fillRect(this.x + 70, this.y - this.thickness, this.value, this.thickness);
    }
}
function title(num) {
    switch (num) {
        case 0: return "º¹±Ù";
        case 1: return '¾î±ú'
        case 2: return 'µî±ÙÀ°';
        case 3: return "Àü½Å";
        default: return;
    }
}
function showBarGraph() {
    var list = new Array(4);
    var arr = new Array();
    arr = localStorage.total.split(":");
    var MAX = (parseInt)(arr[0]) + (parseInt)(arr[1]) + (parseInt)(arr[2]) + (parseInt)(arr[3]);
    console.log(MAX);
    for (var i = 0; i < 4; i++) {
        list[i] = new BarGraph(50, 50 + 100 * i, arr[i],MAX);
        list[i].draw();
        list[i].caption(i);
    }

}
function show() {
    showBarGraph();
    showPIGraph();
}