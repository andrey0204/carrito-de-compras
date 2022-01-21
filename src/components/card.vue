<template>
  <div class="card">
    <slot />
  </div>
</template>
<style lang="scss">
.card {
  background-color: #9a9a9a;
  width: 250px;
  border-radius: 5px;
  height: inherit;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 100%;
  }
  .name {
    text-align: center;
    font-size: 20px;
    line-height: 26px;
    color: #efefef;
    font-weight: 500;
    padding: 15px 0;
  }
  .label {
    position: absolute;
    top: 15px;
    left: 0;
    background-color: red;
    color: #efefef;
    padding: 5px 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

}
</style>
