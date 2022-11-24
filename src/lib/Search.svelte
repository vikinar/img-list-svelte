<script>
    import {value} from "./stores/search.js";

    const changeValue = (event) => {
        const updateVal = event.target.value;
        $value = updateVal
    }

</script>

<section class="search">
    <label for="search">Search for a photo</label>
    <input type="text" bind:value={$value} placeholder="Type the title please..." id="search" on:change={changeValue}>
</section>

<style lang="scss">
    .search {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 0;

        label{
            font-weight: bold;
            font-size: 2.4rem;
        }

        input{
            font-size: 2rem;
            border: .1rem solid #ddd;
            border-radius: 1.5rem;
            padding: 1.5rem;
            margin-top: 1.5rem;
        }
    }
</style>