const maxShadowDistance = 20;
const maxShadowBlur = 12;
const $body = $("body");
const $text = $("#text");

function mouseMove(event) {
	const pageWidth = $body.width();
	const pageHeight = $body.height();
	const x = (event.clientX / pageWidth) * 2 - 1;
	const y = (event.clientY / pageHeight) * 2 - 1;
	const distance = Math.max(Math.abs(x), Math.abs(y));

	setShadow(x, y, distance);
	setGradient(x, y, distance);
}

function setShadow(x, y, distance) {
	const xShadow = -x * maxShadowDistance;
	const yShadow = -y * maxShadowDistance;
	const shadowBlur = distance * maxShadowBlur + 1;
	const shadowOpacity = (1 - distance) * 0.5 + 0.2;

	$text.css(
		"text-shadow",
		`${xShadow}px ${yShadow}px ${shadowBlur}px hsla(342, 93%, 36%, ${shadowOpacity})`
	);
}

function setGradient(x, y, distance) {
	const lightAngleRadians = Math.atan2(y, x);
	const lightAngle = lightAngleRadians * (180 / Math.PI) - 90;
	const lightDistance = 20 * distance + 280;
    console.log(lightDistance)

	$body.css(
		"background-image",
		`linear-gradient(${lightAngle}deg, 	hsl(173, 73%, 12%) 0%, hsl(174, 90%, 35%) ${lightDistance}%)`
	);
}

$body.mousemove(mouseMove);
