<script lang="ts">
  import GoogleButton from "./GoogleButton.svelte";
</script>

<div class="container">
  <div class="header">
    <div>
      <h1>Want to track your time?</h1>
    </div>
    <div>
      <p>🧐</p>
    </div>
    <div>
      <h2>log in here!</h2>
    </div>
  </div>
  <div class="form">
    <GoogleButton on:click />
  </div>
</div>

<style lang="scss">
  .container {
    width: 60%;
    background-color: var(--DarkBlue);
    border-radius: 1rem;
    display: flex;
    min-height: 60vh;
    margin: 1rem;
  }

  .header {
    color: var(--White);
    border-radius: 1rem;
    background-color: var(--DesaturatedBlue);
    width: 45%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h1 {
      font-weight: 400;
    }

    p {
      font-size: 3rem;
    }
  }

  .form {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      background-color: var(--VeryDarkBlue);
      border-radius: 0.5rem;
      border: hidden;
      color: var(--PaleBlue);
      padding: 0.5rem 2rem;
      margin-top: 0.5rem;
      font-size: 1.5rem;

      &:hover {
        background-color: var(--DesaturatedBlue);
        color: var(--White);
        cursor: pointer;
      }
    }
  }
</style>
