function square(sideLen: number): Shape {
    let SideLen = sideLen;
    return {
        computeArea: function (): number {
            return SideLen * SideLen
        }
    }
}

export { square }