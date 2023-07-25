const textContainers = document.querySelectorAll(".word");

const defaultScale = 1;
const maxScale = 1.4;
const neighborsScale = 1.2;

textContainers.forEach((textContainer) => {
    const spans = textContainer.querySelectorAll("span");
    const originalScales = Array.from(spans).map(() => defaultScale); // Orijinal boyutları kaydetmek için dizi oluştur

    textContainer.addEventListener("mousemove", (e) => {
        const target = e.target;
        const index = Array.from(spans).indexOf(target);

        spans.forEach((span, i) => {
            let scale = originalScales[i]; // Orijinal boyuta geri dön

            if (i === index) {
                scale = maxScale;
            } else if (i === index - 1 || i === index + 1) {
                scale = neighborsScale;
            }

            span.style.transform = `scaleY(${scale})`;
        });
    });

    textContainer.addEventListener("mouseleave", () => {
        spans.forEach((span, i) => {
            span.style.transform = `scaleY(${originalScales[i]})`; // Orijinal boyuta geri dön
        });
    });
});
