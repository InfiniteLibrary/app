<style lang="scss" scoped>
// Variables
$header-height: 10em;
$body-text-size: 1.25em;
// Styles
.content-header {
  height: $header-height;
  text-align: center;
}
.content-header h1 {
  margin: 0;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.content-body {
  font-family: "Freight";
  font-size: $body-text-size;
  line-height: 1.45;
  margin: 0 1em;

  @media(min-width: 48rem) {
    margin: 0 auto;
    max-width: 38rem;
  }
}
.content-body p:first-child {
  margin-top: 0;
}
</style>

<template lang="jade">
.app-content
  .content-header
    h1 {{ message }}
  .content-body
    p.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      consequat maximus dolor, id tempor metus molestie in. Nulla ac velit sed
      mauris venenatis convallis ac a sem. Curabitur condimentum ultricies quam,
      ut finibus metus laoreet ut. Sed ac placerat augue, sed rhoncus lorem.
      Nunc sapien turpis, placerat fermentum quam quis, condimentum rutrum nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec magna
      ultricies enim venenatis commodo.
    p Another paragraph
    p Annnnnd anohter one
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world!"
    }
  }
}
</script>
