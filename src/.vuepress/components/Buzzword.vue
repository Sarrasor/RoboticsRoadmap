<template>
  <a :href="'http://www.google.com/search?q=' + text + ' ' + search_postfix" class="buzzword">{{text}}</a>
</template>

<script>
export default 
{
  name: 'Buzzword',
  props: 
  {
    text: 
    {
      type: String,
      required: true,
    },

    search_postfix:
    {
      type: String,
      default: '',
      required: false,
    }
  }
}
</script>

<style lang="stylus" scoped>
.buzzword
  display inline-block
  font-size 14px
  font-weight: bold
  margin 5px 5px
  border-radius 20px
  border-style solid
  border-width 2px
  border-color $accentColor
  padding 10px 20px
  color $textColor
  background-color white

  &:hover
      background-color: $accentColor
      color: #fff
</style>