
    let Rectangle = function (x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
        this.render = function () {
            let ctx = document.getElementById('mycanvas').getContext("2d");
            ctx.beginPath();
            ctx.fillStyle =this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.closePath();
        }
    }
    let rectangle = new Rectangle(10, 10, 200, 100,"#000000");
rectangle.render();

 
