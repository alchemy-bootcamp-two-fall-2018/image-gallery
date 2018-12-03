<template>
    <header>
        <nav>
            <RouterLink to="/" class="link"> HOME</RouterLink>
            <RouterLink to="/" class="link">
                <img src="https://diylogodesigns.com/wp-content/uploads/2016/06/nba-logo-transparent-png-logo-download-768x768.png">
            </RouterLink>
            <RouterLink to="/teams" class="link">TEAMS</RouterLink>
        </nav>
    </header>
</template>

<script>
// import TeamsApi from './components/services/teamsApi.js';

export default {
    props: {
        teams: Array
    },
};
</script>

<style style lang="postcss" scoped>
header{
    margin: 0;
    padding: 0;
}
nav {
    background: #1D428A;
    color: white;
    /* font-family:  */
    height: 54px;
    width: 100vw;
    position: fixed;
    top: 0;
    margin: 0;
    padding: 0;
    display:flex;
    justify-content: center;
}
img {
    max-width: 50px;
    height: auto;
}

nav a {
    color: white;
    &:hover,
    &:active {
        background-color: indianred;
        cursor: pointer;
    } 
}
.link {
    display: flex;
    margin-right: 20px;
}
</style>

