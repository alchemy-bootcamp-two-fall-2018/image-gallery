<template>
    <section>
    <h1>
        About the Developers of Fabulous Dogs
    </h1>
    <div class="wrapper">
        <div class="container-aaron">
            <img src="http://www.dogzone.com/images/breeds/american-staffordshire-terrier-puppy.jpg" class="aaron-dog">
            <div class="overlay-aaron">
                <p class="aaron-text">Aaron's favorite dog: American Staffordshire Terrier</p>
            </div>
        </div>
        <div class="container-christina">
            <img src="https://pbs.twimg.com/profile_images/748677687284236289/14nr-AV4_400x400.jpg" class="christina-dog">
            <div class="overlay-christina">
                <p class="christina-text">Christina's favorite dog: A mutt</p>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {

};
</script>

<style scoped>
    .aaron-dog {
        display: block;
        height: 300px;
        width: 100%;
        height: auto;
        filter: grayscale(100%);
    }
    .christina-dog {
        display: block;
        height: 300px;
        width: 100%;
        height: auto;
        filter: grayscale(100%);
    }
    section {
        background-color: lightgray;
    }
    .aaron-text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 40%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 30px;
    }
    .christina-text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 40%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 30px;
    }
    .overlay-aaron {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: black;
    }
    .overlay-christina {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: black;
    }
    .container-aaron:hover .overlay-aaron {
        opacity: 1;
    }
    .container-christina:hover .overlay-christina {
        opacity: 1;
    }
    .container-aaron {
        position: relative;
        width: 25%;
    }
    .container-christina {
        position: relative;
        width: 25%;
    }

    .image {
        display: block;
        width: 100%;
        height: auto;
    }
    .wrapper {
        display: flex;
        justify-content: space-around;
    }
    
</style>
