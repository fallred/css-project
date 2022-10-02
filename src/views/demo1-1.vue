<template>
  <div class="g-container">
    <h2>background-attachment: scroll;</h2>
    <div class="g-bgat-scroll">
      <div class="g-content">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>1</p>
      </div>
    </div>

    <h2>background-attachment: local;</h2>
    <div class="g-bgat-local">
      <div class="g-content">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>1</p>
      </div>
    </div>

    <h2>background-attachment: fixed;</h2>
    <div class="g-bgat-fixed">
      <div class="g-content">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>1</p>
      </div>
    </div>

    <ul class="g-final">
      <li>AAAAAAAA AAAA</li>
      <li>BBBBBBBB CCCC</li>
      <li>DDDDDDDD DDDD</li>
      <li>AAAAAAAA AAAA</li>
      <li>BBBBBBBB CCCC</li>
      <li>DDDDDDDD DDDD</li>
      <li>AAAAAAAA AAAA</li>
      <li>BBBBBBBB CCCC</li>
      <li>DDDDDDDD DDDD</li>
      <li>AAAAAAAA AAAA</li>
      <li>BBBBBBBB CCCC</li>
      <li>DDDDDDDD DDDD</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$img: "https://test-files.genshuixue.com/umeng-content-platform/image/c5a90c6a-5257-48ef-b163-5eeecac1bf4b.jpg";

.g-container {
  width: 600px;
  margin: 0px auto;
  padding: 0 0 20px 0;
}

h2 {
  text-align: center;
  padding: 60px 0 10px;
  font-size: 20px;
}

p {
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  color: red;
}

.g-bgat-scroll {
  height: 200px;
  border: 1px solid #000;
  overflow-x: hidden;
  overflow-y: scroll;
  background-image: url($img);
  background-size: cover;
  background-attachment: scroll;
}

.g-bgat-local {
  height: 200px;
  border: 1px solid #000;
  overflow-x: hidden;
  overflow-y: scroll;
  background-image: url($img);
  background-size: 100% cover;
  background-attachment: local;
}

.g-bgat-fixed {
  height: 200px;
  border: 1px solid #000;
  overflow-x: hidden;
  overflow-y: scroll;
  background-image: url($img);
  background-size: 100% cover;
  background-attachment: fixed;
}

li {
  line-height: 24px;
}

ul {
  position: relative;
  margin: auto;
  overflow: auto;
  height: 8em;
  padding: 0.3em 0.5em;
  border: 1px solid silver;
}
.g-final {
  background: linear-gradient(#fff, transparent 100%),
    linear-gradient(rgba(0, 0, 0, 0.5), transparent 100%);
  background-size: 100% 50px, 100% 10px;
  background-repeat: no-repeat;
  background-attachment: local, scroll;
}
</style>
