function circle(radius: number): Shape {
    let Radius = radius;
    return {
        computeArea: function (): number {
            return Math.PI * Radius * Radius
        }
    }
}

export { circle }
