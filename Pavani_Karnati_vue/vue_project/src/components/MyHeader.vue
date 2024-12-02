<template>
    <div id=headercontainer>
        <h1 id=titlename> {{Heading}} </h1>
    </div>
</template>

<script>
export default{ // Exporting Default Object
    name:'MyHeader',
    props:{ 
        Heading:String,
    }
}
</script>

<style scoped>

#headercontainer{
    text-align: center;
    background-color:#14213d;
    opacity:0.9;
    padding: 4px;
    font-family: 'Times New Roman', sans-serif;
    font-weight:bold;
}

#titlename{
    color:white;
    font-style:oblique;
}
</style>