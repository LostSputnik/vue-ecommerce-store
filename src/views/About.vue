<template>
    <div class="about-page">
        <div class="left">
            <va-image src="https://images.pexels.com/photos/8806013/pexels-photo-8806013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <p>from kafka with Love</p>
        </div>
        <div class="right">
            <p>“...the secret of the Great Stories is that they have no secrets. The Great Stories are the ones you have heard and want to hear again. The ones you can enter anywhere and inhabit comfortably. They don’t deceive you with thrills and trick endings. They don’t surprise you with the unforeseen. They are as familiar as the house you live in. Or the smell of your lover’s skin. You know how they end, yet you listen as though you don’t. In the way that although you know that one day you will die, you live as though you won’t. In the Great Stories you know who lives, who dies, who finds love, who doesn’t. And yet you want to know again. That is their mystery and their magic.”</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.about-page {
    min-height: 640px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    text-align: left;
    margin: 20px auto;
}

.right p{
    line-height: 2;
}

.left p{
    line-height: 2.5;
    font-size: 1.7rem;
    font-weight: 500;
}

h1 {
    padding: 10px;
    font-weight: 100;
}


</style>