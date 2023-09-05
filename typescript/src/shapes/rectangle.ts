interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Shape {
    let Width = width;
    let Height = height;
    return {
        computeArea: function (): number {
            return Width * Height;
        }
    }
}




export { Rectangle, newRectangle }
