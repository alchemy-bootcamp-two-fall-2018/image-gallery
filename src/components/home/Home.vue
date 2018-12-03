<template>
    <div class="welcome-image">
    <p class="welcome"> Welcome to our image gallery. Please click on Albums to view some beautiful pictures! </p>
        <img src="https://images.unsplash.com/photo-1529827990740-49b40ca46116?ixlib=rb-0.3.5&s=ebd557e1eac587bb16ca8fbac9731ae4&auto=format&fit=crop&w=1568&q=80" alt="rocky water">
    </div>
</template>


<script>
export default {

};
</script>

<style>
.welcome {
color: white;
background-color: grey;
opacity: 0.7;
font-size: 2rem;
font-weight: 500;
position:absolute;
margin: 30px;
border: 1px;
padding-left: 20px;
padding-right: 20px;
}

.welcome-image {
  display: block;
  max-height: 500px;
  max-width: 1000px;
  overflow: hidden;
}

</style>
