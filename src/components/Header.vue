<template>
    <header>
        <nav>
            <span><RouterLink to="/">HOME</RouterLink></span>
            <span><RouterLink to="/albums">ALBUMS</RouterLink></span> 
            <span><RouterLink to="/about">ABOUT</RouterLink></span> 
        </nav>
    </header>    
</template>

<script>
export default {

};
</script>

<style>
header{
    text-align: center;
    margin:0 auto;
    height:150px;
    background-color: aquamarine;
    
}
span{
    padding: 20px;
    
}

</style>
