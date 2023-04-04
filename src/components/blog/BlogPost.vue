<template>
    <div class="post-">
        <h1>{{title}}</h1>
        <p>{{description}} |shorten(20)</p>
    </div>
<br>
    <div>
<!--         <img src="../../assets/image/post/1.jpg" alt="imagepost1" style="width: 100%;"  srcset="">
 -->    </div>
</template>

<script>
export default {
    name:"post",
    props:["title","description"]

}
</script>

<style>
.post-{
    background-color: #8d9663;
    padding: 20px;
}
</style>