<script>
    const {data} = $props();
    console.log(data);
</script>
<h1>Teszt</h1>


{data.user.age}


<form method="POST">
    <div class="ui input">
        <input type="text" name="Teszt">

    </div>
    <button class="ui button"> Elküld</button>
</form>