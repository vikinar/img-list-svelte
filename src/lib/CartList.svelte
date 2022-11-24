<script>
    import Cart from "./Cart.svelte";
    import Search from "./Search.svelte";
    import {onMount} from "svelte";

    let items = []
    const _limit = 7

    let getItems = async (start = 0, limit = _limit) => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
            const data = await response.json()
            items = [...items, ...data]
        } catch (e) {
            console.log(e)
        }
    }

    onMount(getItems)
</script>

<div>
    <Search/>
    <div class="cart-list">
        {#each items as item, i}
            <Cart {item} />
            {:else }
            Loading...
        {/each}
    </div>
    <button class='btn' on:click={getItems(items.length, _limit)}>Next</button>
</div>

<style lang="scss">
    .cart-list{
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 2rem;
      @media screen and (max-width: 576px) {
          grid-template-columns: auto;
      }
    }

    .btn{
      padding: 1.5rem 3.5rem;
      color: white;
      background: darkblue;
      margin: 1.5rem 0;
      border-radius: .75rem;
    }
</style>