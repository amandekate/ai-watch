import { DetectedObject } from "@tensorflow-models/coco-ssd";

// mirrored, predictions, canvasRef.current?.getContext('2d')
export function drawOnCanvas(
    mirrored: boolean,
    predictions: DetectedObject[],
    ctx: CanvasRenderingContext2D | null | undefined
) {
    predictions.forEach((detectedObject: DetectedObject) => {
        const { class: name, bbox, score } = detectedObject;
        const [x, y, width, height] = bbox;

        if (ctx) {
            ctx.beginPath();

            // styling
            ctx.fillStyle = name === "person" ? "#FF0F0F" : "#00B612";
            ctx.globalAlpha = 0.4;

            ctx.roundRect(x, y, width, height, 8)

            //draw stroke or fill
            ctx.fill()

            //text styling
            ctx.font = "12px Courier new"
            ctx.globalAlpha = 1
            ctx.fillText(name, x, y)
        }
    })
}