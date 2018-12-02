<template>
    <div class="welcome-image">
    <p class="welcome"> Welcome to our image gallery. Please click on Albums to view some beautiful pictures! </p>
        <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53b711edbf0f887b5de376f91052d8f8&auto=format&fit=crop&w=800&q=60">
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
