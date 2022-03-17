<script lang="ts">
  import { db } from "../../Firebase";
  export let daily;
  export let user;
  export let today;

  let work, play, study, exercise, social, selfCare;

  let onClick = async (): Promise<any> => {
    const docRef = db
      .collection("users")
      .doc(user.uid)
      .collection("activities")
      .doc(today.toDateString());

    await docRef.set({
      work,
      play,
      study,
      exercise,
      social,
      selfCare,
    });

    const snapshot = await docRef.get();
    daily = snapshot.data();
  };
</script>

<div class="container">
  <div class="header">
    <div>
      <h1>What did you do today?</h1>
    </div>
    <div>
      <p>🤔</p>
    </div>
    <div>
      <h2>{today.toDateString()}</h2>
    </div>
  </div>
  <div class="form">
    <div class="inputBox">
      <div class="box orange">
        <img src="public/assets/icon-work.svg" alt="work" />
      </div>
      <div class="input">
        <input
          type="number"
          min="0"
          max="24"
          bind:value={work}
          placeholder="work hrs."
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="box blue">
        <img src="public/assets/icon-play.svg" alt="play" />
      </div>
      <div class="input">
        <input
          type="number"
          min="0"
          max="24"
          bind:value={play}
          placeholder="play hrs."
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="box red">
        <img src="public/assets/icon-study.svg" alt="study" />
      </div>
      <div class="input">
        <input
          type="number"
          min="0"
          max="24"
          bind:value={study}
          placeholder="study hrs."
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="box green">
        <img src="public/assets/icon-exercise.svg" alt="Exercise" />
      </div>
      <div class="input">
        <input
          type="number"
          min="0"
          max="24"
          bind:value={exercise}
          placeholder="exercise hrs."
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="box violet">
        <img src="public/assets/icon-social.svg" alt="social" />
      </div>
      <div class="input">
        <input
          type="number"
          min="0"
          max="24"
          bind:value={social}
          placeholder="social hrs."
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="box yellow">
        <img src="public/assets/icon-self-care.svg" alt="self care" />
      </div>
      <div class="input">
        <input
          type="number"
          min="0"
          max="24"
          bind:value={selfCare}
          placeholder="self care hrs."
        />
      </div>
    </div>
    <button on:click={() => onClick()}>submit</button>
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
    width: 30%;
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
    width: 70%;
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
      margin: 0.5rem;
      font-size: 1.5rem;

      &:hover {
        background-color: var(--DesaturatedBlue);
        color: var(--White);
        cursor: pointer;
      }
    }
  }

  .inputBox {
    border-radius: 0.5rem;
    background-color: var(--VeryDarkBlue);
    display: flex;
    width: 65%;
    margin: 0.5rem 0;
    min-height: 3rem;
    max-height: 3rem;

    .input {
      width: 85%;
    }

    input {
      background-color: inherit;
      border: none;
      width: 100%;
      height: 100%;
      color: var(--PaleBlue);
      padding-left: 1rem;

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: var(--PaleBlue);
      }
    }

    .box {
      border-radius: inherit;
      height: 100%;
      width: 15%;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }

      &.orange {
        background-color: var(--Orange);
      }

      &.blue {
        background-color: var(--SoftBlue);
      }

      &.red {
        background-color: var(--LightRed);
      }

      &.green {
        background-color: var(--LimeGreen);
      }

      &.violet {
        background-color: var(--Violet);
      }

      &.yellow {
        background-color: var(--SoftOrange);
      }
    }
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>
