<template>
  <div>
    <mindmap
      :nodes="nodes"
      :connections="connections"
      :editable="false"
    />
  </div>
</template>

<script>
import map from "./map";

export default 
{
  name: "roadmap",
  data() 
  {
    return { ...map };
  }
};
</script>
