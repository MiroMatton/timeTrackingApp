<script lang="ts">
  import { auth, googleProvider, db } from "../Firebase";
  import { authState } from "rxfire/auth";
  import Home from "./components/Home.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import Form from "./components/Form.svelte";

  let user;
  let daily;
  let showForm = false;

  const today = new Date();

  const unsubscribe = authState(auth as any).subscribe((u) => init(u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  async function init(u) {
    user = u;
    if (u) {
      let snapshot = await db
        .collection("users")
        .doc(user.uid)
        .collection("activities")
        .doc(today.toDateString())
        .get();
      let data = snapshot.data();
      if (data) {
        daily = data;
      } else {
        daily = null;
        showForm = true;
      }
    }
  }
</script>

<main>
  {#if user && daily}
    <Dashboard
      displayName={user.displayName}
      photoURL={user.photoURL}
      {daily}
      on:click={() => auth.signOut()}
    />
  {:else if user && showForm}
    <Form bind:daily {user} {today} />
  {:else}
    <Home on:click={login} />
  {/if}
</main>

<style lang="scss">
  :global(:root) {
    --White: #fff;
    --Orange: hsl(15, 100%, 70%);
    --SoftBlue: hsl(195, 74%, 62%);
    --LightRed: hsl(348, 100%, 68%);
    --LimeGreen: hsl(145, 58%, 55%);
    --Violet: hsl(264, 64%, 52%);
    --SoftOrange: hsl(43, 84%, 65%);
    --VeryDarkBlue: hsl(226, 43%, 10%);
    --DarkBlue: hsl(235, 46%, 20%);
    --DesaturatedBlue: hsl(235, 45%, 61%);
    --PaleBlue: hsl(236, 100%, 87%);
    --Mobile: 560px;
  }

  main {
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    overflow: auto;
    @media (min-width: --Mobile) {
      width: 100%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: var(--White);
    }
  }
</style>
