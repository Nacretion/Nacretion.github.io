window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

export function scrollToY(scrollTargetY = 0, speed = 12000, easing = 'easeOutSine') {
    let scrollY = window.scrollY,
        currentTime = 0;

    let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    let easingEquations = {
        easeOutSine: function (pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        // easeInOutSine: function (pos) {
        //     return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        // },
        // easeInOutQuint: function (pos) {
        //     if ((pos /= 0.5) < 1) {
        //         return 0.5 * Math.pow(pos, 5);
        //     }
        //     return 0.5 * (Math.pow((pos - 2), 5) + 2);
        // }
    };

    function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimationFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    tick();
}