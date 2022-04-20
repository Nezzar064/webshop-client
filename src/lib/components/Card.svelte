<script>
    import {onMount} from "svelte";
    export let data;

    let page = 0;
    let cards = data;
    let pagesInTotal = [];
    let cardsOfCurrentPage = [];
    let cardsPerPage = 5;
    $: cardsOfCurrentPage = pagesInTotal.length > 0 ? pagesInTotal[page] : [];

    const pagination = (data) => {
        const pages = Math.ceil(data.length / cardsPerPage);
        const paginatedData = Array.from({length: pages}, (_, i) => {
            const start = i * cardsPerPage;
            return data.slice(start, start + cardsPerPage);
        });
        pagesInTotal = [...paginatedData];
    };
    const setPage = (_page) => {
        if (_page >= 0 && _page < pagesInTotal.length) {
            page = _page;
        }
    };
    onMount(() => {
        pagination(cards);
    });
    const preloadImg = async (src) => {
        const resp = await fetch(src);
        const blob = await resp.blob();
        return new Promise((resolve, reject) => {
            let fr = new FileReader();
            fr.readAsDataURL(blob);
            fr.onload = () => resolve(fr.result);
            fr.onerror = (err) => reject(JSON.stringify(err));
        });
    };
</script>


{#each Object.values(cardsOfCurrentPage) as card}
    <div class="card w-80 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
        <div class="card-body">
            <h2 class="card-title">

            </h2>
            <p></p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
            </div>
        </div>
    </div>
{/each}



<nav class="pagination" aria-label="pagination">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="pagination-previous" on:click={() => setPage(page - 1)}
    >Previous</a
    >
    <ul class="pagination-list is-centered">
        {#each pagesInTotal as page, i}
            <li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="pagination-link" on:click={() => setPage(i)}
                >{i + 1}</a
                >
            </li>
        {/each}
    </ul>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="pagination-next" on:click={() => setPage(page + 1)}>Next</a>
</nav>
<p><strong>Current Page: {page + 1}</strong></p>