<template>
  <div class="scroll_down_icon__container">
    <svg
      width="25px"
      height="100%"
      viewBox="0 0 247 390"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 1.5;
            "
    >
      <path
        id="wheel"
        d="M123.359,79.775l0,72.843"
        style="fill: none; stroke: #000; stroke-width: 20px"
      />
      <path
        id="mouse"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        style="fill: none; stroke: #000; stroke-width: 20px"
      />
    </svg>
  </div>
</template>

<script>
export default {
    name: "ScrollDownIcon",
};
</script>

<style lang="scss">
// Stuff that matters.
@keyframes scroll {
	0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(60px);
	}
}

svg #wheel {
	animation: scroll ease 2s infinite;
}

.scroll_down_icon__container {
    text-align: center;
    margin: 30px 0;
}
</style>