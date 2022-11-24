import { writable, derived } from 'svelte/store';

export const value = writable(undefined);

export const searchValue = derived(
    value,
    $value => $value
);