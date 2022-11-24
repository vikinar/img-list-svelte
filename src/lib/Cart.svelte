<script>
    import {searchValue} from "./stores/search.js"
    import {afterUpdate, beforeUpdate} from "svelte";
    export let item

    let found;

    afterUpdate(() => {
        found = (item.title.includes($searchValue) && $searchValue !== '')
    })
</script>

<section class={`cart ${found && 'cart_found'}`}>
    <img src={item.url} alt="">
    <article class="cart_description">
        <p class="{`${found && 'cart_found'}`}">{item.title}</p>
    </article>
</section>

<style lang="scss">
  .cart{
    border: 1px solid #ddd;
    border-radius: 1.5rem;

    &_found{
      background: lightcyan;
      color: darkblue;
      font-weight: bold;
    }

    img{
      border-radius: 1.5rem 1.5rem 0 0;
    }

    &_description{
        padding: 2rem 1rem;
        p{
          text-overflow: ellipsis;
          word-wrap: break-word;
          overflow: hidden;
        }
    }
  }
</style>