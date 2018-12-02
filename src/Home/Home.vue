Birds descended from a type of dinosaurs known as theropods.
Pterodactyls are not dinosaurs, they were flying reptiles that lived during the age of dinosaurs but by definition they do not fall into the same category. The same goes for water based reptiles such as Plesiosaurs.
<template>
<section>
    <div>
    <h1>Home</h1>
    <p>Check out your favorite dinos! We've got all your favorites from <span>Jurassic Park</span> and <span>Land Before Time</span> or 
    you can add your own!</p>
    </div>
    <div id="fun-facts">
        <h3>Dino Facts!</h3>
        <span><a href="http://www.sciencekids.co.nz/sciencefacts/dinosaurs.html">Source</a></span>
        <ul>
            <li>
                Despite being long extinct, dinosaurs are frequently featured in the media. One of the more memorable examples of this is Michael Crichton’s 1990 book Jurassic Park. Adapted to movie in 1993, the story features cloned dinosaurs brought to life with the help of DNA found in mosquitoes trapped in amber.
            </li>
            <li>
                To help fight meat eaters such as the Allosaurus or Spinosaurus, many plant eaters had natural weapons at their disposal. Examples of this include the spikes on the tail of the Stegosaurus and the three horns attached to the front of the Triceratops’s head shield.
            </li>
            <li>
                Rather than being carnivores (meat eaters), the largest dinosaurs such as the Brachiosaurus and Apatosaurus were actually herbivores (plant eaters).
            </li>
            <li>
                A person who studies dinosaurs is known as a paleontologist.
            </li>
            <li>
                The first dinosaur to be formally named was the Megalosaurus, back in 1824.
            </li>
            <li>
                Scientists believe that the event leading to the extinction may have been a massive asteroid impact or huge volcanic activity. Events such as these could have blocked out sunlight and significantly changed the Earth’s ecology.
            </li>
            <li>
I               t is believed that dinosaurs lived on Earth until around 65 million years ago when a mass extinction occurred.
            </li>
            <li>
                The time period from 250 million years ago until around 65 million years ago is known as the Mesozoic Era. It is often referred to as the Age of the Dinosaurs because most dinosaurs developed and became extinct during this time.
            </li>
            <li>
                Dinosaurs ruled the Earth for over 160 million years, from the Triassic period around 230 million years ago through the Jurassic period and until the end of the Cretaceous period around 65 million years ago.
            </li>
            <li>
                The word dinosaur come s from the Greek language and means ‘terrible lizard’. The word was coined by English paleontologist Richard Owen in 1842 and was meant to refer to Dinosaurs impressive size rather than their scary appearance.
            </li>
            <li>
                <a href="https://www.factretriever.com/dinosaur-facts">Learn more about your favorite dino pals!</a>
            </li>
        </ul>
    </div>
</section>
</template>

<script>
export default {

};
</script>

<style scoped>
section {
    background-image: url('http://www.dinopit.com/wp-content/uploads/2012/07/dinosaur-skeleton-wallpaper.jpg');
    height: 100vh;
    background-position: top right;
}
div {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    margin: auto;
    width: 50vw;
    font-size: 1.25em;
    text-align: center;
}
span {
    font-style: italic;
}
p {
    padding: 10px;
    margin: 20px;
}
#fun-facts ul {
    height: 40vh;
    overflow: scroll;
}
li {
    font-size: 16px;
    text-align: left;
}
</style>
