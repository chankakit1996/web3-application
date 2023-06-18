<template>
  <a id="menu-toggle" class="menu-toggle">
    <span class="menu-toggle-bar menu-toggle-bar--top"></span>
    <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
    <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
  </a>
</template>

<style scoped>
.menu-toggle {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 26px;
  width: 29px;

  &,
  &:hover {
    color: #000;
  }
}

.menu-toggle-bar {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -1px;
  right: 0;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s ease;

  &.menu-toggle-bar--top {
    transform: translate(0, -8px);
  }
  &.menu-toggle-bar--bottom {
    transform: translate(0, 8px);
  }

  .nav-open & {
    &.menu-toggle-bar--top {
      transform: translate(0, 0) rotate(45deg);
    }
    &.menu-toggle-bar--middle {
      opacity: 0;
    }
    &.menu-toggle-bar--bottom {
      transform: translate(0, 0) rotate(-45deg);
    }
  }
}
</style>
