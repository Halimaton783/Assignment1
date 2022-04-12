<template>
    <div class="events">
        <p>Events</p> 
           <Events />
    </div>
    <div class="container">   
    </div>
</template>

<script>
import Events from "@/components/Events.vue";

export default {
    data() {
        return {
          
        }
    },
    components: {
        Events,
    },
};
</script>


<style scoped>
    .events {
        display: flex;
        justify-content: top;
        align-items: left;
        width: 100%;
        font-size: 30px;
        color: black;
        font-weight: 100;
        box-sizing: content-box;
        width: 100%;
        height: 50px;
        padding: 20px;
        border: 2px solid grey;
        background: white;
    }


.container {
    color: bisque;
    padding: 100px;
    text-align: left;
}

* {
    box-sizing: border-box;
}

</style>